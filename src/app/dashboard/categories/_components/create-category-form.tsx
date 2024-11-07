'use client'

import { SubmitButton } from '@/components/submit-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SelectIcon } from './select-icon'
import { useActionState, useState } from 'react'
import { createCategory } from '@/actions/create-category'

export function CreateCategoryForm() {
  const [selectedIcon, setSelectedIcon] = useState<string>('utensils')
  const createCategoryWithIcon = createCategory.bind(null, selectedIcon)

  const [state, formAction, isPending] = useActionState(
    createCategoryWithIcon,
    { message: null }
  )

  return (
    <form action={formAction} className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" required />
      </div>

      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Ícone</Label>
        <SelectIcon value={selectedIcon} onChange={setSelectedIcon} />
      </div>

      <SubmitButton isLoading={isPending}>Salvar Registro</SubmitButton>
    </form>
  )
}
