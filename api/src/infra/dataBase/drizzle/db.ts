import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { userSchema } from "../../../services/schemas/users/userSchema";
import { env } from "../../../utils/dotenv/env";

const poolConnection = mysql.createPool({
    host: env.variables.DB_HOST,
    user: env.variables.DB_NAME,
    password: env.variables.DB_PASSWORD,
    database: env.variables.DB_NAME,
    port: parseInt(env.variables.DB_PORT),
});

export const db = drizzle(poolConnection); 

async function testConnection() {
    try {
        const result = await db.select().from(userSchema)
        console.log(result);
    } catch (error) {
        console.error('Erro ao testar conexão MySQL:', error);
    }
}
testConnection();

