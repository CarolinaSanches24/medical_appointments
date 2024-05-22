import { TempCode } from './../../../packages/services/utils/tempCode';
import { RedisClient } from "../../../packages/services/redis/redisClient";
import { env } from "../utils/dotenv/env";

const redisClient: RedisClient = new RedisClient(env.variables.REDIS_URL);
const tempCode = new TempCode(redisClient);

export{redisClient, tempCode}