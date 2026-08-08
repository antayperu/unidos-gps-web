// Tipos de documentos de Sanity — se amplían en T41–T44

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
