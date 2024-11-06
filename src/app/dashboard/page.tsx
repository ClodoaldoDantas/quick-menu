import { getEstablishment } from '@/actions/get-establishment'
import { Topbar } from './_components/topbar'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const { establishment } = await getEstablishment()

  if (!establishment) {
    redirect('/establishment/create')
  }

  return (
    <>
      <Topbar establishment={establishment} />
    </>
  )
}
