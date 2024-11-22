import { db } from '@/database'
import { establishments } from '@/database/schema'
import { eq } from 'drizzle-orm'

export async function getEstablishment() {
  const userId = null

  if (!userId) {
    throw new Error('User is not authenticated')
  }

  const establishment = await db.query.establishments.findFirst({
    where: eq(establishments.ownerId, userId),
    columns: {
      id: true,
      name: true,
      description: true,
    },
  })

  return {
    establishment,
  }
}
