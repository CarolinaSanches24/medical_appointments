import {datetime, int, varchar} from 'drizzle-orm/mysql-core';
import {sql} from 'drizzle-orm';

export const baseColumns = {
	id: int('id').autoincrement().primaryKey(),
	pid: varchar('pid', {length: 191}).notNull(),
	created_at: datetime('created_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	updated_at: datetime('updated_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
};