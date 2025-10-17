export type Product = {
  id: string
  name: string
}

export type ProductImage = {
  id: string[]
  image: string
}

export type MergedProducts = Product & { imageUrl?: string }
