'use server'

import { db } from '@/database'
import { categories } from '@/database/schema'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

type UpdateCategoryRequest = {
  name: string
  icon: string
  categoryId: string
}

type UpdateCategoryResponse = {
  success: boolean
  message: string
}

export async function updateCategory({
  name,
  icon,
  categoryId,
}: UpdateCategoryRequest): Promise<UpdateCategoryResponse> {
  try {
    await db
      .update(categories)
      .set({ icon, name })
      .where(eq(categories.id, categoryId))
  } catch (err) {
    console.error(err)

    return {
      success: false,
      message: 'Erro ao editar a categoria',
    }
  }

  redirect('/dashboard')
}
