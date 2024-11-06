import { createEstablishment } from '@/actions/create-establishment'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function CreateEstablishmentForm() {
  return (
    <form
      action={createEstablishment}
      className="grid w-full items-center gap-4"
    >
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" />
      </div>

      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="description">Descrição</Label>
        <Textarea id="description" name="description" className="min-h-40" />
      </div>

      <Button type="submit">Salvar Registro</Button>
    </form>
  )
}
