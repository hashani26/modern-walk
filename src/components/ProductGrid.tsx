'use client'

import { Skeleton } from '@/components/Skeleton'
import dynamic from 'next/dynamic'
import SkeletonGrid from './SkeletonGrid'
import ErrorSection from './ErrorSection'
import NotFound from './Message'
import { useFilteredProducts } from '@/hooks/useFilteredProducts'

interface ProductGridProps {
  category: string
}

const ProductCard = dynamic(() => import('./ProductCard'))

export default function ProductGrid({ category }: ProductGridProps) {
  const { filteredProducts, isLoading, isError, error } = useFilteredProducts({
    filter: category,
  })

  if (isLoading) {
    return (
      <section className="py-8">
        <SkeletonGrid count={8}>
          <Skeleton />
        </SkeletonGrid>
      </section>
    )
  }

  if (isError) {
    return <ErrorSection error={error} />
  }

  if (!filteredProducts || filteredProducts.length === 0) {
    return <NotFound />
  }

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
