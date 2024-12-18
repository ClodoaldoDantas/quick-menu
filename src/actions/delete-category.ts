'use server'

import { db } from '@/database'
import { categories } from '@/database/schema'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

type DeleteCategoryResponse = {
  status: 'success' | 'error'
}

export async function deleteCategory(
  categoryId: string,
): Promise<DeleteCategoryResponse> {
  try {
    await db.delete(categories).where(eq(categories.id, categoryId))
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
