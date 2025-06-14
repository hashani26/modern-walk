import type { Metadata } from 'next'
import CategorySection from '@/app/components/CategorySection'
import { Categories } from '@/app/types'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <main className="p-10">
      <section>
        <h2 className="text-2xl font-semibold">Categories</h2>
        <div className="grid h-[40vh] cursor-pointer grid-cols-1 gap-4 py-10 md:grid-cols-2">
          {Object.values(Categories).map((category) => (
            <CategorySection key={category} category={category}>
              <Link
                href={`${category === Categories.men ? '/mens-clothing' : '/womens-clothing'}`}
              >
                {category === Categories.men && "Men's Clothing"}
                {category === Categories.women && "Women's Clothing"}
              </Link>
            </CategorySection>
          ))}
        </div>
      </section>
    </main>
  )
}
