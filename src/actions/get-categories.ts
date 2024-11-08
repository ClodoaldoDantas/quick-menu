import { db } from '@/database'
import { categories, establishments } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'

export async function getCategories() {
  const { userId } = await auth()

  const establishment = await db.query.establishments.findFirst({
    where: eq(establishments.ownerId, userId!),
    columns: {
      id: true,
    },
  })

  const records = await db.query.categories.findMany({
    where: eq(categories.establishmentId, establishment!.id),
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
