import {migrate} from "drizzle-orm/mysql2/migrator";
import {drizzle} from "drizzle-orm/mysql2";
import mysql2 from "mysql2/promise";
import path  from 'path';
import { env } from "../../../utils/dotenv/env";

const dbMigrate = async ()=>{
  try{
    const dbConnection = await mysql2.createConnection({
      host:env.variables.DB_HOST,
      user:env.variables.DB_USER,
      database:env.variables.DB_NAME,
      password:env.variables.DB_PASSWORD,
    });

    const dbMigrator = drizzle(dbConnection);

    console.log("🚀 Migration started...");

    await migrate(dbMigrator, {
      migrationsFolder:path.resolve("migrations")
    });
    console.log("✅ Migration completed.");
    process.exit(0);
  }catch(e){
    console.error("❌ Migration failed:", e);
    process.exit(1);
  }
};

dbMigrate();
