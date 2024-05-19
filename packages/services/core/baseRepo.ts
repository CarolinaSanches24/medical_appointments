import { BaseDomain } from "./baseDomain";
import { eq } from "drizzle-orm";
import { db } from "./../../../api/src/infra/dataBase/drizzle/db";
import { RedisClient } from "./../redis/redisClient";
import { MySqlTable } from "drizzle-orm/mysql-core";

export interface QueryCaching {
  key: string;
  expire: number;
}
interface IBaseRepo {
  delete(id: number);
  insert(data: BaseDomain);
  update<T>(id: number, data: T);
}

export abstract class BaseRepo
  implements IBaseRepo
{
  public readonly tableName: MySqlTable;
  public readonly redisInstance?: RedisClient;

  constructor(tableName: MySqlTable, redisInstance?: RedisClient) {
    this.tableName = tableName;
    this.redisInstance = redisInstance;
  }

  private async handleCaching(
    query: () => Promise<any>,
    queryCaching: QueryCaching
  ): Promise<any> {
    if (!this.redisInstance) throw new Error("Redis instance is not provided");
    const cachedData = await this.redisInstance.get(queryCaching.key);
    if (cachedData) return JSON.parse(cachedData);
    const result = await query();
    await this.redisInstance.set(
      queryCaching.key,
      JSON.stringify(result),
      queryCaching.expire
    );
    return result;
  }

  private async raw(
    query: () => Promise<any>,
    queryCaching?: QueryCaching
  ): Promise<any> {
    if (queryCaching) return await this.handleCaching(query, queryCaching);
    return await query();
  }

  public async delete(id: number): Promise<void> {
    console.log(`Deleting record with ID: ${id}`);
    const query = () => db.delete(this.tableName).where(eq("id", id)).execute();
    await this.raw(query);
    if (this.redisInstance) {
      await this.redisInstance.delete(this.getCacheKey(id));
    }
  }

  private getCacheKey(id: number): string {
    return `cacheKey:${id}`;
  }

  public async insert(data: any): Promise<any> {
    const query = () => db.insert(this.tableName).values(data).execute();
    return await this.raw(query);
  }

  public async update<T>(id: number, data: any): Promise<void> {
    const query = () =>
      db.update(this.tableName).set(data).where(eq("id", id)).execute();
    await this.raw(query);
  }
}
