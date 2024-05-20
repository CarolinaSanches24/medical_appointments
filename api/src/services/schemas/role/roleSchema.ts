import {mysqlTable, varchar} from 'drizzle-orm/mysql-core';
import { baseColumns } from '../baseColums';

export const roleSchema = mysqlTable('Roles', {
	...baseColumns,
	name: varchar('name', {length: 191}).notNull(),
	description: varchar('description', {length: 191}).notNull(),
});