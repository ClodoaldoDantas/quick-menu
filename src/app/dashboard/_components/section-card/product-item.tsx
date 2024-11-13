import type { IProduct } from '@/types/menu'
import { DeleteProductButton } from './delete-product-button'
import { ProductInfoButton } from './product-info-button'

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

      <div className="flex items-center gap-2">
        {product.description && (
          <ProductInfoButton description={product.description} />
        )}

        <DeleteProductButton productId={product.id} />
      </div>
    </div>
  )
}
