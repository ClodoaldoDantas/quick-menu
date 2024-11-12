export type IProduct = {
  id: string
  name: string
  description: string | null
  price: number
}

export type ICategory = {
  id: string
  name: string
  icon: string
  products: IProduct[]
}
