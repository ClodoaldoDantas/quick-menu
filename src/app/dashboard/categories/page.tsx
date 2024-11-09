import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CreateCategoryForm } from './_components/create-category-form'
import { getEstablishment } from '@/actions/get-establishment'

export default async function DashboardCategoriesPage() {
  const { establishment } = await getEstablishment()

  return (
    <div className="flex items-center justify-center">
      <Card className="max-w-[460px] w-full">
        <CardHeader>
          <CardTitle>Criar Categoria</CardTitle>
          <CardDescription>
            Crie uma nova categoria para o seu cardápio.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <CreateCategoryForm establishmentId={establishment!.id} />
        </CardContent>
      </Card>
    </div>
  )
}
