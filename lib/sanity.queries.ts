import { client } from '@/lib/sanity.client'
import type { SanityNosotros, SanityService, SanityStats, SanityTestimonial } from '@/lib/sanity.types'

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

export async function getStats(): Promise<SanityStats | null> {
  return client.fetch(
    `*[_type == "stats"][0] { _id, items[] { value, prefix, label, isAnimated } }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getNosotros(): Promise<SanityNosotros | null> {
  return client.fetch(
    `*[_type == "nosotros"][0] {
      _id, heroIntro, historyParagraph1, historyParagraph2,
      mission, vision, foundingYear,
      values[] { label },
      teamPhoto
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getAllTestimonials(): Promise<SanityTestimonial[]> {
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc) {
      _id, name, initials, role, location, rating, quote, photo, order
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}
