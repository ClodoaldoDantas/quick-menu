import type { ReactNode } from 'react'
import { Topbar } from './_components/topbar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Topbar />
      <div className="max-w-6xl mx-auto px-4 py-6">{children}</div>
    </main>
  )
}
