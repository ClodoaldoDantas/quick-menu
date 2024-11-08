import { getCategories } from '@/actions/get-categories'
import { EmptyBlock } from '@/components/empty-block'
import { Button } from '@/components/ui/button'
import { BadgePlus } from 'lucide-react'
import Link from 'next/link'

export default async function DashboardPage() {
  const { categories } = await getCategories()

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-serif font-semibold">Cardápio</h2>

        <Button size="sm" asChild>
          <Link href="/dashboard/categories">
            <BadgePlus className="size-6" />
            Nova Categoria
          </Link>
        </Button>
      </div>

      {categories.length > 0 ? (
        <ul>
          {categories.map(category => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      ) : (
        <EmptyBlock message="Crie categorias para organizar os produtos do seu cardápio." />
      )}
    </>
  )
}
