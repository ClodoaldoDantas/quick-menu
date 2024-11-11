'use server'

import { db } from '@/database'
import { categories } from '@/database/schema'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export type CreateCategoryResponse = {
  success: boolean
  errors: Record<string, string[]> | null
  message: string | null
  payload: FormData | null
}

const schema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
})

export async function createCategory(
  icon: string,
  establishmentId: string,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  prevState: any,
  formData: FormData,
): Promise<CreateCategoryResponse> {
  const validatedFields = schema.safeParse({
    name: formData.get('name') as string,
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: null,
      payload: formData,
    }
  }

  const { name } = validatedFields.data

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
      errors: null,
      message: 'Ocorreu um erro ao salvar o registro',
      payload: formData,
    }
  }

  redirect('/dashboard')
}
