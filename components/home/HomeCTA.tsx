'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import { contact } from '@/content/site'

export default function HomeCTA() {
  const prefersReduced = useReducedMotion() ?? false

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReduced ? 0 : 0.12 },
    },
  }

  const item = {
    hidden: prefersReduced ? {} : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' as const },
    },
  }

  const viewport = { once: true, margin: '-60px 0px' }

  return (
    <section
      aria-label="Cotiza tu GPS"
      className="bg-gradient-to-br from-brand-primary-700 to-brand-primary-900 py-24 px-5 lg:py-32 lg:px-10 text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >

          <motion.h2
            variants={item}
            className="font-heading text-[2rem] lg:text-[2.75rem] font-extrabold text-white leading-tight mb-5 lg:mb-6"
          >
            ¿Listo para proteger tu vehículo?
          </motion.h2>

          <motion.p
            variants={item}
            className="font-body text-base lg:text-lg text-white/75 leading-relaxed mb-10 lg:mb-12"
          >
            Más de 13 años cuidando lo que más importa.{' '}
            <br className="hidden sm:block" />
            Instala hoy sin costo de equipo.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button variant="inverse" href="/cotizar">
              Cotizar ahora
            </Button>

            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 font-body text-base text-white/80 hover:text-white transition-colors min-h-[44px] px-2"
            >
              <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <span>
                {contact.phone}{' '}
                <span className="text-white/60">— Emergencia 24/7</span>
              </span>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
