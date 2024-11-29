'use client'

import { updateCategory } from '@/actions/update-category'
import { SelectIcon } from '@/components/select-icon'
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
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import type { ICategory } from '@/types/menu'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const editCategoryFormSchema = z.object({
  name: z.string().min(3, {
    message: 'O nome deve ter no mínimo 3 caracteres',
  }),
})

export type EditCategoryFormData = z.infer<typeof editCategoryFormSchema>

type EditCategoryFormProps = {
  category: Omit<ICategory, 'products'>
}

export function EditCategoryForm({ category }: EditCategoryFormProps) {
  const { toast } = useToast()
  const [selectedIcon, setSelectedIcon] = useState<string>(category.icon)

  const form = useForm<EditCategoryFormData>({
    resolver: zodResolver(editCategoryFormSchema),
    defaultValues: {
      name: category.name,
    },
  })

  async function handleEditCategory(data: EditCategoryFormData) {
    const response = await updateCategory({
      name: data.name,
      icon: selectedIcon,
      categoryId: category.id,
    })

    if (!response.success) {
      toast({ title: response.message, variant: 'destructive' })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleEditCategory)}
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

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Ícone</Label>
          <SelectIcon value={selectedIcon} onChange={setSelectedIcon} />
        </div>

        <SubmitButton isLoading={form.formState.isSubmitting}>
          Salvar Registro
        </SubmitButton>
      </form>
    </Form>
  )
}
