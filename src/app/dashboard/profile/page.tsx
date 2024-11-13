import { getEstablishment } from '@/actions/get-establishment'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { EditEstablishmentForm } from './_components/edit-establishment-form'

export default async function DashboardProfilePage() {
  const { establishment } = await getEstablishment()

  return (
    <div className="flex items-center justify-center">
      <Card className="max-w-[460px] w-full">
        <CardHeader>
          <CardTitle>Editar Estabelecimento</CardTitle>
          <CardDescription>
            Atualize as informações do seu estabelecimento.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <EditEstablishmentForm establishment={establishment} />
        </CardContent>
      </Card>
    </div>
  )
}
