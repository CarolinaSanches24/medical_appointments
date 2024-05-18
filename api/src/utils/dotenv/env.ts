require('dotenv').config();

export default interface Variables{
    // JWT_SECRET: string;
	// REDIS_URL: string;
    // DATABASE_URL: string;
    // DATABASE_SCHEMA: string;
    // ADMIN_CREDENCIALS_USERNAME: string;
	// ADMIN_CREDENCIALS_PASSWORD: string;
    DB_HOST:string;
    DB_USER:string;
    DB_PASSWORD:string;
    DB_NAME:string;
    DB_PORT:string;
    SERVER_PORT:string;
}

class Env{
    public variables: Variables = {
        // JWT_SECRET: this.getEnv('JWT_SECRET'),
        // REDIS_URL: this.getEnv('REDIS_URL'),
        // DATABASE_URL: this.getEnv('DATABASE_URL'),
        // DATABASE_SCHEMA: this.getEnv('DATABASE_SCHEMA'),
        // ADMIN_CREDENCIALS_USERNAME: this.getEnv('ADMIN_CREDENCIALS_USERNAME'),
        // ADMIN_CREDENCIALS_PASSWORD: this.getEnv('ADMIN_CREDENCIALS_USERNAME'),
        DB_HOST:this.getEnv('DB_HOST'),
        DB_USER:this.getEnv('DB_USER'),
        DB_PASSWORD:this.getEnv('DB_PASSWORD'),
        DB_NAME:this.getEnv('DB_NAME'),
        DB_PORT:this.getEnv('DB_PORT'),
        SERVER_PORT:this.getEnv('SERVER_PORT')
    };

    private getEnv(envName: string): string {
		const result = process.env[envName] as string;
		if (!result) throw new Error(`Environment variable ${envName} not found`);
		return result;
	}
}

export const env = new Env();