import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Suspense } from 'react'
import { CreateProductForm } from './_components/create-product-form'

export default function DashboardProductsPage() {
  return (
    <div className="flex items-center justify-center">
      <Card className="max-w-[460px] w-full">
        <CardHeader>
          <CardTitle>Criar Produto</CardTitle>
          <CardDescription>
            Adicione um novo item ao seu cardápio.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Suspense>
            <CreateProductForm />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}
