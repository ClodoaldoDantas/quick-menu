'use client'

import { deleteProduct } from '@/actions/delete-product'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { TrashIcon } from 'lucide-react'

export function DeleteProductButton({ productId }: { productId: string }) {
  const { toast } = useToast()

  async function handleDeleteProduct() {
    const canBeDeleted = window.confirm(
      'Deseja realmente deletar este produto?',
    )

    if (!canBeDeleted) return

    const response = await deleteProduct(productId)

    if (response.status === 'success') {
      toast({ title: 'Produto deletado com sucesso' })
    } else {
      toast({ title: 'Erro ao deletar o produto', variant: 'destructive' })
    }
  }

  return (
    <Button onClick={handleDeleteProduct} variant="outline" size="icon">
      <TrashIcon />
      <span className="sr-only">Deletar produto</span>
    </Button>
  )
}
