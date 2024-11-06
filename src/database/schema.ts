import { sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { createId } from '@paralleldrive/cuid2'

export const establishmentTable = sqliteTable('establishment', {
  id: text().$defaultFn(() => createId()),
  name: text('name').notNull(),
  description: text('description').notNull(),
  ownerId: text('owner_id').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
})

export type SelectEstablishment = typeof establishmentTable.$inferSelect
