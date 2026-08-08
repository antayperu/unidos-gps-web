import { defineField, defineType } from 'sanity'

export const homologatorSchema = defineType({
  name: 'homologator',
  title: 'Homologadoras',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la entidad',
      type: 'string',
      description: 'Sigla oficial. Ej: MTC, OSIPTEL, SUTRAN, OSINERGMIN',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Nombre completo (para accesibilidad)',
      type: 'string',
      description: 'Nombre completo de la entidad. Ej: Ministerio de Transportes y Comunicaciones',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Subir PNG o WebP con fondo transparente. Tamaño recomendado: 540×192px.',
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número entero. Menor número aparece primero. Ej: 1 = MTC, 2 = OSIPTEL...',
      validation: (Rule) => Rule.required().integer().min(1),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'alt' },
  },
})
