import { priceFormatter } from '@/utils/price-formatter'

type MenuItemProps = {
  name: string
  description: string
  price: number
}

export function MenuItem({ name, description, price }: MenuItemProps) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-serif font-medium text-zinc-800">{name}</h3>
        <p className="mt-1 text-base text-zinc-600">{description}</p>
      </div>
      <span className="text-xl font-serif font-medium text-zinc-800">
        {priceFormatter.format(price)}
      </span>
    </div>
  )
}
