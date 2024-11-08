'use server'

import { db } from '@/database'
import { categories, establishments } from '@/database/schema'
import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

export type CreateCategoryResponse = {
  message: string | null
}

export async function createCategory(
  icon: string,
  prevState: any,
  formData: FormData
): Promise<CreateCategoryResponse> {
  const { userId } = await auth()

  const establishment = await db.query.establishments.findFirst({
    where: eq(establishments.ownerId, userId!),
    columns: {
      id: true,
    },
  })

  try {
    await db.insert(categories).values({
      icon,
      name: formData.get('name') as string,
      establishmentId: establishment!.id,
    })
  } catch (err) {
    console.error(err)
    return { message: 'Ocorreu um erro ao salvar o registro' }
  }

  redirect('/dashboard')
}
