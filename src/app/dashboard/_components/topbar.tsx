import Link from 'next/link'

export async function Topbar() {
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex flex-wrap items-center justify-between">
        <Link href="/dashboard" className="text-xl font-serif font-semibold">
          Dashboard
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {/* {establishment && (
              <ShareDialog establishmentId={establishment.id} />
            )}

            <Button size="sm" asChild variant="outline">
              <Link href="/dashboard/profile">
                <StoreIcon className="size-5" />
                {establishment?.name}
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  )
}
