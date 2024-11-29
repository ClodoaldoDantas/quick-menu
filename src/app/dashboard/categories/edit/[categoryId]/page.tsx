import { getCategoryById } from '@/actions/get-category-by-id'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { redirect } from 'next/navigation'
import { EditCategoryForm } from './_components/edit-category-form'

type EditCategoryPageProps = {
  params: Promise<{ categoryId: string }>
}

export default async function EditCategoryPage({
  params,
}: EditCategoryPageProps) {
  const categoryId = (await params).categoryId
  const { category } = await getCategoryById(categoryId)

  if (!category) {
    redirect('/dashboard')
  }

  return (
    <div className="flex items-center justify-center">
      <Card className="max-w-[460px] w-full">
        <CardHeader>
          <CardTitle>Editar Categoria</CardTitle>
          <CardDescription>Altere as informações da categoria</CardDescription>
        </CardHeader>

        <CardContent>
          <EditCategoryForm category={category} />
        </CardContent>
      </Card>
    </div>
  )
}
