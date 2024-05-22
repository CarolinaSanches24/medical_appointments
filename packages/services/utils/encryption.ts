import {createHash, pbkdf2Sync, randomBytes} from 'crypto';

export class Encryption {
	private generateSalt(): string {
		return randomBytes(16).toString('hex');
	}

	public parsePassword(password: string) {
		const splitPass = password.split('$');
		return {
			salt: splitPass[1],
			iterations: parseInt(splitPass[0]),
			hash: splitPass[2],
		};
	}

	public randomString(length: number, chars: string) {
		if (!chars) {
			throw new Error("Argument 'chars' is undefined");
		}

		const charsLength = chars.length;
		if (charsLength > 256) {
			throw new Error("Argument 'chars' should not have more than 256 characters" + ', otherwise unpredictability will be broken');
		}

		const bytes = randomBytes(length);
		let result = new Array(length);

		let cursor = 0;
		for (let i = 0; i < length; i++) {
			cursor += bytes[i];
			result[i] = chars[cursor % charsLength];
		}

		return result.join('');
	}

	public createRandomString(length: number): string {
		return this.randomString(length, 'ABCDEFGHIJKLMNOPQTUVWXYZ0123456789');
	}

	public async compare(data: string, password: string): Promise<boolean> {
		return data === password;
	}

	public async hashString(data: string): Promise<string> {
		return createHash('sha256').update(data).digest('hex');
	}

	public async encrypt(data: string, iterations: number = 10000, salt?: string): Promise<string> {
		if (!salt) salt = this.generateSalt();
		const result = pbkdf2Sync(data, salt, iterations, 64, 'sha512').toString('hex');
		return `${iterations}$${salt}$${result}`;
	}
}

export const encryption = new Encryption();