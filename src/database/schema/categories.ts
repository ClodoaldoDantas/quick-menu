import { createId } from '@paralleldrive/cuid2'
import { relations, sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { establishments } from './establishments'

export const categories = sqliteTable('categories', {
  id: text()
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('name').notNull(),
  icon: text('icon').notNull(),
  establishmentId: text('establishment_id')
    .references(() => establishments.id)
    .notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
})

export const categoriesRelations = relations(categories, ({ one }) => ({
  establishment: one(establishments, {
    fields: [categories.establishmentId],
    references: [establishments.id],
  }),
}))
