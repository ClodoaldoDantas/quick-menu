import type { IProduct } from '@/types/menu'
import { priceFormatter } from '@/utils/price-formatter'
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
        <DeleteProductButton productId={product.id} />
      </div>
    </div>
  )
}
