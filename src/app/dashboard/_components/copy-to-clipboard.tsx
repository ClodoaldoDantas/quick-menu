import { Button } from '@/components/ui/button'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function CopyToClipboard({ value }: { value: string }) {
  const [hasCopied, setHasCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (hasCopied) {
      timeoutRef.current = setTimeout(() => setHasCopied(false), 1000)
    }

    return () => {
      if (!timeoutRef) return
      clearTimeout(timeoutRef.current)
    }
  }, [hasCopied])

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value)
    setHasCopied(true)
  }

  return hasCopied ? (
    <Button className="w-full" disabled variant="outline">
      <CheckIcon className="size-6 text-green-600" />
      <span>Copiado</span>
    </Button>
  ) : (
    <Button
      className="w-full"
      onClick={handleCopyToClipboard}
      variant="outline"
    >
      <CopyIcon className="size-6" />
      Copiar link
    </Button>
  )
}
