import { getEstablishment } from '@/actions/get-establishment'
import Link from 'next/link'
import { AccountMenu } from './account-menu'
import { ShareDialog } from './share-dialog'

export async function Topbar() {
  const { establishment } = await getEstablishment()

  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex flex-wrap items-center justify-between">
        <Link href="/dashboard" className="text-xl font-serif font-semibold">
          Dashboard
        </Link>

        {establishment && (
          <div className="flex items-center gap-2">
            <ShareDialog establishmentId={establishment.id} />
            <AccountMenu establishmentName={establishment.name} />
          </div>
        )}
      </div>
    </header>
  )
}
