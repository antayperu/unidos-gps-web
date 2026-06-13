'use client'

import { motion, useReducedMotion } from 'framer-motion'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/content/services'

export default function ServicesPreview() {
  const prefersReduced = useReducedMotion() ?? false

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

  const viewport = { once: true, margin: '-80px 0px' }

  return (
    <section
      id="servicios"
      aria-label="Nuestros servicios"
      className="bg-neutral-50 py-16 px-5 lg:py-24 lg:px-10"
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
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-brand-primary-900 mb-4">
            Nuestros servicios GPS
          </h2>
          <p className="font-body text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Soluciones para cada tipo de vehículo y necesidad
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={item}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
