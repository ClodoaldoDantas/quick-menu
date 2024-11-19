import { getEstablishment } from '@/actions/get-establishment'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CreateEstablishmentForm } from './_components/create-establishment-form'
import { StoreInfoBlock } from './_components/store-info-block'

export default async function CreateEstablishment() {
  const { establishment } = await getEstablishment()

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
          {establishment ? <StoreInfoBlock /> : <CreateEstablishmentForm />}
        </CardContent>
      </Card>
    </div>
  )
}
