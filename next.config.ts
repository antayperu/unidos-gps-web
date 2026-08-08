import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV === 'development'

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://cdn.sanity.io",
      "font-src 'self' https://cdn.sanity.io",
      `connect-src 'self' https://va.vercel-scripts.com https://api.sanity.io https://cdn.sanity.io wss://*.sanity.io${isDev ? ' ws: wss:' : ''}`,
      "frame-ancestors 'none'",
      "object-src 'none'",
      "base-uri 'self'",
    ].join('; '),
  },
]

// El panel de Sanity Studio es una herramienta interna — usa CSP más permisiva
const studioHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
]

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/studio/:path*',
        headers: studioHeaders,
      },
      {
        source: '/((?!studio).*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
