import type { IProduct } from '@/types/menu'
import { DeleteProductButton } from './delete-product-button'

export function ProductItem({ product }: { product: IProduct }) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price / 100)

  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl font-serif font-medium">{product.name}</h3>

        <span className="text-lg font-serif font-medium text-muted-foreground">
          {formattedPrice}
        </span>
      </div>

      <DeleteProductButton productId={product.id} />
    </div>
  )
}
