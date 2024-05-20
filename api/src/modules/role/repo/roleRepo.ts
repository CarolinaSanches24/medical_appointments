import { BaseRepo } from "../../../../../packages/services/core/baseRepo";
import { RedisClient } from "../../../../../packages/services/redis/redisClient";
import { roleSchema } from "../../../services/schemas/role/roleSchema";
import { Role } from "../domain/role";
export class RoleRepo extends BaseRepo<typeof roleSchema> {
    constructor(redisInstance?: RedisClient) {
        super(roleSchema, redisInstance);
    }

    public async insert(data: Role): Promise<any> {
        return await super.insert(data);
    }

    public async delete(id: number): Promise<void> {
        return await super.delete(id);
    }

    public async update(id: number, data: object): Promise<void> {
        return await super.update(id, data);
    }
}

export const roleRepo = new RoleRepo();
