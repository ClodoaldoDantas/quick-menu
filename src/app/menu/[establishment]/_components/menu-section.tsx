import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { ReactNode } from 'react'

type MenuSectionProps = {
  icon: JSX.Element
  title: string
  children: ReactNode
}

export function MenuSection({ icon, title, children }: MenuSectionProps) {
  return (
    <Card className="mb-8 bg-white shadow-lg">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-2xl font-serif font-semibold text-zinc-700 flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  )
}
