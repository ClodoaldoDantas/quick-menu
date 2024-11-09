import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { StoreIcon } from 'lucide-react'
import { getEstablishment } from '@/actions/get-establishment'

export async function Topbar() {
  const { establishment } = await getEstablishment()

  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex flex-wrap items-center justify-between">
        <Link href="/dashboard" className="text-xl font-serif font-semibold">
          Dashboard
        </Link>

        <div className="flex items-center gap-4">
          <Button size="sm" asChild variant="outline">
            <Link href="/dashboard/profile">
              <StoreIcon className="size-5" />
              {establishment?.name}
            </Link>
          </Button>

          <UserButton />
        </div>
      </div>
    </header>
  )
}
