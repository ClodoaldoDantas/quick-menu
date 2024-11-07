'use client'

import { SubmitButton } from '@/components/submit-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CreateCategoryForm() {
  return (
    <form className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" required />
      </div>

      <SubmitButton isLoading={false}>Salvar Registro</SubmitButton>
    </form>
  )
}
