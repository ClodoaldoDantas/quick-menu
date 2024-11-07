import { cn } from '@/lib/utils'
import { icons } from '@/utils/icons'

type SelectIconProps = {
  value: string
  onChange: (value: string) => void
}

export function SelectIcon({ value, onChange }: SelectIconProps) {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {icons.map(({ id, icon: Icon }) => {
        const isActive = value === id

        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={cn(
              'size-10 flex items-center justify-center border rounded-sm',
              isActive && 'ring-2 ring-blue-600'
            )}
          >
            <Icon className="size-6" />
          </button>
        )
      })}
    </div>
  )
}
