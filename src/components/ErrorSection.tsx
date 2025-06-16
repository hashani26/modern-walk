export default function ErrorSection({ error }: { error: Error | null }) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center py-10 text-center">
      <p className="text-lg text-red-600">
        Error loading products: {error?.message}
      </p>
    </div>
  )
}
