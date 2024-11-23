'use server'

import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export async function logout(): Promise<void> {
  const session = await getSession()
  session.destroy()

  redirect('/')
}
