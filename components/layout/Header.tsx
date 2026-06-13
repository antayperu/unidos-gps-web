'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { navLinks, contact } from '@/content/site'

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  }

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: 'easeInOut' as const }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500 rounded-sm">
            <Image
              src="/images/logo.png"
              alt="Unidos por GPS — inicio"
              width={140}
              height={40}
              priority
              className="h-9 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-neutral-700 hover:text-brand-primary-600 px-3 py-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Emergency CTA — visible on lg+ */}
            <a
              href={contact.phoneHref}
              className="hidden lg:flex items-center gap-1.5 bg-brand-emergency hover:bg-brand-emergency-dark text-white font-body font-medium text-sm px-4 py-2 rounded-full transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-emergency"
              aria-label={`Emergencia 24/7 — llamar al ${contact.phone}`}
            >
              <IconPhone />
              <span>Emergencia 24/7</span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              className="md:hidden flex items-center justify-center min-h-[44px] min-w-[44px] text-neutral-700 hover:text-brand-primary-600 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500"
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={transition}
            className="md:hidden overflow-hidden border-t border-neutral-100 bg-white"
          >
            <nav aria-label="Menú móvil" className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-base text-neutral-700 hover:text-brand-primary-600 hover:bg-neutral-50 px-3 py-3 rounded-md transition-colors min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-500"
                >
                  {link.label}
                </Link>
              ))}

              {/* Emergency in mobile menu */}
              <a
                href={contact.phoneHref}
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center gap-2 bg-brand-emergency hover:bg-brand-emergency-dark text-white font-body font-medium text-sm px-4 py-3 rounded-md transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emergency"
              >
                <IconPhone />
                <span>Emergencia 24/7 — {contact.phone}</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
