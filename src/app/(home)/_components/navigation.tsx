import { Logo } from '@/components/logo'
import { getSession } from '@/lib/session'
import Link from 'next/link'

export async function Navigation() {
  const session = await getSession()

  return (
    <header className="container mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
      <Logo />

      {session.isLoggedIn ? (
        <Link href="/dashboard">Acessar o painel</Link>
      ) : (
        <Link href="/sign-in">Fazer login</Link>
      )}
    </header>
  )
}
