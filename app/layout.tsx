import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://unidosporgps.pe'),
  title: {
    template: '%s | Unidos por GPS',
    default: 'Unidos por GPS — Protección Vehicular con GPS en Perú',
  },
  description:
    'Instala GPS en tu vehículo con instalación gratuita y oculta. Monitoreo 24/7, apagado remoto y app propia. Sin pago de equipo.',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    siteName: 'Unidos por GPS',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
