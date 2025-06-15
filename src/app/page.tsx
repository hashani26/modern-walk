import type { Metadata } from 'next'
import CategorySection from '@/app/components/CategorySection'
import { CategoryKey } from '@/app/types'
import Link from 'next/link'
import SectionTitle from '@/app/components/SectionTitle'
import { categoryMap } from '@/app/lib'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <section>
      <SectionTitle title="Categories" />
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
