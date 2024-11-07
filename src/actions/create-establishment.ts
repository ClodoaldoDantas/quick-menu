'use server'

import { db } from '@/database'
import { establishmentTable } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

export type ActionResponse = {
  message: string | null
}

export async function createEstablishment(
  prevState: any,
  formData: FormData
): Promise<ActionResponse> {
  const { userId } = await auth()

  const result = await db.query.establishmentTable.findFirst({
    where: eq(establishmentTable.ownerId, userId!),
    columns: {
      id: true,
    },
  })

  if (result?.id) {
    return { message: 'Você já possui um estabelecimento cadastrado' }
  }

  try {
    await db.insert(establishmentTable).values({
      name: formData.get('name')?.toString() ?? '',
      description: formData.get('description')?.toString() ?? '',
      ownerId: userId!,
    })
  } catch (error) {
    return { message: 'Ocorreu um erro ao salvar o registro' }
  }

  redirect('/dashboard')
}
