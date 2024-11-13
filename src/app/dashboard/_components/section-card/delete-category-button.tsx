'use client'

import { deleteCategory } from '@/actions/delete-category'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Trash2Icon } from 'lucide-react'

export function DeleteCategoryButton({ categoryId }: { categoryId: string }) {
  const { toast } = useToast()

  async function handleDeleteCategory() {
    const canBeDeleted = window.confirm(
      'Deseja realmente deletar esta categoria?',
    )

    if (!canBeDeleted) return

    const response = await deleteCategory(categoryId)

    if (response.status === 'success') {
      toast({ title: 'Categoria deletada com sucesso' })
    } else {
      toast({ title: 'Erro ao deletar categoria', variant: 'destructive' })
    }
  }

  return (
    <Button onClick={handleDeleteCategory} variant="outline" size="icon">
      <Trash2Icon />
      <span className="sr-only">Deletar categoria</span>
    </Button>
  )
}
