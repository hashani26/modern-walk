import type { CategoryKey, CategoryData } from '@/types'

export const categoryMap: Record<CategoryKey, CategoryData> = {
  men: {
    label: "Men's clothing",
    path: 'mens-clothing',
  },
  women: {
    label: "Women's clothing",
    path: 'womens-clothing',
  },
}
