export function findLabelByPath(
  path: string,
  categoryMap: Record<string, { label: string; path: string }>
): string {
  return (
    Object.values(categoryMap).find((category) => category.path === path)
      ?.label || ''
  )
}
