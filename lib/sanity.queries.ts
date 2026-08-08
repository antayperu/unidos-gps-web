import { client } from '@/lib/sanity.client'
import type { SanityService } from '@/lib/sanity.types'

const serviceFields = `
  _id,
  title,
  "slug": slug.current,
  tagline,
  shortDescription,
  description,
  mainImage,
  features[] { label, detail },
  waMessage,
  meta { title, description }
`

export async function getAllServices(): Promise<SanityService[]> {
  return client.fetch(
    `*[_type == "service"] | order(_createdAt asc) { ${serviceFields} }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getServiceBySlug(slug: string): Promise<SanityService | null> {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0] { ${serviceFields} }`,
    { slug },
    { next: { revalidate: 60 } }
  )
}
