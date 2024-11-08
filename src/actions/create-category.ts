'use server'

import { db } from '@/database'
import { categories } from '@/database/schema'
import { redirect } from 'next/navigation'

export type CreateCategoryResponse = {
  message: string | null
}

export async function createCategory(
  icon: string,
  prevState: any,
  formData: FormData
): Promise<CreateCategoryResponse> {
  const name = formData.get('name') as string
  const establishmentId = formData.get('establishmentId') as string

  try {
    await db.insert(categories).values({
      name,
      icon,
      establishmentId,
    })
  } catch (err) {
    console.error(err)
    return { message: 'Ocorreu um erro ao salvar o registro' }
  }

  redirect('/dashboard')
}
