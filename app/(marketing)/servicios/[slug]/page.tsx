import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ServicePage from '@/components/services/ServicePage'
import StructuredData from '@/components/seo/StructuredData'
import { getAllServices, getServiceBySlug } from '@/lib/sanity.queries'

export async function generateStaticParams() {
  const services = await getAllServices()
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (!service) return {}

  const title = service.meta?.title || service.title
  const description = service.meta?.description || service.description

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Unidos por GPS`,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Unidos por GPS`,
      description,
    },
  }
}

export default async function ServiceSlugPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `https://unidosporgps.pe/servicios/${service.slug}`,
          provider: {
            '@type': 'LocalBusiness',
            name: 'Unidos por GPS',
            url: 'https://unidosporgps.pe',
          },
        }}
      />
      <ServicePage data={service} />
    </>
  )
}
