import { Separator } from '@/components/ui/separator'
import type { IProduct } from '@/types/menu'
import { MenuItem } from './menu-item'

export function MenuItems({ items }: { items: IProduct[] }) {
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
