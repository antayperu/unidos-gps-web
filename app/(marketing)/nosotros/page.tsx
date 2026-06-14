import { Metadata } from 'next'
import { ShieldCheck, EyeOff, Smartphone, BadgeDollarSign } from 'lucide-react'
import Button from '@/components/ui/Button'
import { contact } from '@/content/site'

const WA_NOSOTROS_HREF = `${contact.whatsappHref}?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Unidos%20por%20GPS`

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: '+10 años en el mercado',
    description:
      'Desde nuestros inicios hemos protegido miles de vehículos en todo el Perú con tecnología GPS de última generación.',
  },
  {
    icon: EyeOff,
    title: 'Instalación oculta y gratuita',
    description:
      'Nuestros técnicos certificados instalan el dispositivo de forma discreta, sin costo de equipo ni instalación.',
  },
  {
    icon: Smartphone,
    title: 'App propia iOS y Android',
    description:
      'Plataforma de monitoreo desarrollada por nosotros: rápida, intuitiva y con soporte continuo.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Sin pago de equipo',
    description:
      'Solo pagas el servicio mensual de monitoreo. Sin inversión inicial ni contratos de largo plazo forzados.',
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Quiénes Somos — Unidos por GPS' },
  description: 'Más de 10 años protegiendo vehículos en Perú. Conoce al equipo de Unidos por GPS.',
  openGraph: {
    title: 'Quiénes Somos — Unidos por GPS',
    description: 'Más de 10 años protegiendo vehículos en Perú. Conoce al equipo de Unidos por GPS.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiénes Somos — Unidos por GPS',
    description: 'Más de 10 años protegiendo vehículos en Perú. Conoce al equipo de Unidos por GPS.',
  },
}

export default function NosotrosPage() {
  return (
    <article>

      {/* ── Hero ── */}
      <section
        aria-label="Quiénes somos"
        className="bg-gradient-to-br from-brand-primary-900 to-brand-primary-700 py-16 px-5 lg:py-24 lg:px-10 text-white"
      >
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-heading font-extrabold text-white text-[2rem] leading-tight lg:text-[3rem] lg:leading-[1.15] mb-4 lg:mb-5">
            Quiénes somos
          </h1>
          <p className="font-body text-white/85 text-base lg:text-lg leading-relaxed mb-4">
            Empresa peruana con más de 10 años protegiendo vehículos particulares y flotas
            empresariales.
          </p>
          {/* [DATO REAL PENDIENTE] — reemplazar con misión formal del cliente */}
          <p className="font-body text-white/65 text-sm lg:text-base leading-relaxed max-w-2xl mb-8 lg:mb-10">
            Nacimos con una misión clara: hacer que la tecnología GPS sea accesible, confiable y
            efectiva para cada peruano. Hoy somos referentes en seguridad vehicular con presencia
            en Lima y principales ciudades del país.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="whatsapp" href={WA_NOSOTROS_HREF}>
              <WhatsAppIcon />
              Escríbenos por WhatsApp
            </Button>
            <Button variant="ghost" href="/cotizar">
              Cotizar servicio
            </Button>
          </div>
        </div>
      </section>

      {/* ── Diferenciadores ── */}
      <section
        aria-label="Por qué elegirnos"
        className="bg-neutral-50 py-16 px-5 lg:py-24 lg:px-10"
      >
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-brand-primary-900 text-center mb-10 lg:mb-12">
            Por qué elegirnos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {DIFFERENTIATORS.map((d) => {
              const Icon = d.icon
              return (
                <div key={d.title} className="flex gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <Icon
                    className="w-10 h-10 text-brand-primary-600 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-heading font-bold text-brand-primary-900 text-base mb-2">
                      {d.title}
                    </p>
                    <p className="font-body text-sm text-neutral-600 leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Historia ── */}
      <section
        aria-label="Nuestra historia"
        className="bg-white py-16 px-5 lg:py-24 lg:px-10"
      >
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Texto */}
          <div>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-brand-primary-900 mb-6">
              Nuestra historia
            </h2>
            {/* [DATO REAL PENDIENTE] — reemplazar con historia real del cliente */}
            <div className="space-y-4 font-body text-neutral-600 leading-relaxed text-sm lg:text-base">
              <p>
                Unidos por GPS nació de la necesidad de proteger lo que más importa. Más de una
                década después, seguimos siendo la opción de confianza para propietarios de
                vehículos particulares y empresas con flotas en todo el Perú.
              </p>
              <p className="italic text-neutral-400 text-xs">
                [DATO REAL PENDIENTE — historia fundacional, año de inicio, motivación del equipo
                fundador, primeros clientes e hitos clave.]
              </p>
              <p className="italic text-neutral-400 text-xs">
                [DATO REAL PENDIENTE — misión, visión y valores corporativos formales.]
              </p>
            </div>
          </div>

          {/* Placeholder visual */}
          <div
            className="bg-brand-primary-50 rounded-2xl aspect-[4/3] flex items-center justify-center"
            aria-hidden="true"
          >
            <p className="font-body text-sm text-brand-primary-300 text-center px-6">
              {/* [DATO REAL PENDIENTE — foto del equipo o instalaciones] */}
              Foto del equipo<br />o instalaciones
            </p>
          </div>

        </div>
      </section>

      {/* ── CTA band ── */}
      <section
        aria-label="Cotiza tu GPS"
        className="bg-brand-primary-800 py-16 px-5 lg:py-20 lg:px-10 text-white text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3">
            ¿Listo para proteger tu vehículo?
          </h2>
          <p className="font-body text-white/70 text-sm lg:text-base leading-relaxed mb-8">
            Instalación gratuita · Sin costo de equipo · Más de 10 años de experiencia
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button variant="whatsapp" href={WA_NOSOTROS_HREF}>
              <WhatsAppIcon />
              Escríbenos por WhatsApp
            </Button>
            <Button variant="ghost" href="/cotizar">
              Ver formulario de cotización
            </Button>
          </div>
        </div>
      </section>

    </article>
  )
}
