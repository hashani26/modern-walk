interface ProductGridSkeletonProps {
  count?: number
  children: React.ReactNode
}
export default function SkeletonGrid({
  count = 8,
  children,
}: ProductGridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          {children}
        </div>
      ))}
    </div>
  )
}
