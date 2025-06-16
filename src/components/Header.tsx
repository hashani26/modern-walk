import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-15 items-center justify-center bg-white px-4 shadow-md sm:px-6 lg:px-8">
      <Link href="/">
        <h1 className="hover:text-primary text-3xl font-bold transition-colors duration-300">
          Modern Walk
        </h1>
      </Link>
    </header>
  )
}
