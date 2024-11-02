import { Logo } from '@/components/logo'
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'

export function Navigation() {
  return (
    <header className="container mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
      <Logo />

      <SignedIn>
        <Link href="/dashboard">Acessar o painel</Link>
      </SignedIn>

      <SignedOut>
        <SignInButton>
          <button>Fazer login</button>
        </SignInButton>
      </SignedOut>
    </header>
  )
}
