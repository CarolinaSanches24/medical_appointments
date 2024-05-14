import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { env } from "../../../utils/dotenv/env";

const poolConnection = mysql.createPool({
    host: env.variables.DB_HOST,
    user: env.variables.DB_NAME,
    password: env.variables.DB_PASSWORD,
    database: env.variables.DB_NAME,
    port: parseInt(env.variables.DB_PORT),
});

export const db = drizzle(poolConnection); 


