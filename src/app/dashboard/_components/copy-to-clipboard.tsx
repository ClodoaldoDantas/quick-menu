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

  return (
    <button
      type="button"
      onClick={handleCopyToClipboard}
      className="h-10 border w-full flex items-center pl-4 rounded hover:bg-accent hover:text-accent-foreground"
    >
      <span className="flex-1 text-left text-sm text-zinc-600">{value}</span>

      <div className="border-l size-10 flex items-center justify-center">
        {hasCopied ? (
          <CheckIcon className="size-5 text-green-600" />
        ) : (
          <CopyIcon className="size-5" />
        )}
      </div>
    </button>
  )
}
