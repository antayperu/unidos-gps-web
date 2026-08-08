import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import StructuredData from '@/components/seo/StructuredData'
import StatsBand from '@/components/home/StatsBand'
import PainPoint from '@/components/home/PainPoint'
import ServicesPreview from '@/components/home/ServicesPreview'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import HomeCTA from '@/components/home/HomeCTA'
import { getAllServices } from '@/lib/sanity.queries'

export const metadata: Metadata = {
  title: { absolute: 'Unidos por GPS — Protección Vehicular con GPS en Perú' },
  description:
    'Instala GPS en tu vehículo con instalación gratuita y oculta. Monitoreo 24/7, apagado remoto y app propia. Sin pago de equipo.',
  openGraph: {
    title: 'Unidos por GPS — Protección Vehicular con GPS en Perú',
    description:
      'Instala GPS en tu vehículo con instalación gratuita y oculta. Monitoreo 24/7, apagado remoto y app propia. Sin pago de equipo.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unidos por GPS — Protección Vehicular con GPS en Perú',
    description:
      'Instala GPS en tu vehículo con instalación gratuita y oculta. Monitoreo 24/7, apagado remoto y app propia. Sin pago de equipo.',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Unidos por GPS',
  description:
    'Empresa peruana de seguridad vehicular GPS con más de 13 años en el mercado. Instalación oculta gratuita, app propia iOS/Android, sin pago de equipo.',
  url: 'https://unidosporgps.pe',
  telephone: '+51933452214',
  email: 'comercial@unidosporgps.pe',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lima',
    addressCountry: 'PE',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Peru',
  },
  priceRange: '$$',
}

export default async function HomePage() {
  const services = await getAllServices()

  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <Hero />
      <StatsBand />
      <PainPoint />
      <ServicesPreview services={services} />
      <HowItWorks />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
