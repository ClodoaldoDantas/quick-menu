'use server'

import type { LoginFormData } from '@/app/sign-in/_components/login-form'
import { db } from '@/database'
import { establishments } from '@/database/schema'
import { getSession } from '@/lib/session'
import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

type LoginResponse = {
  success: boolean
  message: string
}

export async function login(data: LoginFormData): Promise<LoginResponse> {
  const { email, password } = data

  const establishment = await db.query.establishments.findFirst({
    where: eq(establishments.email, email),
    columns: {
      id: true,
      password: true,
    },
  })

  if (!establishment) {
    return {
      success: false,
      message: 'Credenciais inválidas',
    }
  }

  const passwordMatch = await bcrypt.compare(password, establishment.password)

  if (!passwordMatch) {
    return {
      success: false,
      message: 'Credenciais inválidas',
    }
  }

  const session = await getSession()
  session.email = email
  session.isLoggedIn = true

  await session.save()

  redirect('/dashboard')
}
