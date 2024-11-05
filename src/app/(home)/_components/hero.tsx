import { Button } from '@/components/ui/button'
import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-44">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold font-serif tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Crie menus online impressionantes em minutos
            </h1>
            <p className="mx-auto max-w-[800px] text-zinc-500 md:text-xl">
              Seu cardápio fica online, sempre atualizado e acessível para os
              clientes. Modernize o atendimento e facilite os pedidos de forma
              prática e rápida!
            </p>
          </div>

          <SignedOut>
            <SignUpButton>
              <Button size="lg" className="text-lg">
                Crie sua conta grátis
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Button asChild size="lg" className="text-lg">
              <Link href="/dashboard">Criar novo cardápio</Link>
            </Button>
          </SignedIn>
        </div>
      </div>
    </section>
  )
}
