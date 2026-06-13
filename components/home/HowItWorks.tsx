'use client'

import { motion, useReducedMotion } from 'framer-motion'
import StepperItem from '@/components/ui/StepperItem'

const STEPS = [
  {
    title: 'Agenda la instalación',
    description:
      'Nuestros técnicos instalan el GPS de forma oculta en tu vehículo, sin afectar su funcionamiento.',
  },
  {
    title: 'Descarga la app',
    description:
      'Accede a nuestra plataforma desde iOS o Android. Configuración lista en minutos.',
  },
  {
    title: 'Monitorea en tiempo real',
    description:
      'Ve la ubicación exacta de tu vehículo y recibe alertas inteligentes las 24 horas.',
  },
  {
    title: 'Actúa en caso de robo',
    description:
      'Apaga el motor remotamente y coordina con nuestro equipo de respuesta inmediata.',
  },
]

export default function HowItWorks() {
  const prefersReduced = useReducedMotion() ?? false

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReduced ? 0 : 0.15 },
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

  const viewport = { once: true, margin: '-80px 0px' }

  return (
    <section
      aria-label="Cómo funciona"
      className="bg-brand-primary-800 py-16 px-5 lg:py-24 lg:px-10 text-white"
    >
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
            Cómo funciona
          </h2>
          <p className="font-body text-base text-white/65 max-w-2xl mx-auto leading-relaxed">
            En 4 pasos tienes tu vehículo protegido
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop horizontal connector line — sits behind circles */}
          <div
            className="hidden lg:block absolute h-0.5 bg-brand-primary-500 z-0 top-5 left-[calc(12.5%_+_20px)] right-[calc(12.5%_+_20px)]"
            aria-hidden="true"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 lg:grid-cols-4"
          >
            {STEPS.map((step, i) => (
              <motion.div key={i} variants={item} className="lg:px-6">
                <StepperItem step={step} index={i} isLast={i === STEPS.length - 1} />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
