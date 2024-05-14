import { mysqlTable, varchar,  mysqlEnum , int} from "drizzle-orm/mysql-core";
import { baseColumns } from "../baseColums";

export const userSchema = mysqlTable("users", {
  ...baseColumns,
	email: varchar('email', {length: 191}).notNull().unique(),
	password: varchar('password', {length: 191}).notNull(),
	phone: varchar('phone', {length: 191}).notNull(),
	roleId: int('roleId').notNull(),
});