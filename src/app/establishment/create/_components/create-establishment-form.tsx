'use client'

import { createEstablishment } from '@/actions/create-establishment'
import { SubmitButton } from '@/components/submit-button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle } from 'lucide-react'
import { useActionState } from 'react'

export function CreateEstablishmentForm() {
  const [state, formAction, isPending] = useActionState(createEstablishment, {
    message: null,
  })

  return (
    <form action={formAction} className="grid w-full items-center gap-4">
      {state.message && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Atenção</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" required />
      </div>

      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          id="description"
          name="description"
          className="min-h-40"
          required
        />
      </div>

      <SubmitButton isLoading={isPending}>Salvar Registro</SubmitButton>
    </form>
  )
}
