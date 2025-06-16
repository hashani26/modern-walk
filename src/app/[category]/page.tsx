import SectionTitle from '../../components/SectionTitle'
import { categoryMap } from '@/lib'
import { findLabelByPath } from '@/utils'
import ProductGrid from '@/components/ProductGrid'

interface ProductCategoryProps {
  params: {
    category: string
  }
}

export default function ProductCategory({ params }: ProductCategoryProps) {
  const categoryPath = findLabelByPath(params.category, categoryMap)

  return (
    <div>
      <SectionTitle title={categoryPath} style="text-2xl" />
      <ProductGrid category={categoryPath.toLowerCase()} />
    </div>
  )
}
