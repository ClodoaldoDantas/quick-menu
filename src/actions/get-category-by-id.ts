import { db } from '@/database'
import { categories } from '@/database/schema'
import { eq } from 'drizzle-orm'

export async function getCategoryById(categoryId: string) {
  const category = await db.query.categories.findFirst({
    where: eq(categories.id, categoryId),
    columns: {
      id: true,
      name: true,
      icon: true,
    },
  })

  return {
    category,
  }
}
