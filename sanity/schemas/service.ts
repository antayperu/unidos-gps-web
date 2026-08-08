import { defineField, defineType } from 'sanity'

export const serviceSchema = defineType({
  name: 'service',
  title: 'Servicio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL del servicio)',
      type: 'slug',
      description: 'Se genera automáticamente desde el título. No cambiar después de publicar.',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline (subtítulo corto)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descripción corta (para la card en la Home)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'description',
      title: 'Descripción larga (para la página interna)',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'features',
      title: 'Características incluidas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Título de la característica',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'detail',
              title: 'Descripción / detalle',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label' },
          },
        },
      ],
    }),
    defineField({
      name: 'waMessage',
      title: 'Mensaje de WhatsApp (URL-encoded)',
      type: 'string',
      description:
        'Texto pre-llenado al abrir WhatsApp. Ejemplo: Hola%2C%20quiero%20cotizar%20el%20GPS%20Vehicular',
    }),
    defineField({
      name: 'meta',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título SEO',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: 'description',
          title: 'Descripción SEO',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160),
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', media: 'mainImage' },
  },
  orderings: [
    {
      title: 'Orden de creación',
      name: 'createdAtAsc',
      by: [{ field: '_createdAt', direction: 'asc' }],
    },
  ],
})
