import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function CreateEstablishment() {
  return (
    <div className="h-screen w-full flex items-center justify-center px-4">
      <Card className="max-w-[460px] w-full">
        <CardHeader>
          <CardTitle>Criar Estabelecimento</CardTitle>
          <CardDescription>
            Crie um novo estabelecimento para começar a gerenciar o seu
            cardápio.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Descrição</Label>
              <Textarea id="description" name="description" />
            </div>

            <Button type="submit">Salvar Registro</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
