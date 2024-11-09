import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default async function DashboardProductsPage() {
  return (
    <div className="flex items-center justify-center">
      <Card className="max-w-[460px] w-full">
        <CardHeader>
          <CardTitle>Criar Produto</CardTitle>
          <CardDescription>
            Adicione um novo item ao seu cardápio.
          </CardDescription>
        </CardHeader>

        <CardContent>{/* add product form */}</CardContent>
      </Card>
    </div>
  )
}
