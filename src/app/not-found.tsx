import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="max-w-[460px] w-full">
        <CardHeader className="flex items-start">
          <div className="mb-6">
            <Logo />
          </div>

          <CardTitle className="text-lg">Página não encontrada</CardTitle>
          <CardDescription>
            A página que você está procurando não existe.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button asChild>
            <Link href="/">Voltar para home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
