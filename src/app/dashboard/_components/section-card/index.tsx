import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Separator } from '@/components/ui/separator'
import type { ICategory } from '@/types/menu'
import { icons } from '@/utils/icons'
import { CategoryMenu } from './category-menu'
import { ProductItem } from './product-item'

export function SectionCard({ category }: { category: ICategory }) {
  const Icon = icons[category.icon as keyof typeof icons]

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-serif text-lg sm:text-xl flex items-center gap-2">
          <Icon className="size-6" />
          {category.name}
        </CardTitle>

        <CategoryMenu categoryId={category.id} />
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
