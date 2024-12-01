import { deleteCategory } from '@/actions/delete-category'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useToast } from '@/hooks/use-toast'
import { TrashIcon } from 'lucide-react'

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
    <DropdownMenuItem asChild>
      <button type="button" className="w-full" onClick={handleDeleteCategory}>
        <TrashIcon className="size-5" />
        <span>Deletar categoria</span>
      </button>
    </DropdownMenuItem>
  )
}
