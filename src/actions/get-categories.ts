import { db } from '@/database'
import { categories } from '@/database/schema'
import { eq } from 'drizzle-orm'

export async function getCategories(establishmentId: string) {
  const records = await db.query.categories.findMany({
    where: eq(categories.establishmentId, establishmentId),
    columns: {
      id: true,
      name: true,
      icon: true,
    },
  })

  return {
    categories: records,
  }
}