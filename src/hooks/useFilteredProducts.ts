import { useQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '@/services/productService'
import type { Product } from '@/types'

interface UseFilteredProductsProps {
  filter: string
}

export const useFilteredProducts = ({ filter }: UseFilteredProductsProps) => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ['products', filter],
    queryFn: () => getProductsByCategory(),
  })

  let filteredProducts

  if (filter === 'sale') {
    const { mens, womens } = products.reduce(
      (acc, item) => {
        if (item.category === "men's clothing") acc.mens.push(item)
        else if (item.category === "women's clothing") acc.womens.push(item)
        return acc
      },
      { mens: [] as Product[], womens: [] as Product[] }
    )

    const result: Product[] = []
    const maxLength = Math.max(mens.length, womens.length)

    for (let i = 0; i < maxLength; i++) {
      if (i < mens.length) result.push(mens[i])
      if (i < womens.length) result.push(womens[i])
    }

    filteredProducts = result
  } else {
    filteredProducts = products.filter((product) => product.category === filter)
  }

  return { filteredProducts, isLoading, isError, error }
}
