import { Button } from '@/components/ui/button'
import { getSession } from '@/lib/session'
import Link from 'next/link'

export async function Hero() {
  const session = await getSession()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-44">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold font-serif tracking-tighter sm:text-4xl md:text-5xl">
              Crie menus online impressionantes em minutos
            </h1>
            <p className="mx-auto max-w-[800px] text-zinc-500 md:text-xl">
              Seu cardápio fica online, sempre atualizado e acessível para os
              clientes. Modernize o atendimento e facilite os pedidos de forma
              prática e rápida!
            </p>
          </div>

          {session.isLoggedIn ? (
            <Button asChild size="lg" className="text-lg">
              <Link href="/dashboard">Editar meu cardápio</Link>
            </Button>
          ) : (
            <Button size="lg" className="text-lg">
              <Link href="/sign-up">Crie sua conta grátis</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
