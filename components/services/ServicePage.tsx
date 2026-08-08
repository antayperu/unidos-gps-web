import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { contact } from '@/content/site'
import type { SanityService } from '@/lib/sanity.types'
import { urlFor } from '@/lib/sanity.image'

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

type Props = { data: SanityService }

export default function ServicePage({ data }: Props) {
  const waHref = `${contact.whatsappHref}?text=${data.waMessage}`
  const imageUrl = data.mainImage
    ? urlFor(data.mainImage).width(1120).height(840).url()
    : null

  return (
    <article>

      {/* ── Hero ── */}
      <section
        aria-label={data.title}
        className="bg-gradient-to-br from-brand-primary-900 to-brand-primary-700 py-16 px-5 lg:py-24 lg:px-10 text-white"
      >
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div>
            <h1 className="font-heading font-extrabold text-white text-[2rem] leading-tight lg:text-[3rem] lg:leading-[1.15] mb-4 lg:mb-5">
              {data.title}
            </h1>
            <p className="font-body text-white/85 text-base lg:text-lg leading-relaxed mb-4">
              {data.tagline}
            </p>
            <p className="font-body text-white/65 text-sm lg:text-base leading-relaxed mb-8 lg:mb-10 max-w-lg">
              {data.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="inverse" href="/cotizar">
                Cotizar ahora
              </Button>
              <Button variant="ghost" href={waHref}>
                <WhatsAppIcon />
                Escríbenos por WhatsApp
              </Button>
            </div>
          </div>

          {/* Imagen */}
          <div className="mt-8 lg:mt-0 relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-primary-100">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={`${data.title} — Unidos por GPS`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 560px"
              />
            )}
          </div>

        </div>
      </section>

      {/* ── Features ── */}
      <section
        aria-label="Características incluidas"
        className="bg-neutral-50 py-16 px-5 lg:py-24 lg:px-10"
      >
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-brand-primary-900 text-center mb-10 lg:mb-12">
            Características incluidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {data.features?.map((f, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                <CheckCircle
                  className="w-5 h-5 text-brand-primary-600 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-heading font-semibold text-brand-primary-900 text-sm mb-1">
                    {f.label}
                  </p>
                  <p className="font-body text-sm text-neutral-600 leading-relaxed">
                    {f.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section
        aria-label="Cotiza este servicio"
        className="bg-brand-primary-800 py-16 px-5 lg:py-20 lg:px-10 text-white text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3">
            ¿Listo para instalar?
          </h2>
          <p className="font-body text-white/70 text-sm lg:text-base leading-relaxed mb-8">
            Instalación gratuita · Sin costo de equipo · Respuesta en minutos
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button variant="inverse" href="/cotizar">
              Cotizar ahora
            </Button>
            <Button variant="whatsapp" href={waHref}>
              <WhatsAppIcon />
              Escríbenos por WhatsApp
            </Button>
          </div>
        </div>
      </section>

    </article>
  )
}
