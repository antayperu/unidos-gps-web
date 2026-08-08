// Tipos de documentos de Sanity — se amplían en T42–T44

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
