'use client'

import { createEstablishment } from '@/actions/create-establishment'
import { ErrorMessage } from '@/components/error-message'
import { SubmitButton } from '@/components/submit-button'
import { AlertBox } from '@/components/alert-box'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useActionState } from 'react'

export function CreateEstablishmentForm() {
  const [state, formAction, isPending] = useActionState(createEstablishment, {
    message: null,
    success: false,
    errors: null,
  })

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
        <Label htmlFor="description">Descrição</Label>
        <Textarea id="description" name="description" className="min-h-40" />
      </div>

      <SubmitButton isLoading={isPending}>Salvar Registro</SubmitButton>
    </form>
  )
}
