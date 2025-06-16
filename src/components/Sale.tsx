'use client'

import { useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProductsByCategory } from '@/services/productService'
import { Product } from '@/types'
import ProductCard from './ProductCard'

export default function Sale() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ['products', 'category'],
    queryFn: () => getProductsByCategory(),
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
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  function getSaleItems(products: Product[]): Product[] {
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

    return result
  }

  const saleItems = getSaleItems(products)

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
        {saleItems?.map((product) => (
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
