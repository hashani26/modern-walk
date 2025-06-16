import type { Metadata } from 'next'
import CategorySection from '@/components/CategorySection'
import { CategoryKey } from '@/types'
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'
import { categoryMap } from '@/lib'
import Sale from '@/components/Sale'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <section>
      <SectionTitle title="Flash Sale" style="text-2xl" />

      <div className="grid grid-rows-1 gap-4">
        <Sale />
      </div>
      <SectionTitle title="Categories" style="text-2xl" />

      <div className="grid h-[40vh] cursor-pointer grid-cols-1 gap-4 py-10 md:grid-cols-2">
        {Object.entries(categoryMap).map(([key, { label, path }]) => (
          <CategorySection key={key} category={key as CategoryKey}>
            <Link href={`/${path}`}>{label}</Link>
          </CategorySection>
        ))}
      </div>
    </section>
  )
}
