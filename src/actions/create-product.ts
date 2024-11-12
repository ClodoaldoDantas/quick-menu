'use server'

import { db } from '@/database'
import { products } from '@/database/schema'
import { redirect } from 'next/navigation'

type CreateProductRequest = {
  name: string
  description: string
  price: number
  categoryId: string
}

type CreateProductResponse = {
  success: boolean
  message: string
}

export async function createProduct({
  name,
  description,
  price,
  categoryId,
}: CreateProductRequest): Promise<CreateProductResponse> {
  try {
    await db.insert(products).values({
      name,
      description,
      categoryId,
      price,
    })
  } catch (err) {
    console.error(err)

    return {
      success: false,
      message: 'Erro ao criar o produto',
    }
  }

  redirect('/dashboard')
}
