import { db } from '@/database'
import { establishmentTable } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'

export async function getEstablishment() {
  const { userId } = await auth()

  if (!userId) {
    throw new Error('User not authenticated')
  }

  const result = await db
    .select()
    .from(establishmentTable)
    .where(eq(establishmentTable.ownerId, userId))

  return {
    establishment: result.length > 0 ? result[0] : null,
  }
}
