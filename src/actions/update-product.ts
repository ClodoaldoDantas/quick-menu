'use server'

import { db } from '@/database'
import { products } from '@/database/schema'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

type UpdateProductRequest = {
  name: string
  description: string
  price: number
  productId: string
}

type UpdateProductResponse = {
  success: boolean
  message: string
}

export async function updateProduct({
  name,
  description,
  price,
  productId,
}: UpdateProductRequest): Promise<UpdateProductResponse> {
  try {
    await db
      .update(products)
      .set({ name, price, description })
      .where(eq(products.id, productId))
  } catch (err) {
    console.error(err)

    return {
      success: false,
      message: 'Erro ao editar o produto',
    }
  }

  redirect('/dashboard')
}
