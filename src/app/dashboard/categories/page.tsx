import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CreateCategoryForm } from './_components/create-category-form'

export default async function DashboardCategoriesPage() {
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
          <CreateCategoryForm />
        </CardContent>
      </Card>
    </div>
  )
}
