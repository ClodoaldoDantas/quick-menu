import { cn } from '@/lib/utils'
import { NumericFormat } from 'react-number-format'

interface CurrencyInputProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export function CurrencyInput({
  value,
  onChange,
  className,
}: CurrencyInputProps) {
  return (
    <NumericFormat
      value={value}
      onChange={(event) => onChange(event.target.value)}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
    />
  )
}
