import SectionTitle from '../../components/SectionTitle'
import { categoryMap } from '@/lib'
import { findLabelByPath } from '@/utils'
import ProductGrid from '@/components/ProductGrid'

export default function ProductCategory({
  params,
}: {
  params: { category: string }
}) {
  const categoryPath = findLabelByPath(params.category, categoryMap)

  return (
    <div>
      <SectionTitle title={categoryPath} style="text-2xl" />
      <ProductGrid category={categoryPath.toLowerCase()} />
    </div>
  )
}
