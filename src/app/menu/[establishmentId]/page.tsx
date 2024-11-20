import { getEstablishmentById } from '@/actions/get-establishment-by-id'
import { notFound } from 'next/navigation'
import { MenuItems } from './_components/menu-items'
import { MenuSection } from './_components/menu-section'

type MenuPageProps = {
  params: Promise<{ establishmentId: string }>
}

export default async function MenuPage({ params }: MenuPageProps) {
  const establishmentId = (await params).establishmentId
  const { establishment } = await getEstablishmentById(establishmentId)

  if (!establishment) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold mb-4">
            {establishment.name}
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {establishment.description}
          </p>
        </header>

        <main>
          <h2 className="font-serif text-center text-4xl mb-8">Nosso Menu</h2>

          {establishment.categories.map((category) => (
            <MenuSection
              key={category.name}
              title={category.name}
              icon={category.icon}
            >
              <MenuItems items={category.products} />
            </MenuSection>
          ))}
        </main>
      </div>
    </div>
  )
}
