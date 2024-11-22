'use server'

import type { CreateEstablishmentFormData } from '@/app/sign-up/_components/create-establishment-form'
import { db } from '@/database'
import { establishments } from '@/database/schema'
import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

type CreateEstablishmentResponse = {
  success: boolean
  message: string
}

export async function createEstablishment(
  data: CreateEstablishmentFormData,
): Promise<CreateEstablishmentResponse> {
  const { name, description, email, password } = data

  const establishmentAlreadyExists = await db.query.establishments.findFirst({
    where: eq(establishments.email, email),
    columns: {
      id: true,
    },
  })

  if (establishmentAlreadyExists) {
    return {
      success: false,
      message: 'Estabelecimento já cadastrado',
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    await db.insert(establishments).values({
      name,
      description,
      email,
      password: hashedPassword,
    })
  } catch (err) {
    console.log(err)

    return {
      success: false,
      message: 'Erro ao criar estabelecimento',
    }
  }

  redirect('/sign-in')
}
