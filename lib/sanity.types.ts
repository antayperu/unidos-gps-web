// Tipos de documentos de Sanity — se amplían en T43–T44

export interface SanityImageAsset {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface ServiceFeature {
  label: string
  detail: string
}

export interface SanityTestimonial {
  _id: string
  name: string
  initials: string
  role: string
  location: string
  rating: number
  quote: string
  photo: SanityImageAsset | null
  order: number
}

export interface StatItem {
  value: string
  prefix?: string
  label: string
  isAnimated: boolean
}

export interface SanityStats {
  _id: string
  items: StatItem[]
}

export interface SanityValue {
  label: string
}

export interface SanityNosotros {
  _id: string
  heroIntro: string
  historyParagraph1: string
  historyParagraph2: string
  mission: string
  vision: string
  foundingYear: number
  values: SanityValue[]
  teamPhoto: SanityImageAsset | null
}

export interface SanityHomologator {
  _id: string
  name: string
  alt: string
  logo: SanityImageAsset
  order: number
}

export interface SanityService {
  _id: string
  title: string
  slug: string
  tagline: string
  shortDescription: string
  description: string
  mainImage: SanityImageAsset | null
  features: ServiceFeature[]
  waMessage: string
  meta: {
    title: string
    description: string
  }
}
