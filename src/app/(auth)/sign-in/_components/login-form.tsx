'use client'

import { login } from '@/actions/login'
import { SubmitButton } from '@/components/submit-button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Digite um email válido',
  }),
  password: z.string().min(6, {
    message: 'A senha deve ter no mínimo 6 caracteres',
  }),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const { toast } = useToast()

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleCreateEstablishment(data: LoginFormData) {
    const response = await login(data)

    if (!response.success) {
      toast({ title: response.message, variant: 'destructive' })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateEstablishment)}
        className="grid w-full items-center gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton isLoading={form.formState.isSubmitting}>
          Entrar
        </SubmitButton>
      </form>
    </Form>
  )
}
