import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { PenSquareIcon } from 'lucide-react'

export async function Topbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex flex-wrap items-center justify-between">
        <Link href="/dashboard" className="text-xl font-serif font-semibold">
          Dashboard
        </Link>

        <div className="flex items-center gap-4">
          <Button size="sm" asChild variant="outline">
            <Link href="/dashboard/profile">
              <PenSquareIcon className="size-5" />
              Editar Loja
            </Link>
          </Button>

          <UserButton />
        </div>
      </div>
    </header>
  )
}
