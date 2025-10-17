import Hero from '@/components/SectionHero'
import SectionProduct from '@/components/SectionProduct'
import { IMAGES_URL, PRODUCTS_URL } from '@/constants'
import { MergedProducts, Product, ProductImage } from '@/types'

const joinProductsWithImages = (
  products: Product[],
  productImages: ProductImage[]
): MergedProducts[] => {
  return products
    .map((product) => {
      const matchingImage = productImages.find((image) => image.id.includes(product.id))
      if (!matchingImage) return null
      return {
        ...product,
        imageUrl: matchingImage.image,
      }
    })
    .filter((product) => product !== null)
}

const getData = async (): Promise<{ items: MergedProducts[]; error?: string }> => {
  try {
    const [prodRes, imageRes] = await Promise.all([
      fetch(PRODUCTS_URL, { next: { revalidate: 60 } }),
      fetch(IMAGES_URL, { next: { revalidate: 60 } }),
    ])

    if (!prodRes.ok || !imageRes.ok) throw new Error('Network error')

    const products = (await prodRes.json())?.data as Product[]
    const images = (await imageRes.json())?.data as ProductImage[]

    const merged = joinProductsWithImages(products, images)

    return { items: merged }
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : 'Unknown error'
    return { items: [], error: errorMessage }
  }
}

const Home = async () => {
  const { items, error } = await getData()

  return (
    <div>
      <Hero />
      <SectionProduct products={items} error={error} />
    </div>
  )
}

export default Home
