import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-15">
      <Link href="/">
        <h1 className="text-3xl font-bold hover:text-primary transition-colors duration-300">
          Modern Walk
        </h1>
      </Link>
    </header>
  )
}
