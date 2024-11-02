import { UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <h1>Dashboard</h1>

      <UserButton />
    </div>
  )
}
