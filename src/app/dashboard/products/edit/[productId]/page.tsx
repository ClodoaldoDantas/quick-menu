import { getProductById } from '@/actions/get-product-by-id'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { redirect } from 'next/navigation'
import { EditProductForm } from './_components/edit-product-form'

type EditProductPageProps = {
  params: Promise<{ productId: string }>
}

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const categoryId = (await params).productId
  const { product } = await getProductById(categoryId)

  if (!product) {
    redirect('/dashboard')
  }

  return (
    <div className="flex items-center justify-center">
      <Card className="max-w-[460px] w-full">
        <CardHeader>
          <CardTitle>Editar Produto</CardTitle>
          <CardDescription>Altere as informações do produto</CardDescription>
        </CardHeader>

        <CardContent>
          <EditProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  )
}
