'use server'

import { db } from '@/database'
import { categories } from '@/database/schema'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

export async function deleteCategory(formData: FormData) {
  const categoryId = formData.get('categoryId') as string

  try {
    await db.delete(categories).where(eq(categories.id, categoryId))
  } catch (error) {
    console.log(error)
  }

  revalidatePath('/dashboard')
}
