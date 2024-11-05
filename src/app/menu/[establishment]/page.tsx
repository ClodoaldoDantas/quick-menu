import { IceCreamBowl, Salad, Utensils } from 'lucide-react'
import { MenuSection } from './_components/menu-section'
import { MenuItems } from './_components/menu-items'

const menu = [
  {
    title: 'Entradas',
    items: [
      {
        name: 'Bruschetta',
        description: 'Pão torrado com tomate, alho e manjericão',
        price: 8.99,
      },
      {
        name: 'Calamari',
        description: 'Lulas empanadas e fritas, servidas com molho marinara',
        price: 10.99,
      },
      {
        name: 'Dip de Espinafre e Alcachofra',
        description:
          'Creme de espinafre e alcachofra, servido com chips de tortilha',
        price: 9.99,
      },
    ],
    icon: <Utensils className="size-6" />,
  },
  {
    title: 'Pratos Principais',
    items: [
      {
        name: 'Lasanha à Bolonhesa',
        description: 'Camadas de massa com molho bolonhesa e queijo gratinado',
        price: 18.99,
      },
      {
        name: 'Frango à Parmegiana',
        description:
          'Filé de frango empanado com molho de tomate e queijo, acompanhado de arroz e batatas',
        price: 16.99,
      },
      {
        name: 'Risoto de Cogumelos',
        description: 'Risoto cremoso com cogumelos frescos e parmesão',
        price: 17.99,
      },
    ],
    icon: <Salad className="size-6" />,
  },
  {
    title: 'Sobremesas',
    items: [
      {
        name: 'Tiramisu',
        description: 'Camadas de biscoito e creme de mascarpone com café',
        price: 7.99,
      },
      {
        name: 'Pudim de Leite',
        description: 'Sobremesa cremosa de leite condensado e caramelo',
        price: 6.99,
      },
      {
        name: 'Mousse de Chocolate',
        description: 'Mousse leve e aerado de chocolate',
        price: 5.99,
      },
    ],
    icon: <IceCreamBowl className="size-6" />,
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Cantinho do Sabor
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            O Cantinho do Sabor é um restaurante acolhedor que serve pratos
            caseiros com ingredientes frescos e um toque especial. Ideal para
            quem busca sabor e qualidade em um ambiente familiar.
          </p>
        </header>

        <main>
          <h2 className="font-serif text-center text-4xl mb-8">Nosso Menu</h2>

          {menu.map(section => (
            <MenuSection
              key={section.title}
              title={section.title}
              icon={section.icon}
            >
              <MenuItems items={section.items} />
            </MenuSection>
          ))}
        </main>
      </div>
    </div>
  )
}
