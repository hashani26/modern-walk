import { CategoryKey } from '@/types'

interface CategorySectionProps {
  category: CategoryKey
  children: React.ReactNode
}

export default function CategorySection({
  category,
  children,
}: CategorySectionProps) {
  return (
    <section
      className={`flex size-full items-center justify-center overflow-hidden rounded-xl p-5 text-center text-base font-semibold text-white shadow-md md:p-6 md:text-3xl ${category === 'men' ? 'bg-teal-400 hover:bg-teal-500' : 'bg-pink-400 hover:bg-pink-500'}`}
    >
      {children}
    </section>
  )
}
