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
    <div className="bg-white rounded-xl py-5 px-4 shadow-sm flex flex-col items-center gap-3 min-h-[120px] justify-center">
      {!failed ? (
        <div className="relative w-full h-16">
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
        <div
          className="w-full h-16 bg-brand-primary-50 rounded-lg flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="font-body text-brand-primary-300 text-xs">Logo pendiente</span>
        </div>
      )}
      <span className="font-heading font-bold text-brand-primary-700 text-sm tracking-wide">
        {name}
      </span>
    </div>
  )
}
