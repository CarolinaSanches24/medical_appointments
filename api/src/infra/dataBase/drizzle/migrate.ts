import {migrate} from "drizzle-orm/mysql2/migrator";
import { db } from "./db";

const main = async () => {
    const path = './api/src/infra/dataBase/drizzle';
    console.log("🚀 migration started ... ");
    await migrate(db, { migrationsFolder: path}); 
    console.log(path)
    console.log("migration ended ...");
    process.exit(0);
  };
  
  main().catch((err) => {
    console.log(err);
    process.exit(1);
  });