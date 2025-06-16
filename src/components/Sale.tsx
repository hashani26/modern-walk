'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import SkeletonGrid from './SkeletonGrid'
import { Skeleton } from './Skeleton'
import ErrorSection from './ErrorSection'
import NotFound from './Message'
import { useFilteredProducts } from '@/hooks/useFilteredProducts'

const ProductCard = dynamic(() => import('./ProductCard'))

export default function Sale() {
  const { filteredProducts, isLoading, isError, error } = useFilteredProducts({
    filter: 'sale',
  })

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      })
    }
  }
  if (isLoading) {
    return (
      <SkeletonGrid count={4}>
        <Skeleton />
      </SkeletonGrid>
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
      <button
        className="absolute top-1/5 left-0 z-10 -translate-y-1/2 cursor-pointer rounded-xl bg-gray-200 p-5 shadow transition hover:bg-gray-300 lg:top-1/3"
        onClick={() => scroll(-100)}
      >
        ←
      </button>

      <div
        ref={scrollContainerRef}
        className="hide-scrollbar flex w-[95vw] snap-x snap-mandatory space-x-4 overflow-x-auto scroll-smooth"
      >
        {filteredProducts?.map((product) => (
          <div
            key={product.id}
            className="flex w-90 shrink-0 snap-start items-center justify-center rounded-lg bg-gray-200 text-xl text-black"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/5 right-0 z-10 -translate-y-1/2 cursor-pointer rounded-xl bg-gray-200 p-5 shadow transition hover:bg-gray-300 lg:top-1/3"
        onClick={() => scroll(100)}
      >
        →
      </button>
    </section>
  )
}
