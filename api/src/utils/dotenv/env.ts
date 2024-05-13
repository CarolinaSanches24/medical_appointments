require('dotenv').config();

export default interface Variables{
    JWT_SECRET: string;
	REDIS_URL: string;
    DATABASE_URL: string;
    DATABASE_SCHEMA: string;
    ADMIN_CREDENCIALS_USERNAME: string;
	ADMIN_CREDENCIALS_PASSWORD: string;
}

class Env{
    public variables: Variables = {
        JWT_SECRET: this.getEnv('JWT_SECRET'),
        REDIS_URL: this.getEnv('REDIS_URL'),
        DATABASE_URL: this.getEnv('DATABASE_URL'),
        DATABASE_SCHEMA: this.getEnv('DATABASE_SCHEMA'),
        ADMIN_CREDENCIALS_USERNAME: this.getEnv('ADMIN_CREDENCIALS_USERNAME'),
        ADMIN_CREDENCIALS_PASSWORD: this.getEnv('ADMIN_CREDENCIALS_USERNAME')
    };

    private getEnv(envName: string): string {
		const result = process.env[envName] as string;
		if (!result) throw new Error(`Environment variable ${envName} not found`);
		return result;
	}
}

export const env = new Env();