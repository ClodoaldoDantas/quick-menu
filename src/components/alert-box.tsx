import { AlertCircle } from 'lucide-react'
import type { ReactNode } from 'react'
import { AlertDescription, Alert as AlertRoot, AlertTitle } from './ui/alert'

type AlertBoxProps = {
  title: string
  children: ReactNode
  variant?: 'destructive' | 'default' | null
}

export function AlertBox({ variant, title, children }: AlertBoxProps) {
  return (
    <AlertRoot variant={variant}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </AlertRoot>
  )
}
