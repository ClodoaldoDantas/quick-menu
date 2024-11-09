'use server'

import { db } from '@/database'
import { categories, establishments } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export type CreateCategoryResponse = {
  message: string | null
  errors: Record<string, string[]> | null
  success: boolean
}

const schema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
})

export async function createCategory(
  icon: string,
  establishmentId: string,
  prevState: any,
  formData: FormData
): Promise<CreateCategoryResponse> {
  const validatedFields = schema.safeParse({
    name: formData.get('name') as string,
  })

  if (!validatedFields.success) {
    return {
      message: null,
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
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
      message: 'Ocorreu um erro ao salvar o registro',
      errors: null,
    }
  }

  redirect('/dashboard')
}
