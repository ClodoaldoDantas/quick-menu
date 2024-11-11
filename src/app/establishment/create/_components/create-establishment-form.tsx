'use client'

import { createEstablishment } from '@/actions/create-establishment'
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
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createEstablishmentFormSchema = z.object({
  name: z.string().min(3, {
    message: 'O nome deve ter no mínimo 3 caracteres',
  }),
  description: z.string(),
})

export type CreateEstablishmentFormData = z.infer<
  typeof createEstablishmentFormSchema
>

export function CreateEstablishmentForm() {
  const { toast } = useToast()

  const form = useForm<CreateEstablishmentFormData>({
    resolver: zodResolver(createEstablishmentFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  async function handleCreateEstablishment(data: CreateEstablishmentFormData) {
    const response = await createEstablishment(data)

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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea {...field} className="min-h-40" />
              </FormControl>
            </FormItem>
          )}
        />

        <SubmitButton isLoading={form.formState.isSubmitting}>
          Salvar Registro
        </SubmitButton>
      </form>
    </Form>
  )
}
