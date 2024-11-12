import { createId } from '@paralleldrive/cuid2'
import { relations, sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { categories } from './categories'

export const products = sqliteTable('products', {
  id: text()
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  price: integer('price').notNull(),
  categoryId: text('category_id')
    .references(() => categories.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
})

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}))
