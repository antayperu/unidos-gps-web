import { defineField, defineType } from 'sanity'

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del cliente',
      type: 'string',
      description: 'Puede ser nombre completo o iniciales (ej. Carlos M.)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'initials',
      title: 'Iniciales (para el avatar)',
      type: 'string',
      description: 'Máximo 2 letras. Ej: CM, RV, MT',
      validation: (Rule) => Rule.required().max(2),
    }),
    defineField({
      name: 'role',
      title: 'Tipo de cliente',
      type: 'string',
      options: {
        list: [
          { title: 'Propietario particular', value: 'Propietario particular' },
          { title: 'Propietaria particular', value: 'Propietaria particular' },
          { title: 'Gestor de flota', value: 'Gestor de flota' },
          { title: 'Gestora de flota', value: 'Gestora de flota' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Ciudad / Distrito',
      type: 'string',
      description: 'Ej: Lima, Miraflores, Callao',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Calificación (estrellas)',
      type: 'number',
      options: {
        list: [
          { title: '5 estrellas', value: 5 },
          { title: '4 estrellas', value: 4 },
          { title: '3 estrellas', value: 3 },
        ],
      },
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'quote',
      title: 'Testimonio',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'photo',
      title: 'Foto del cliente (opcional)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número menor aparece primero. Ej: 1, 2, 3',
      initialValue: 10,
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
  orderings: [
    {
      title: 'Orden de aparición',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
