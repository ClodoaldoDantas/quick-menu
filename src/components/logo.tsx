import { ChefHat } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <ChefHat className="size-6" />
      <span className="text-xl font-medium font-serif">QuickMenu</span>
    </div>
  )
}
