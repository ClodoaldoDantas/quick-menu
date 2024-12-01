import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CreateEstablishmentForm } from './_components/create-establishment-form'

export default function SignUpPage() {
  return (
    <Card className="max-w-[460px] w-full">
      <CardHeader>
        <CardTitle>Criar Estabelecimento</CardTitle>
        <CardDescription>
          Crie um novo estabelecimento para começar a gerenciar o seu cardápio.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <CreateEstablishmentForm />
      </CardContent>
    </Card>
  )
}
