'use server'

import { db } from '@/database'
import { establishmentTable } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export async function createEstablishment(formData: FormData) {
  const { userId } = await auth()

  if (!userId) {
    throw new Error('User not authenticated')
  }

  const data = {
    name: formData.get('name')?.toString() ?? '',
    description: formData.get('description')?.toString() ?? '',
    ownerId: userId,
  }

  await db.insert(establishmentTable).values({
    name: data.name,
    description: data.description,
    ownerId: data.ownerId,
  })

  redirect('/dashboard')
}
