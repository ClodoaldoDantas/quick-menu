'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { EditIcon, EllipsisIcon, PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { DeleteCategoryButton } from './delete-category-button'

type CategoryMenuProps = {
  categoryId: string
}

export function CategoryMenu({ categoryId }: CategoryMenuProps) {
  const router = useRouter()

  function handleNavigateToCreateProduct() {
    router.push(`/dashboard/products/create?category=${categoryId}`)
  }

  function handleNavigateToEditCategory() {
    router.push(`/dashboard/categories/edit/${categoryId}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <EllipsisIcon />
          <span className="sr-only">Ações</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={handleNavigateToCreateProduct}>
          <PlusCircleIcon className="size-5" />
          <span>Adicionar produto</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={handleNavigateToEditCategory}>
          <EditIcon className="size-5" />
          <span>Editar categoria</span>
        </DropdownMenuItem>

        <DeleteCategoryButton categoryId={categoryId} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
