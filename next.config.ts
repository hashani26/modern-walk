import type { NextConfig } from 'next'
console.log('process', process.env.NODE_ENV)

if (!process.env.NEXT_PUBLIC_API_URL && process.env.NODE_ENV !== 'production') {
  throw new Error('NEXT_PUBLIC_API_URL is not defined!')
}
console.log(`NEXT_PUBLIC_API_URL is set to: ${process.env.NEXT_PUBLIC_API_URL}`)

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || 'https://fakestoreapi.com',
  },
}

export default nextConfig
