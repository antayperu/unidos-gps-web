export interface Service {
  slug: string
  title: string
  description: string
  image: string
  href: string
}

export const services: Service[] = [
  {
    slug: 'gps-vehicular',
    title: 'GPS Vehicular Particular',
    description:
      'Protección para tu auto o moto con rastreo en tiempo real, alertas personalizadas y apagado remoto del motor.',
    image: '/images/services/gps-vehicular.webp',
    href: '/servicios/gps-vehicular',
  },
  {
    slug: 'gps-flotas',
    title: 'GPS para Flotas',
    description:
      'Panel de control centralizado para gestionar múltiples vehículos, con reportes detallados y alertas por zona.',
    image: '/images/services/gps-flotas.webp',
    href: '/servicios/gps-flotas',
  },
  {
    slug: 'unidos-liberty',
    title: 'Unidos Liberty',
    description:
      'GPS portátil sin instalación. Ideal para personas, niños, adultos mayores y rastreo de paquetes o activos.',
    image: '/images/services/unidos-liberty.webp',
    href: '/servicios/unidos-liberty',
  },
  {
    slug: 'dashcam-ia',
    title: 'Dashcam con IA',
    description:
      'Grabación continua con detección de incidentes por inteligencia artificial. Evidencia siempre disponible.',
    image: '/images/services/dashcam-ia.webp',
    href: '/servicios/dashcam-ia',
  },
]
