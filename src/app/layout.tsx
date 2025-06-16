import { Roboto } from 'next/font/google'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import './globals.css'
import QueryProvider from '../providers/QueryProvider'

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
        <QueryProvider>
          <Header />
          <main className="p-10">{children}</main>
        </QueryProvider>
      </body>
    </html>
  )
}
