import { Card, CardHeader, CardTitle } from '@/components/ui/card'

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
      <CardHeader>
        <CardTitle className="font-serif text-xl">{category.name}</CardTitle>
      </CardHeader>
    </Card>
  )
}
