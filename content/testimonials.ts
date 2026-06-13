export interface Testimonial {
  slug: string
  name: string
  role: string
  location: string
  initials: string
  rating: number
  quote: string
}

// [DATO REAL PENDIENTE] — reemplazar con testimonios reales del cliente
export const testimonials: Testimonial[] = [
  {
    slug: 'carlos-m',
    name: 'Carlos M.',
    role: 'Propietario particular',
    location: 'Lima',
    initials: 'CM',
    rating: 5,
    quote:
      'Instalaron el GPS en menos de una hora y sin tocar ningún cable visible. La app me muestra la ubicación exacta en tiempo real. Ya no me preocupo cuando dejo el carro estacionado.',
  },
  {
    slug: 'roberto-v',
    name: 'Roberto V.',
    role: 'Gestor de flota',
    location: 'Callao',
    initials: 'RV',
    rating: 5,
    quote:
      'Monitoreo 12 camiones desde el celular. Las alertas de velocidad y paradas no programadas me ayudaron a reducir el consumo de combustible en un 18% en el primer mes.',
  },
  {
    slug: 'maria-t',
    name: 'María T.',
    role: 'Propietaria particular',
    location: 'Miraflores',
    initials: 'MT',
    rating: 5,
    quote:
      'Me robaron el auto a las 11pm. Con Unidos GPS apagué el motor desde la app y lo recuperaron en 40 minutos con ayuda de la policía. El servicio de emergencia respondió inmediatamente.',
  },
]
