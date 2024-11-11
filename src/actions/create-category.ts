'use server'

import { db } from '@/database'
import { categories } from '@/database/schema'
import { redirect } from 'next/navigation'

type CreateCategoryRequest = {
  name: string
  icon: string
  establishmentId: string
}

type CreateCategoryResponse = {
  success: boolean
  message: string
}

export async function createCategory({
  name,
  icon,
  establishmentId,
}: CreateCategoryRequest): Promise<CreateCategoryResponse> {
  try {
    await db.insert(categories).values({
      icon,
      name,
      establishmentId,
    })
  } catch (err) {
    console.error(err)

    return {
      success: false,
      message: 'Erro ao criar categoria',
    }
  }

  redirect('/dashboard')
}
