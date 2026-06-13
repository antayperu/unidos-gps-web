export interface ServiceFeature {
  label: string
  detail: string
}

export interface ServicePageData {
  slug: string
  title: string
  tagline: string
  description: string
  image: string
  features: ServiceFeature[]
  waMessage: string
  meta: {
    title: string
    description: string
  }
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'gps-vehicular',
    title: 'GPS Vehicular Particular',
    tagline: 'Protección inteligente para tu auto, camioneta o moto.',
    description:
      'Instala el sistema GPS de Unidos por GPS en tu vehículo particular y monitorea su ubicación exacta las 24 horas desde tu celular. Instalación gratuita, oculta y sin afectar los sistemas del vehículo.',
    image: '/images/services/gps-vehicular.webp',
    features: [
      {
        label: 'Rastreo GPS en tiempo real',
        detail: 'Ve la posición exacta de tu vehículo desde la app, actualizada segundo a segundo.',
      },
      {
        label: 'Alertas de movimiento y zona',
        detail: 'Recibe notificaciones si tu vehículo sale de la zona que tú defines.',
      },
      {
        label: 'Apagado remoto del motor',
        detail: 'En caso de robo, apaga el motor desde la app y detén el vehículo de forma segura.',
      },
      {
        label: 'App iOS y Android',
        detail: 'Plataforma propia con historial de recorridos, velocidad y reportes en tiempo real.',
      },
      {
        label: 'Instalación gratuita y oculta',
        detail:
          'Nuestros técnicos instalan el dispositivo de forma discreta, sin costo de equipo ni instalación.',
      },
    ],
    waMessage: 'Hola%2C%20quiero%20cotizar%20el%20GPS%20Vehicular%20Particular',
    meta: {
      title: 'GPS Vehicular Particular | Unidos por GPS Perú',
      description:
        'Rastreo GPS en tiempo real para tu auto o camioneta. Instalación gratuita y oculta. Apagado remoto del motor. App iOS y Android. Sin costo de equipo.',
    },
  },
  {
    slug: 'gps-flotas',
    title: 'GPS para Flotas',
    tagline: 'Control total de tu flota empresarial en tiempo real.',
    description:
      'Gestiona todos tus vehículos desde un solo panel. Reportes de recorrido, alertas de zona y horario, y soporte empresarial dedicado para optimizar tu operación.',
    image: '/images/services/gps-flotas.webp',
    features: [
      {
        label: 'Control de flota en tiempo real',
        detail: 'Monitorea todos tus vehículos desde un panel centralizado, actualizado en vivo.',
      },
      {
        label: 'Reportes de recorrido y kilometraje',
        detail: 'Historial completo de rutas, tiempos de parada y distancias recorridas por unidad.',
      },
      {
        label: 'Alertas de zona y horario',
        detail: 'Notificaciones automáticas si una unidad sale de su ruta o zona asignada.',
      },
      {
        label: 'Gestión de múltiples vehículos',
        detail:
          'Administra flotas de cualquier tamaño desde un solo panel con permisos por usuario.',
      },
      {
        label: 'Soporte empresarial dedicado',
        detail: 'Atención prioritaria y asesoría de optimización de rutas para tu negocio.',
      },
    ],
    waMessage: 'Hola%2C%20quiero%20cotizar%20el%20GPS%20para%20Flotas',
    meta: {
      title: 'GPS para Flotas Empresariales | Unidos por GPS Perú',
      description:
        'Control de flota en tiempo real. Reportes, alertas de zona y soporte empresarial dedicado. Escala desde 1 hasta cientos de vehículos.',
    },
  },
  {
    slug: 'unidos-liberty',
    title: 'Unidos Liberty',
    tagline: 'GPS portátil para personas, paquetes y lo que más importa.',
    description:
      'Dispositivo GPS portátil sin instalación. Ideal para proteger a personas, adultos mayores, niños, mascotas, paquetes o cualquier activo en movimiento.',
    image: '/images/services/unidos-liberty.webp',
    features: [
      {
        label: 'Dispositivo 100% portátil',
        detail:
          'Sin cables ni instalación. Lo llevas en la mochila, bolso o lo adhieres donde necesites.',
      },
      {
        label: 'Para personas y activos',
        detail: 'Protege a adultos mayores, niños, mascotas, paquetes o cualquier bien de valor.',
      },
      {
        label: 'Rastreo en tiempo real',
        detail: 'Ubicación exacta desde la app Unidos GPS, disponible en iOS y Android.',
      },
      {
        label: 'Sin instalación requerida',
        detail: 'Actívalo en minutos. No necesitas técnico ni intervención en ningún vehículo.',
      },
      {
        label: 'Alertas y zonas seguras',
        detail: 'Configura zonas y recibe alertas si el dispositivo sale de ellas.',
      },
    ],
    waMessage: 'Hola%2C%20quiero%20cotizar%20el%20Unidos%20Liberty',
    meta: {
      title: 'Unidos Liberty — GPS Portátil | Unidos por GPS Perú',
      description:
        'GPS portátil sin instalación para personas, adultos mayores, niños y activos. Rastreo en tiempo real desde la app. Sin cables ni técnico.',
    },
  },
  {
    slug: 'dashcam-ia',
    title: 'Dashcam con IA',
    tagline: 'Tu vehículo, grabado y protegido con inteligencia artificial.',
    // [DATO REAL PENDIENTE] — verificar descripción y features exactas con el cliente
    description:
      'Cámara de seguridad vehicular con grabación continua e inteligencia artificial para detección automática de incidentes. Evidencia en video cuando más la necesitas.',
    image: '/images/services/dashcam-ia.webp',
    features: [
      {
        label: 'Grabación continua en HD',
        detail: 'Captura todo lo que sucede frente a tu vehículo, en alta definición.',
      },
      {
        label: 'Detección de incidentes con IA',
        detail:
          'La inteligencia artificial identifica colisiones, frenadas bruscas y eventos críticos.',
      },
      {
        label: 'Guardado automático ante impactos',
        detail: 'El clip del momento del impacto se guarda automáticamente en la nube.',
      },
      {
        label: 'Evidencia para seguros y policía',
        detail: 'Video fechado y georreferenciado, válido como prueba ante autoridades.',
      },
      {
        // [DATO REAL PENDIENTE]
        label: 'Conectividad y almacenamiento en la nube',
        detail:
          'Accede a tus grabaciones desde la app en cualquier momento y lugar. [DATO REAL PENDIENTE]',
      },
    ],
    waMessage: 'Hola%2C%20quiero%20cotizar%20la%20Dashcam%20con%20IA',
    meta: {
      title: 'Dashcam con IA para Vehículos | Unidos por GPS Perú',
      description:
        'Cámara vehicular con inteligencia artificial. Grabación continua, detección de incidentes y evidencia en video. Protege tu vehículo y tus derechos.',
    },
  },
]
