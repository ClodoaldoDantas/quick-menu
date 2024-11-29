import { getCategories } from '@/actions/get-categories'
import { getEstablishment } from '@/actions/get-establishment'
import { EmptyBlock } from '@/components/empty-block'
import { Button } from '@/components/ui/button'
import { BadgePlus } from 'lucide-react'
import Link from 'next/link'
import { SectionCard } from './_components/section-card'

export default async function DashboardPage() {
  const { establishment } = await getEstablishment()
  const { categories } = await getCategories(establishment!.id)

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-serif font-semibold">Cardápio</h2>

        <Button size="sm" asChild>
          <Link href="/dashboard/categories/create">
            <BadgePlus className="size-6" />
            Nova Categoria
          </Link>
        </Button>
      </div>

      {categories.length > 0 ? (
        <div className="space-y-4">
          {categories.map((category) => (
            <SectionCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <EmptyBlock message="Crie categorias para organizar os produtos do seu cardápio." />
      )}
    </>
  )
}
