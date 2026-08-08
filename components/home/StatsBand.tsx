'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate, useReducedMotion } from 'framer-motion'
import type { StatItem } from '@/lib/sanity.types'

type Props = {
  stats: StatItem[]
}

function AnimatedNumber({
  target,
  prefix = '',
  isInView,
  prefersReduced,
}: {
  target: number
  prefix?: string
  isInView: boolean
  prefersReduced: boolean
}) {
  const count = useMotionValue(prefersReduced ? target : 0)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    if (isInView && !prefersReduced) {
      const controls = animate(count, target, { duration: 1.5, ease: 'easeOut' })
      return controls.stop
    }
  }, [isInView, count, target, prefersReduced])

  return (
    <span className="font-heading text-[2.25rem] md:text-[3rem] font-extrabold text-brand-primary-600 leading-none mb-2 block">
      {prefix}
      <motion.span>{rounded}</motion.span>
    </span>
  )
}

export default function StatsBand({ stats }: Props) {
  const prefersReduced = useReducedMotion() ?? false
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px 0px' })

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReduced ? 0 : 0.1 },
    },
  }

  const item = {
    hidden: prefersReduced ? {} : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' as const },
    },
  }

  return (
    <section aria-label="Estadísticas" className="bg-white border-b border-neutral-100 py-12 px-5 lg:py-16 lg:px-10">
      <motion.div
        ref={containerRef}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-neutral-100"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={item}
            className={`text-center py-8 px-6 ${i < 2 ? 'border-b border-neutral-100 lg:border-b-0' : ''}`}
          >
            {stat.isAnimated ? (
              <AnimatedNumber
                target={parseInt(stat.value, 10)}
                prefix={stat.prefix}
                isInView={isInView}
                prefersReduced={prefersReduced}
              />
            ) : (
              <span className="font-heading text-[2.25rem] md:text-[3rem] font-extrabold text-brand-primary-600 leading-none mb-2 block">
                {stat.prefix}{stat.value}
              </span>
            )}
            <span className="font-body text-sm text-neutral-500 font-medium leading-snug">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
