import { relations, sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { createId } from '@paralleldrive/cuid2'
import { categories } from './categories'

export const establishments = sqliteTable('establishments', {
  id: text()
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  ownerId: text('owner_id').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
})

export const establishmentsRelations = relations(
  establishments,
  ({ many }) => ({
    categories: many(categories),
  })
)
