import { Button } from '@/components/ui/button'
import type { IProduct } from '@/types/menu'
import { priceFormatter } from '@/utils/price-formatter'
import { EditIcon } from 'lucide-react'
import Link from 'next/link'
import { DeleteProductButton } from './delete-product-button'

export function ProductItem({ product }: { product: IProduct }) {
  const formattedPrice = priceFormatter.format(product.price / 100)

  return (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <h3 className="text-base sm:text-lg font-serif font-medium">
          {product.name}
        </h3>

        <p className="text-zinc-600 text-sm">{product.description}</p>

        <span className="block text-base font-serif font-medium">
          {formattedPrice}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/dashboard/products/edit/${product.id}`}>
            <EditIcon />
            <span className="sr-only">Editar produto</span>
          </Link>
        </Button>

        <DeleteProductButton productId={product.id} />
      </div>
    </div>
  )
}
