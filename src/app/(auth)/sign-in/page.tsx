import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LoginForm } from './_components/login-form'

export default function SignInPage() {
  return (
    <Card className="max-w-[460px] w-full">
      <CardHeader>
        <CardTitle>Entre na sua conta</CardTitle>
        <CardDescription>Faça login para continuar</CardDescription>
      </CardHeader>

      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  )
}
