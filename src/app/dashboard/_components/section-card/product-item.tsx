import { Button } from '@/components/ui/button'
import type { IProduct } from '@/types/menu'
import { XIcon } from 'lucide-react'

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

      <Button variant="outline" size="icon">
        <XIcon />
        <span className="sr-only">Deletar produto</span>
      </Button>
    </div>
  )
}
