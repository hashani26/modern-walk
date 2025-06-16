import Image from 'next/image'
import type { Product } from '@/types'
import SectionTitle from './SectionTitle'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { title, image, price, description, category } = product

  return (
    <article className="h-full w-full max-w-xs overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl sm:max-w-sm">
      <div className="p-4 text-center">
        <SectionTitle title={title} style="mb-2 text-sm" />
        <div className="relative mx-auto mb-2 h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 200px"
            priority
          />
        </div>
      </div>
      <div
        className={`h-full rounded-xl px-8 py-3 text-center ${category === "men's clothing" ? 'bg-teal-400' : 'bg-pink-400'}`}
      >
        <p className="text-xl font-bold text-blue-700">Rs {price.toFixed(2)}</p>
        <p className="text-md leading-snug text-black">
          {description.length > 100
            ? description.slice(0, 97) + '...'
            : description}
        </p>
      </div>
    </article>
  )
}
