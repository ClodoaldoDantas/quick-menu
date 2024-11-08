import { db } from '@/database'
import { establishments } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'

export async function getEstablishment() {
  const { userId } = await auth()

  const establishment = await db.query.establishments.findFirst({
    where: eq(establishments.ownerId, userId!),
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
