'use server'

export async function createCategory(
  icon: string,
  prevState: any,
  formData: FormData
) {
  const name = formData.get('name')?.toString() ?? ''

  // TODO: Implement category creation
  console.log({
    name,
    icon,
  })

  return { message: null }
}
