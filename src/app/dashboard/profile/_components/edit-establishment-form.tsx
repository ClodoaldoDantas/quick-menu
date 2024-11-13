'use client'

import { editEstablishment } from '@/actions/edit-establishment'
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
import type { IEstablishment } from '@/types/establishment'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const editEstablishmentFormSchema = z.object({
  name: z.string().min(3, {
    message: 'O nome deve ter no mínimo 3 caracteres',
  }),
  description: z.string(),
})

type EditEstablishmentFormData = z.infer<typeof editEstablishmentFormSchema>

type EditEstablishmentFormProps = {
  establishment?: IEstablishment
}

export function EditEstablishmentForm({
  establishment,
}: EditEstablishmentFormProps) {
  const { toast } = useToast()

  const form = useForm<EditEstablishmentFormData>({
    resolver: zodResolver(editEstablishmentFormSchema),
    defaultValues: {
      name: establishment?.name ?? '',
      description: establishment?.description ?? '',
    },
  })

  async function handleEditEstablishment(data: EditEstablishmentFormData) {
    const response = await editEstablishment({
      id: establishment?.id ?? '',
      name: data.name,
      description: data.description,
    })

    if (!response.success) {
      toast({ title: response.message, variant: 'destructive' })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleEditEstablishment)}
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
