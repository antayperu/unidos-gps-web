'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-brand-accent-100 flex items-center justify-center mb-6">
        <AlertTriangle size={32} className="text-brand-accent-500" aria-hidden="true" />
      </div>

      <h1 className="font-heading text-2xl md:text-3xl text-brand-primary-900">
        Algo salió mal
      </h1>

      <p className="font-body text-base text-neutral-500 mt-3 max-w-md leading-relaxed">
        Ocurrió un error inesperado. Puedes intentarlo de nuevo
        o volver al inicio.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Button variant="primary" onClick={reset}>
          Intentar de nuevo
        </Button>
        <Button variant="secondary" href="/">
          Volver al inicio
        </Button>
      </div>
    </div>
  )
}
