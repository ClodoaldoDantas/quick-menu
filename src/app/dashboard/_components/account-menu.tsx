'use client'

import { logout } from '@/actions/logout'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOutIcon, MailIcon, StoreIcon, UserCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

type AccountMenuProps = {
  profile: {
    email: string
    name: string
  }
}

export function AccountMenu({ profile }: AccountMenuProps) {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <StoreIcon className="size-5" />
          <span className="hidden sm:block">{profile.name}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex items-center gap-2">
          <MailIcon className="size-5" />
          {profile.email}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

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
