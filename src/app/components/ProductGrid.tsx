import type { Product } from '@/app/types'
import { Skeleton } from '@/app/components/Skeleton'

interface ProductGridProps {
  products: Product[]
  loading?: boolean
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

export default function ProductGrid({
  products,
  loading = false,
}: ProductGridProps) {
  if (loading) {
    return (
      <section className="py-8">
        <ProductGridSkeleton />
      </section>
    )
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center py-10 text-center">
        <p className="text-lg">No products found. Please check back later.</p>
      </div>
    )
  }

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </section>
  )
}
