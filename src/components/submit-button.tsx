import { Button, ButtonProps } from './ui/button'
import { Loader2 } from 'lucide-react'

type SubmitButtonProps = ButtonProps & {
  isLoading: boolean
}

export function SubmitButton({ isLoading, ...props }: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={props.disabled || isLoading} {...props}>
      {isLoading ? <Loader2 className="size-5 animate-spin" /> : props.children}
    </Button>
  )
}
