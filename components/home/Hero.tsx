'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { contact } from '@/content/site'

const WA_HERO_HREF = `${contact.whatsappHref}?text=Hola%2C%20quiero%20cotizar%20un%20GPS`

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Hero() {
  const prefersReduced = useReducedMotion()

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReduced ? 0 : 0.1 },
    },
  }

  const item = {
    hidden: prefersReduced ? {} : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' as const },
    },
  }

  return (
    <section
      aria-label="Hero"
      className="bg-gradient-to-br from-brand-primary-900 to-brand-primary-600 text-white py-16 px-5 lg:py-28 lg:px-10"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-center">

          {/* Text column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span
                aria-hidden="true"
                className="inline-block bg-white/15 text-white font-body text-xs font-medium px-4 py-1.5 rounded-full tracking-widest uppercase mb-7"
              >
                🛡️ GPS Vehicular Perú
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-heading font-extrabold text-white text-[2rem] leading-tight lg:text-[3.75rem] lg:leading-[1.15] mb-4 lg:mb-6"
            >
              Protección inteligente para tu vehículo
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={item}
              className="font-body text-white/80 leading-relaxed text-[0.9375rem] lg:text-lg max-w-xs mx-auto lg:max-w-xl lg:mx-0 mb-8 lg:mb-10"
            >
              Monitoreo GPS 24/7 con instalación oculta y app propia. Sin pago de equipo.
              Más de 13 años protegiendo lo que más importa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col items-center gap-3 lg:flex-row lg:gap-4"
            >
              <Button variant="whatsapp" href={WA_HERO_HREF}>
                <WhatsAppIcon />
                Escríbenos por WhatsApp
              </Button>
              <Button variant="ghost" href="#servicios">
                Ver servicios
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual column — desktop only */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: prefersReduced ? 0 : 0.5,
              delay: prefersReduced ? 0 : 0.2,
              ease: 'easeOut' as const,
            }}
            className="hidden lg:block relative rounded-3xl overflow-hidden"
            style={{ aspectRatio: '4/3' }}
          >
            <Image
              src="/images/hero-bg.webp"
              alt="Vehículo con sistema GPS instalado"
              fill
              priority
              className="object-cover"
              sizes="480px"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
