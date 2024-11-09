import { Card, CardHeader, CardTitle } from '@/components/ui/card'

import { PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DeleteCategory } from './delete-category-button'

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

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href={`/dashboard/products?category=${category.id}`}>
              <PlusIcon />
              <span className="sr-only">Adicionar produto</span>
            </Link>
          </Button>

          <DeleteCategory categoryId={category.id} />
        </div>
      </CardHeader>
    </Card>
  )
}
