'use server'

import type { CreateEstablishmentFormData } from '@/app/establishment/create/_components/create-establishment-form'
import { db } from '@/database'
import { establishments } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

type CreateEstablishmentResponse = {
  success: boolean
  message: string
}

export async function createEstablishment(
  data: CreateEstablishmentFormData,
): Promise<CreateEstablishmentResponse> {
  const { userId } = await auth()

  if (!userId) {
    return { success: false, message: 'Usuário não autenticado' }
  }

  const { name, description } = data

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
      message: 'Erro ao criar estabelecimento',
    }
  }

  redirect('/dashboard')
}
