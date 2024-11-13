'use server'

import { db } from '@/database'
import { establishments } from '@/database/schema'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

type EditEstablishmentRequest = {
  id: string
  name: string
  description: string
}

type EditEstablishmentResponse = {
  success: boolean
  message: string
}

export async function editEstablishment(
  data: EditEstablishmentRequest,
): Promise<EditEstablishmentResponse> {
  try {
    await db
      .update(establishments)
      .set({ name: data.name, description: data.description })
      .where(eq(establishments.id, data.id))
  } catch (err) {
    console.log(err)

    return {
      success: false,
      message: 'Ocorreu um erro ao editar o estabelecimento.',
    }
  }

  redirect('/dashboard')
}
