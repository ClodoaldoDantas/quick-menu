import { Loader } from 'lucide-react'
import { Button, type ButtonProps } from './ui/button'

type SubmitButtonProps = ButtonProps & {
  isLoading: boolean
}

export function SubmitButton({ isLoading, ...props }: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={props.disabled || isLoading} {...props}>
      {isLoading ? <Loader className="size-5 animate-spin" /> : props.children}
    </Button>
  )
}
