import { AlertCircleIcon } from 'lucide-react'
import Link from 'next/link'

export function StoreInfoBlock() {
  return (
    <div className="p-4 border-2 border-dashed border-gray-300 flex items-start gap-2">
      <AlertCircleIcon className="size-6 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">
        Você já possui um estabelecimento cadastrado. Acesse o dashboard{' '}
        <Link className="text-blue-500 underline" href="/dashboard">
          agora
        </Link>
      </p>
    </div>
  )
}
