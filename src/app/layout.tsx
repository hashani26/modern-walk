import { Roboto } from 'next/font/google'
import Header from '@/app/components/Header'
import type { Metadata } from 'next'
import './globals.css'

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Modern Walk',
    template: '%s | Modern Walk',
  },
  description: 'Fashion Retail Store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} antialiased`}>
        <Header />
        <main className="p-10">{children}</main>
      </body>
    </html>
  )
}
