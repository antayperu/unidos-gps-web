'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { XCircle, CheckCircle } from 'lucide-react'

const PAIN_POINTS = [
  'No puedes localizar tu vehículo si te lo roban',
  'Pierdes tu herramienta de trabajo e ingresos',
  'Sin respuesta rápida, la recuperación es casi imposible',
]

const SOLUTIONS = [
  'Ubicación en tiempo real desde tu celular',
  'Apagado remoto del motor ante robo',
  'Alertas inteligentes 24/7 con equipo de respuesta',
  'Control total desde nuestra app propia',
]

export default function PainPoint() {
  const prefersReduced = useReducedMotion() ?? false

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReduced ? 0 : 0.08 },
    },
  }

  const fadeUp = {
    hidden: prefersReduced ? {} : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' as const },
    },
  }

  const viewport = { once: true, margin: '-80px 0px' }

  return (
    <section className="bg-brand-primary-900 py-16 px-5 lg:py-24 lg:px-10 text-white">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' as const }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Tu vehículo está realmente protegido?
          </h2>
          <p className="font-body text-base text-white/65 max-w-2xl mx-auto leading-relaxed">
            Cada año se roban miles de vehículos en el Perú. El GPS es tu primera línea de defensa.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">

          {/* Pain column */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="pb-10 border-b border-white/15 lg:pb-0 lg:border-b-0 lg:border-r lg:border-white/15 lg:pr-16"
          >
            <motion.h3 variants={fadeUp} className="font-heading text-xl font-bold text-white mb-6">
              Sin protección GPS…
            </motion.h3>
            <ul className="flex flex-col gap-4" role="list">
              {PAIN_POINTS.map((point, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 font-body text-base text-white/85 leading-relaxed"
                >
                  <XCircle
                    size={22}
                    className="text-brand-emergency flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution column */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="pt-10 lg:pt-0 lg:pl-16"
          >
            <motion.h3 variants={fadeUp} className="font-heading text-xl font-bold text-white mb-6">
              Con Unidos por GPS…
            </motion.h3>
            <ul className="flex flex-col gap-4" role="list">
              {SOLUTIONS.map((solution, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 font-body text-base text-white/85 leading-relaxed"
                >
                  <CheckCircle
                    size={22}
                    className="text-whatsapp flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  {solution}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
