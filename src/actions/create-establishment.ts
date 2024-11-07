'use server'

import { db } from '@/database'
import { establishmentTable } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export type ActionResponse = {
  message?: string | null
}

export async function createEstablishment(
  prevState: any,
  formData: FormData
): Promise<ActionResponse> {
  const { userId } = await auth()

  if (!userId) {
    return {
      message: 'Usuário não autenticado',
    }
  }

  try {
    await db.insert(establishmentTable).values({
      name: formData.get('name')?.toString() ?? '',
      description: formData.get('description')?.toString() ?? '',
      ownerId: userId,
    })
  } catch (error) {
    return { message: 'Ocorreu um erro ao salvar o registro' }
  }

  redirect('/dashboard')
}
