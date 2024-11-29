'use client'

import { updateProduct } from '@/actions/update-product'
import { CurrencyInput } from '@/components/currency-input'
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
import type { IProduct } from '@/types/menu'
import { parseToCents } from '@/utils/parse-to-cents'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const editProductFormSchema = z.object({
  name: z.string().min(3, {
    message: 'O nome deve ter no mínimo 3 caracteres',
  }),
  description: z.string(),
  price: z.string().min(1, { message: 'O preço é obrigatório' }),
})

export type EditProductFormData = z.infer<typeof editProductFormSchema>

type EditProductFormProps = {
  product: IProduct
}

export function EditProductForm({ product }: EditProductFormProps) {
  const { toast } = useToast()

  const form = useForm<EditProductFormData>({
    resolver: zodResolver(editProductFormSchema),
    defaultValues: {
      name: product.name,
      price: (product.price / 100).toString(),
      description: product.description ?? '',
    },
  })

  async function handleEditProduct(data: EditProductFormData) {
    const priceInCents = parseToCents(data.price)

    const response = await updateProduct({
      name: data.name,
      description: data.description,
      price: priceInCents,
      productId: product.id,
    })

    if (!response.success) {
      toast({ title: response.message, variant: 'destructive' })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleEditProduct)}
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
                <CurrencyInput value={field.value} onChange={field.onChange} />
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
