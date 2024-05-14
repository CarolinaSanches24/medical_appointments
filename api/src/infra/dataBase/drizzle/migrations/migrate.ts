import {migrate} from "drizzle-orm/mysql2/migrator";
import { db } from "../db";


const main = async () => {
  console.log("🚀 Migration started...");
  await migrate(db, { migrationsFolder: "./migrations" });
  console.log("✅ Migration completed.");
};

main().catch((error) => {
  console.error("❌ Migration failed:", error);
  process.exit(1);
});