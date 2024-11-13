'use server'

import { db } from '@/database'
import { products } from '@/database/schema'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

type DeleteProductResponse = {
  status: 'success' | 'error'
}

export async function deleteProduct(
  productId: string,
): Promise<DeleteProductResponse> {
  try {
    await db.delete(products).where(eq(products.id, productId))
  } catch (error) {
    console.log(error)

    return {
      status: 'error',
    }
  }

  revalidatePath('/dashboard')

  return {
    status: 'success',
  }
}
