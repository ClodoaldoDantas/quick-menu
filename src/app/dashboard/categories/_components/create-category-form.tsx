'use client'

import { SubmitButton } from '@/components/submit-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SelectIcon } from './select-icon'
import { useActionState, useState } from 'react'
import { createCategory } from '@/actions/create-category'
import { ErrorMessage } from '@/components/error-message'
import { AlertBox } from '@/components/alert-box'

export function CreateCategoryForm({
  establishmentId,
}: {
  establishmentId: string
}) {
  const [selectedIcon, setSelectedIcon] = useState<string>('utensils')
  const createCategoryWithParams = createCategory.bind(
    null,
    selectedIcon,
    establishmentId
  )

  const [state, formAction, isPending] = useActionState(
    createCategoryWithParams,
    { success: false, message: null, errors: null }
  )

  return (
    <form action={formAction} className="grid w-full items-center gap-4">
      {!state.success && state.message && (
        <AlertBox title="Atenção" variant="destructive">
          {state.message}
        </AlertBox>
      )}

      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" />
        <ErrorMessage error={state.errors?.name} />
      </div>

      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Ícone</Label>
        <SelectIcon value={selectedIcon} onChange={setSelectedIcon} />
      </div>

      <SubmitButton isLoading={isPending}>Salvar Registro</SubmitButton>
    </form>
  )
}
