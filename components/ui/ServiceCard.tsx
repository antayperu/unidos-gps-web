import Image from 'next/image'
import Link from 'next/link'
import type { SanityService } from '@/lib/sanity.types'
import { urlFor } from '@/lib/sanity.image'

export default function ServiceCard({ service }: { service: SanityService }) {
  const imageUrl = service.mainImage
    ? urlFor(service.mainImage).width(800).height(450).url()
    : null

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-200">
      <div className="relative aspect-[16/9] bg-brand-primary-100">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        )}
      </div>
      <div className="p-6 lg:p-8">
        <h3 className="font-heading text-lg font-bold text-brand-primary-900 mb-2">
          {service.title}
        </h3>
        <p className="font-body text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-3">
          {service.shortDescription}
        </p>
        <Link
          href={`/servicios/${service.slug}`}
          className="font-body text-sm font-medium text-brand-primary-500 hover:text-brand-primary-700 transition-colors focus-visible:outline-none focus-visible:underline"
        >
          Ver más →
        </Link>
      </div>
    </article>
  )
}
