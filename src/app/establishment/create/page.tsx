import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CreateEstablishmentForm } from './_components/create-establishment-form'

export default async function CreateEstablishment() {
  return (
    <div className="h-screen w-full flex items-center justify-center px-4">
      <Card className="max-w-[460px] w-full">
        <CardHeader>
          <CardTitle>Criar Estabelecimento</CardTitle>
          <CardDescription>
            Crie um novo estabelecimento para começar a gerenciar o seu
            cardápio.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <CreateEstablishmentForm />
        </CardContent>
      </Card>
    </div>
  )
}