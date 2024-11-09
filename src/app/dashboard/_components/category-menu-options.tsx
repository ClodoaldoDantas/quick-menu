'use client'

import { Button } from '@/components/ui/button'
import { MenuIcon, ShoppingBasketIcon, Trash2Icon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { deleteCategory } from '@/actions/delete-category'
import Link from 'next/link'

export function CategoryMenuOptions({ categoryId }: { categoryId: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <MenuIcon className="size-6" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <form action={deleteCategory}>
              <input name="categoryId" type="hidden" value={categoryId} />
              <button className="flex items-center gap-2" type="submit">
                <Trash2Icon />
                <span>Deletar categoria</span>
              </button>
            </form>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link
              className="flex items-center gap-2"
              href={`/dashboard/products?category=${categoryId}`}
            >
              <ShoppingBasketIcon />
              <span>Adicionar produto</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
