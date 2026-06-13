import { Metadata } from 'next'
import ServicePage from '@/components/services/ServicePage'
import { servicePages } from '@/content/servicePages'

const data = servicePages.find((s) => s.slug === 'gps-flotas')!

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  openGraph: {
    title: data.meta.title,
    description: data.meta.description,
    type: 'website',
  },
}

export default function GpsFlotasPage() {
  return <ServicePage data={data} />
}
