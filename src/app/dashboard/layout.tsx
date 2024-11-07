import { ReactNode } from 'react'
import { Topbar } from './_components/topbar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Topbar />
      <div className="container mx-auto px-4 py-6">{children}</div>
    </main>
  )
}
