import { Logo } from '@/components/logo'
import Link from 'next/link'

export function Navigation() {
  return (
    <header className="container mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
      <Logo />

      {/* <Link href="/dashboard">Acessar o painel</Link> */}
      <Link href="/sign-in">Fazer login</Link>
    </header>
  )
}
