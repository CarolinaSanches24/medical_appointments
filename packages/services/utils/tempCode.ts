import { RedisClient } from './../redis/redisClient';
import { Encryption, encryption } from './encryption';

export class TempCode {
	private redisClient: RedisClient;
	private encryption: Encryption;

	private tokenExpireTime: number = 600; // 10 min

	constructor(redisClient: RedisClient) {
		this.redisClient = redisClient;
		this.encryption = encryption;
	}

	public async generateCode(key: string, code?: string): Promise<string> {
		if (!code) code = this.encryption.createRandomString(6);
		await this.redisClient.set(key, code, this.tokenExpireTime);
		return code;
	}

	public async checkCode(key: string, code: string): Promise<boolean> {
		const redisCode: string | null = await this.redisClient.get(key);
		if (redisCode === null) {
			return false;
		}
		return redisCode === code;
	}
}