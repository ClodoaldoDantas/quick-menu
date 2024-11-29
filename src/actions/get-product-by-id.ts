import { db } from '@/database'
import { products } from '@/database/schema'
import { eq } from 'drizzle-orm'

export async function getProductById(productId: string) {
  const product = await db.query.products.findFirst({
    where: eq(products.id, productId),
    columns: {
      id: true,
      name: true,
      description: true,
      price: true,
    },
  })

  return {
    product,
  }
}
