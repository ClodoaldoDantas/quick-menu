import { Loader2Icon } from 'lucide-react'

export function LoadingForm() {
  return (
    <div className="flex items-center gap-2">
      <Loader2Icon className="size-6 text-blue-600 animate-spin" />
      <span>Carregando dados...</span>
    </div>
  )
}
