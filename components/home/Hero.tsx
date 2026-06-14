'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

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
      className="relative overflow-hidden bg-gradient-to-br from-brand-primary-900 to-brand-primary-600 text-white py-16 px-5 lg:py-28 lg:px-10"
    >
      {/* Imagen de fondo: solo mobile — en lg la imagen va en columna derecha */}
      <div className="absolute inset-0 lg:hidden" aria-hidden="true">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-primary-900/70" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
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
              <Button variant="inverse" href="/cotizar">
                Cotizar GPS
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
