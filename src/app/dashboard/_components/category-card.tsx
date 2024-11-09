import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { CategoryMenuOptions } from './category-menu-options'

type CategoryCardProps = {
  category: {
    icon: string
    id: string
    name: string
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-serif text-xl">{category.name}</CardTitle>
        <CategoryMenuOptions categoryId={category.id} />
      </CardHeader>
    </Card>
  )
}
