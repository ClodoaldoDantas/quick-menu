'use client'

import { logout } from '@/actions/logout'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOutIcon, StoreIcon, UserCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

type AccountMenuProps = {
  establishmentName: string
}

export function AccountMenu({ establishmentName }: AccountMenuProps) {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <StoreIcon className="size-5" />
          <span className="hidden sm:block">{establishmentName}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={() => router.push('/dashboard/profile')}>
          <UserCircleIcon className="size-5" />
          <span>Editar conta</span>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <button onClick={() => logout()} className="w-full" type="button">
            <LogOutIcon className="size-5" />
            <span>Sair da conta</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
