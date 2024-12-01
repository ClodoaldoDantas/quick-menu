import type { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="h-screen w-full flex items-center justify-center px-4 py-8">
      {children}
    </div>
  )
}
