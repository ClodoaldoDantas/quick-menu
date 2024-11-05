import { Card, CardContent } from '@/components/ui/card'
import { MenuIcon, Share2, UserPlus } from 'lucide-react'

const steps = [
  {
    title: 'Cadastrar Estabelecimento',
    description:
      'Cadastre-se e crie um perfil para o seu estabelecimento através da nossa plataforma',
    icon: UserPlus,
  },
  {
    title: 'Crie seu cardápio',
    description:
      'Adicione seus pratos, bebidas e especialidades usando nosso intuitivo construtor de menu',
    icon: MenuIcon,
  },
  {
    title: 'Compartilhar página',
    description:
      'Publique seu cardápio e compartilhe-o com os clientes por meio de um site exclusivo e QR Code.',
    icon: Share2,
  },
]

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Como funciona
        </h2>

        <div className="grid gap-6 items-center md:grid-cols-3">
          {steps.map((step, index) => {
            const { icon: Icon } = step

            return (
              <Card key={step.title} className="border-2">
                <CardContent className="flex flex-col items-center text-center space-y-2 p-6">
                  <Icon className="h-12 w-12 text-primary" />

                  <h3 className="text-xl font-semibold">
                    {index + 1}. {step.title}
                  </h3>

                  <p className="text-zinc-500">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
