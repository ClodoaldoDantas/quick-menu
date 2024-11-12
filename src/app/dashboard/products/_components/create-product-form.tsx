'use client'

import { createProduct } from '@/actions/create-product'
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
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createProductFormSchema = z.object({
  name: z.string().min(3, {
    message: 'O nome deve ter no mínimo 3 caracteres',
  }),
  description: z.string(),
  price: z.coerce
    .number({ message: 'O preço deve ser um número' })
    .min(1, { message: 'O preço deve ser maior que 0' }),
})

export type CreateProductFormData = z.infer<typeof createProductFormSchema>

export function CreateProductForm() {
  const searchParams = useSearchParams()
  const { toast } = useToast()

  const categoryId = searchParams.get('category')

  const form = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductFormSchema),
    defaultValues: {
      name: '',
      price: 0,
      description: '',
    },
  })

  async function handleCreateProduct(data: CreateProductFormData) {
    if (!categoryId) {
      return
    }

    const priceInCents = Math.round(data.price * 100)

    const response = await createProduct({
      name: data.name,
      description: data.description,
      price: priceInCents,
      categoryId,
    })

    if (!response.success) {
      toast({ title: response.message, variant: 'destructive' })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateProduct)}
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
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço</FormLabel>
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
                <Textarea {...field} className="min-h-28" />
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
