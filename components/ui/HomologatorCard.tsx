'use client'
import Image from 'next/image'
import { useState } from 'react'

interface HomologatorCardProps {
  name: string
  src: string
  alt: string
}

export default function HomologatorCard({ name, src, alt }: HomologatorCardProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="bg-white rounded-xl py-5 px-5 shadow-sm flex items-center justify-center min-h-[128px]">
      {!failed ? (
        // Logo cargado: solo imagen, sin texto redundante. alt preserva accesibilidad.
        <div className="relative w-full h-24">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 767px) calc(50vw - 2.5rem), (max-width: 1023px) calc(25vw - 1.5rem), 270px"
            onError={() => setFailed(true)}
          />
        </div>
      ) : (
        // Fallback: logo no disponible — muestra nombre de entidad como identificación
        <div
          className="w-full h-24 bg-brand-primary-50 rounded-lg flex flex-col items-center justify-center gap-1"
          aria-hidden="true"
        >
          <span className="font-body text-brand-primary-300 text-xs">Logo pendiente</span>
          <span className="font-heading font-bold text-brand-primary-600 text-sm tracking-wide">{name}</span>
        </div>
      )}
    </div>
  )
}
