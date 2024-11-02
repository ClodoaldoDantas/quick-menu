import { ChefHat } from 'lucide-react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link className="flex items-center gap-2" href="/">
      <ChefHat className="size-8" />
      <span className="text-2xl font-medium font-serif">QuickMenu</span>
    </Link>
  )
}
