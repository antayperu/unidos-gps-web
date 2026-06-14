import { Metadata } from 'next'
import ServicePage from '@/components/services/ServicePage'
import { servicePages } from '@/content/servicePages'
import StructuredData from '@/components/seo/StructuredData'

const data = servicePages.find((s) => s.slug === 'dashcam-ia')!

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  openGraph: {
    title: `${data.meta.title} | Unidos por GPS`,
    description: data.meta.description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${data.meta.title} | Unidos por GPS`,
    description: data.meta.description,
  },
}

export default function DashcamIaPage() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.title,
          description: data.description,
          url: `https://unidosporgps.pe/servicios/${data.slug}`,
          provider: {
            '@type': 'LocalBusiness',
            name: 'Unidos por GPS',
            url: 'https://unidosporgps.pe',
          },
        }}
      />
      <ServicePage data={data} />
    </>
  )
}
