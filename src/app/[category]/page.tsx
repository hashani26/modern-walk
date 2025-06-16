import SectionTitle from '../../components/SectionTitle'
import { categoryMap } from '@/lib'
import { findLabelByPath } from '@/utils'
import ProductGrid from '@/components/ProductGrid'

interface ProductCategoryPageProps {
  params: Promise<{ category: string }>
}

export default async function ProductCategory({
  params,
}: ProductCategoryPageProps) {
  const { category } = await params
  const categoryPath = findLabelByPath(category, categoryMap)

  return (
    <div>
      <SectionTitle title={categoryPath} style="text-2xl" />
      <ProductGrid category={categoryPath.toLowerCase()} />
    </div>
  )
}
