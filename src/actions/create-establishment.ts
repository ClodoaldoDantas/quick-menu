'use server'

import { db } from '@/database'
import { establishments } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export type CreateEstablishmentResponse = {
  errors: Record<string, string[]> | null
  success: boolean
  message: string | null
  payload: FormData | null
}

const schema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
  description: z.string(),
})

export async function createEstablishment(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  prevState: any,
  formData: FormData,
): Promise<CreateEstablishmentResponse> {
  const { userId } = await auth()

  if (!userId) {
    throw new Error('User is not authenticated')
  }

  const validatedFields = schema.safeParse({
    name: formData.get('name') as string,
    description: formData.get('description') as string,
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      payload: formData,
      message: null,
    }
  }

  const { name, description } = validatedFields.data

  try {
    await db.insert(establishments).values({
      name,
      description,
      ownerId: userId,
    })
  } catch (err) {
    console.log(err)

    return {
      success: false,
      errors: null,
      payload: formData,
      message: 'Ocorreu um erro ao salvar o registro.',
    }
  }

  redirect('/dashboard')
}
