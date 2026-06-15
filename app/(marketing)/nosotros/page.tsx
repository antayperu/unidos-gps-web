import { Metadata } from 'next'
import { ShieldCheck, EyeOff, Smartphone, BadgeDollarSign, Shield, Clock, Lightbulb, Award } from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import HomologatorCard from '@/components/ui/HomologatorCard'
import { contact } from '@/content/site'

const VALUES = [
  { icon: Shield,    label: 'Seguridad' },
  { icon: Clock,     label: 'Disponibilidad 24/7' },
  { icon: Lightbulb, label: 'Innovación' },
  { icon: Award,     label: 'Honestidad' },
]

const HOMOLOGATORS = [
  { id: 'mtc',        name: 'MTC',        src: '/images/logos/mtc.png',        alt: 'Ministerio de Transportes y Comunicaciones' },
  { id: 'osiptel',    name: 'OSIPTEL',    src: '/images/logos/osiptel.png',    alt: 'Organismo Supervisor de Inversión Privada en Telecomunicaciones' },
  { id: 'sutran',     name: 'SUTRAN',     src: '/images/logos/sutran.png',     alt: 'Superintendencia de Transporte Terrestre de Personas, Carga y Mercancías' },
  { id: 'osinergmin', name: 'OSINERGMIN', src: '/images/logos/osinergmin.png', alt: 'Organismo Supervisor de la Inversión en Energía y Minería' },
]

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: '+13 años en el mercado',
    description:
      'Desde nuestros inicios hemos protegido miles de vehículos en todo el Perú con cobertura nacional e internacional y tecnología GPS de última generación.',
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
  description: 'Más de 13 años protegiendo vehículos en Perú. Empresa homologada por MTC, OSIPTEL, SUTRAN y OSINERGMIN.',
  openGraph: {
    title: 'Quiénes Somos — Unidos por GPS',
    description: 'Más de 13 años protegiendo vehículos en Perú. Empresa homologada por MTC, OSIPTEL, SUTRAN y OSINERGMIN.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiénes Somos — Unidos por GPS',
    description: 'Más de 13 años protegiendo vehículos en Perú. Empresa homologada por MTC, OSIPTEL, SUTRAN y OSINERGMIN.',
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
            Empresa peruana con más de 13 años protegiendo vehículos particulares y flotas
            empresariales.
          </p>
          <p className="font-body text-white/65 text-sm lg:text-base leading-relaxed max-w-2xl mb-8 lg:mb-10">
            Proporcionar soluciones de seguimiento y monitoreo satelital innovadoras y confiables para
            vehículos y flotas, garantizando la seguridad, eficiencia y productividad de nuestros
            clientes, y contribuyendo al desarrollo de un transporte más seguro y sostenible.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="inverse" href="/cotizar">
              Cotizar servicio
            </Button>
            <Button variant="ghost" href={`${contact.whatsappHref}?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Unidos%20por%20GPS`}>
              Escríbenos por WhatsApp
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
            <div className="space-y-4 font-body text-neutral-600 leading-relaxed text-sm lg:text-base">
              <p>
                Somos una empresa peruana con más de 13 años de experiencia en monitoreo satelital
                vehicular GPS en tiempo real, con cobertura nacional e internacional. Nos destacamos
                por nuestra constante innovación y actualización tecnológica, lo que nos permite
                ofrecer soluciones personalizadas y efectivas para satisfacer las necesidades
                específicas de nuestros clientes.
              </p>
              <p>
                Nuestro equipo profesional y técnico está comprometido con brindar tranquilidad y
                confianza a nuestros clientes, gracias a nuestra amplia experiencia en el rubro y
                nuestra dedicación a la excelencia. Ofrecemos las mejores soluciones en tecnología
                satelital para todo tipo de vehículos, garantizando un servicio de alta calidad y
                confiabilidad.
              </p>
            </div>

            {/* Misión / Visión / Valores */}
            <div className="mt-8 space-y-4">
              <div className="bg-brand-primary-50 rounded-xl p-5">
                <p className="font-heading font-bold text-brand-primary-900 text-sm uppercase tracking-wide mb-1">Misión</p>
                <p className="font-body text-sm text-neutral-600 leading-relaxed">
                  Proporcionar soluciones de seguimiento y monitoreo satelital innovadoras y confiables
                  para vehículos y flotas, garantizando la seguridad, eficiencia y productividad de
                  nuestros clientes, y contribuyendo al desarrollo de un transporte más seguro y sostenible.
                </p>
              </div>
              <div className="bg-brand-primary-50 rounded-xl p-5">
                <p className="font-heading font-bold text-brand-primary-900 text-sm uppercase tracking-wide mb-1">Visión</p>
                <p className="font-body text-sm text-neutral-600 leading-relaxed">
                  Ser reconocidos como la empresa líder en telemetría y seguridad vehicular, destacando
                  por nuestra excelencia operativa y la confianza de miles de usuarios conectados a
                  nuestra plataforma.
                </p>
              </div>
              <div className="bg-brand-primary-50 rounded-xl p-5">
                <p className="font-heading font-bold text-brand-primary-900 text-sm uppercase tracking-wide mb-3">Valores</p>
                <div className="grid grid-cols-2 gap-3">
                  {VALUES.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                      <Icon className="w-5 h-5 text-brand-primary-600 flex-shrink-0" aria-hidden="true" />
                      <span className="font-body font-semibold text-brand-primary-900 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Foto del equipo / instalaciones */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-primary-50">
            <Image
              src="/images/nosotros-equipo.webp"
              alt="Equipo de Unidos por GPS"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 560px"
            />
          </div>

        </div>
      </section>

      {/* ── Homologaciones ── */}
      <section aria-label="Homologaciones" className="bg-neutral-50 py-16 px-5 lg:py-20 lg:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-brand-primary-900 mb-3">
            Homologados por
          </h2>
          <p className="font-body text-neutral-500 text-sm lg:text-base mb-10 max-w-xl mx-auto">
            Cumplimos con los estándares exigidos por los principales organismos reguladores del
            transporte en Perú.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HOMOLOGATORS.map((org) => (
              <HomologatorCard key={org.id} name={org.name} src={org.src} alt={org.alt} />
            ))}
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
            Instalación gratuita · Sin costo de equipo · Más de 13 años de experiencia
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button variant="inverse" href="/cotizar">
              Cotizar ahora
            </Button>
            <Button variant="ghost" href={`${contact.whatsappHref}?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Unidos%20por%20GPS`}>
              Escríbenos por WhatsApp
            </Button>
          </div>
        </div>
      </section>

    </article>
  )
}
