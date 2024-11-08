'use server'

import { db } from '@/database'
import { establishments } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export type CreateEstablishmentResponse = {
  message: string | null
}

export async function createEstablishment(
  prevState: any,
  formData: FormData
): Promise<CreateEstablishmentResponse> {
  const { userId } = await auth()

  try {
    await db.insert(establishments).values({
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      ownerId: userId!,
    })
  } catch (error) {
    return { message: 'Ocorreu um erro ao salvar o registro' }
  }

  redirect('/dashboard')
}
