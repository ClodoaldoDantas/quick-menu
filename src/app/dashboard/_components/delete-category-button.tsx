'use client'

import { deleteCategory } from '@/actions/delete-category'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Trash2Icon } from 'lucide-react'
import type { FormEvent } from 'react'

export function DeleteCategory({ categoryId }: { categoryId: string }) {
  const { toast } = useToast()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const canBeDeleted = window.confirm(
      'Deseja realmente deletar esta categoria?',
    )

    if (!canBeDeleted) return

    const response = await deleteCategory(new FormData(event.currentTarget))

    if (response.status === 'success') {
      toast({ title: 'Categoria deletada com sucesso' })
    } else {
      toast({ title: 'Erro ao deletar categoria', variant: 'destructive' })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="categoryId" type="hidden" value={categoryId} />
      <Button type="submit" variant="outline" size="icon">
        <Trash2Icon />
        <span className="sr-only">Deletar categoria</span>
      </Button>
    </form>
  )
}
