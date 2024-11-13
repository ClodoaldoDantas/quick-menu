import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { ICategory } from '@/types/menu'
import Link from 'next/link'
import { DeleteCategoryButton } from './delete-category-button'
import { ProductItem } from './product-item'

export function SectionCard({ category }: { category: ICategory }) {
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

          <DeleteCategoryButton categoryId={category.id} />
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {category.products.map((product, index) => (
            <li key={product.id}>
              <ProductItem product={product} />

              {index !== category.products.length - 1 && (
                <Separator className="mt-3 bg-gray-200" />
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
