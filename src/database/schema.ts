import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const establishmentTable = sqliteTable('establishment', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  slug: text('slug').unique().notNull(),
  description: text('description').notNull(),
  ownerId: text('owner_id').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
})
