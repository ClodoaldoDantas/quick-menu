import { db } from '@/database'
import { establishments } from '@/database/schema'
import { getSession } from '@/lib/session'
import { eq } from 'drizzle-orm'

export async function getEstablishment() {
  const session = await getSession()

  if (!session.isLoggedIn) {
    return {
      establishment: undefined,
    }
  }

  const establishment = await db.query.establishments.findFirst({
    where: eq(establishments.email, session.email),
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
