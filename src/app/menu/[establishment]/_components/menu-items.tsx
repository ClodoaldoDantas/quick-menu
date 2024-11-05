import { Separator } from '@/components/ui/separator'
import { MenuItem } from './menu-item'

type MenuItemsProps = {
  items: {
    name: string
    description: string
    price: number
  }[]
}

export function MenuItems({ items }: MenuItemsProps) {
  return (
    <ul className="space-y-6">
      {items.map((item, index) => (
        <li key={item.name}>
          <MenuItem
            name={item.name}
            description={item.description}
            price={item.price}
          />

          {index !== items.length - 1 && (
            <Separator className="mt-6 bg-gray-200" />
          )}
        </li>
      ))}
    </ul>
  )
}
