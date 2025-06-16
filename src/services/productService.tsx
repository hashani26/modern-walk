import { Product } from '@/types'
const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getProductsByCategory(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL + '/products')
    if (!response.ok) {
      const errorText = `Failed to fetch products: ${response.status} ${response.statusText}`
      throw new Error(errorText)
    }
    const products = (await response.json()) as Product[]

    return products
  } catch (error) {
    throw error
  }
}
