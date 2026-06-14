import { Metadata } from 'next'
import QuoteForm from '@/components/ui/QuoteForm'

export const metadata: Metadata = {
  title: 'Cotiza tu GPS — Contáctanos',
  description: 'Solicita tu cotización gratuita de GPS vehicular. Respuesta en menos de 24 horas.',
  openGraph: {
    title: 'Cotiza tu GPS — Contáctanos | Unidos por GPS',
    description: 'Solicita tu cotización gratuita de GPS vehicular. Respuesta en menos de 24 horas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cotiza tu GPS — Contáctanos | Unidos por GPS',
    description: 'Solicita tu cotización gratuita de GPS vehicular. Respuesta en menos de 24 horas.',
  },
}

export default function CotizarPage() {
  return (
    <article>

      {/* ── Mini hero ── */}
      <section
        aria-label="Cotiza tu GPS"
        className="bg-gradient-to-br from-brand-primary-900 to-brand-primary-700
                   py-12 px-5 lg:py-16 lg:px-10 text-white text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading font-extrabold text-white
                         text-[1.75rem] lg:text-[2.5rem] leading-tight mb-3">
            Cotiza tu GPS
          </h1>
          <p className="font-body text-white/75 text-sm lg:text-base leading-relaxed">
            Completa el formulario y te respondemos en menos de 24 horas.
            Sin compromisos.
          </p>
        </div>
      </section>

      {/* ── Formulario ── */}
      <section
        aria-label="Formulario de cotización"
        className="bg-neutral-50 py-12 px-5 lg:py-20 lg:px-10"
      >
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-card p-6 lg:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

    </article>
  )
}
