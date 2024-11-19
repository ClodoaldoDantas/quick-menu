import type { IProduct } from '@/types/menu'
import { priceFormatter } from '@/utils/price-formatter'

export function MenuItem({ name, description, price }: Omit<IProduct, 'id'>) {
  const formattedPrice = priceFormatter.format(price / 100)

  return (
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-serif font-medium text-zinc-800">{name}</h3>

        {description && (
          <p className="mt-1 text-base text-zinc-600">{description}</p>
        )}
      </div>
      <span className="text-xl font-serif font-medium text-zinc-800">
        {formattedPrice}
      </span>
    </div>
  )
}
