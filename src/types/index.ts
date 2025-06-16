export type CategoryKey = 'men' | 'women'

export type CategoryData = {
  label: string
  path: string
}
export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
