import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { PenSquareIcon } from 'lucide-react'

export function Topbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex flex-wrap items-center justify-between">
        <h1 className="text-xl font-serif font-semibold">Cantinho do Sabor</h1>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button size="sm" variant="outline">
            <PenSquareIcon className="size-6" />
            <span className="hidden sm:block">Editar Informações</span>
          </Button>

          <UserButton />
        </div>
      </div>
    </header>
  )
}
