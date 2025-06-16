'use client'

import type { Product } from '@/types'
import { Skeleton } from '@/components/Skeleton'
import dynamic from 'next/dynamic'
import { useQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '@/services/productService'

interface ProductGridProps {
  category: string
}

const ProductGridSkeleton = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="flex flex-col space-y-3">
        <Skeleton />
      </div>
    ))}
  </div>
)

const ProductCard = dynamic(() => import('./ProductCard'), {
  loading: () => <Skeleton />,
  ssr: false, // Optional: disable SSR for performance
})

export default function ProductGrid({ category }: ProductGridProps) {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ['products', 'category', category],
    queryFn: () => getProductsByCategory(),
  })

  if (isLoading) {
    return (
      <section className="py-8">
        <ProductGridSkeleton />
      </section>
    )
  }

  if (isError) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center py-10 text-center">
        <p className="text-lg text-red-600">
          Error loading products: {error?.message}
        </p>
      </div>
    )
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center py-10 text-center">
        <p className="text-lg">No products found. Please check back later.</p>
      </div>
    )
  }

  const filteredProducts = products.filter(
    (product) => product.category === category
  )

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
