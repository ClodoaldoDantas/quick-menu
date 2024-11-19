import { db } from '@/database'
import { establishments } from '@/database/schema'
import { eq } from 'drizzle-orm'

export async function getEstablishmentById(establishmentId: string) {
  const establishment = await db.query.establishments.findFirst({
    where: eq(establishments.id, establishmentId),
    columns: {
      id: true,
      name: true,
      description: true,
    },
    with: {
      categories: {
        columns: {
          id: true,
          name: true,
          icon: true,
        },
        with: {
          products: {
            columns: {
              id: true,
              name: true,
              description: true,
              price: true,
            },
          },
        },
      },
    },
  })

  return {
    establishment,
  }
}
