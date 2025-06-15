import SectionTitle from '../components/SectionTitle'
import { categoryMap } from '@/app/lib'
import { findLabelByPath } from '@/app/utils'
import ProductGrid from '@/app/components/ProductGrid'

export default function ProductCategory({
  params,
}: {
  params: { category: string }
}) {
  const categoryPath = findLabelByPath(params.category, categoryMap)

  return (
    <div>
      <SectionTitle title={categoryPath} />
      <ProductGrid products={[]} />
    </div>
  )
}
