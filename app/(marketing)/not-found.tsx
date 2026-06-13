import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4 text-center">
      <Image
        src="/images/logo.png"
        alt="Unidos por GPS"
        width={160}
        height={46}
        className="h-12 w-auto"
        priority
      />

      <p className="font-heading text-8xl font-bold text-brand-primary-100 mt-8 select-none" aria-hidden="true">
        404
      </p>

      <h1 className="font-heading text-2xl md:text-3xl text-brand-primary-900 mt-2">
        Página no encontrada
      </h1>

      <p className="font-body text-base text-neutral-500 mt-3 max-w-md leading-relaxed">
        La página que buscas no existe o fue movida.
        Vuelve al inicio para continuar navegando.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Button variant="primary" href="/">
          Volver al inicio
        </Button>
        <Button variant="secondary" href="/cotizar">
          Cotizar GPS
        </Button>
      </div>
    </div>
  )
}
