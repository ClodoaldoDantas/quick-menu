import { db } from '@/database'
import { establishmentTable } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'

export async function getEstablishment() {
  const { userId } = await auth()

  const establishment = await db.query.establishmentTable.findFirst({
    where: eq(establishmentTable.ownerId, userId!),
  })

  return {
    establishment,
  }
}
