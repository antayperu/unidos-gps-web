import { defineField, defineType } from 'sanity'

export const nosotrosSchema = defineType({
  name: 'nosotros',
  title: 'Página Nosotros',
  type: 'document',
  fields: [
    defineField({
      name: 'heroIntro',
      title: 'Intro del hero',
      type: 'text',
      rows: 2,
      description: 'Párrafo corto debajo del título "Quiénes somos". Ej: Empresa peruana con más de 13 años...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'historyParagraph1',
      title: 'Historia — párrafo 1',
      type: 'text',
      rows: 4,
      description: 'Primer párrafo de la sección "Nuestra historia".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'historyParagraph2',
      title: 'Historia — párrafo 2',
      type: 'text',
      rows: 4,
      description: 'Segundo párrafo de la sección "Nuestra historia".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'Misión',
      type: 'text',
      rows: 3,
      description: 'Texto de la tarjeta Misión.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'vision',
      title: 'Visión',
      type: 'text',
      rows: 3,
      description: 'Texto de la tarjeta Visión.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'foundingYear',
      title: 'Año de fundación',
      type: 'number',
      description: 'Ej: 2011. Se usa para calcular los años de experiencia.',
      validation: (Rule) => Rule.required().min(1900).max(2100).integer(),
    }),
    defineField({
      name: 'values',
      title: 'Valores',
      type: 'array',
      description: 'Exactamente 4 valores corporativos. El ícono de cada uno es fijo en el diseño.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Nombre del valor',
              type: 'string',
              description: 'Ej: Seguridad, Disponibilidad 24/7, Innovación, Honestidad',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label' },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
    defineField({
      name: 'teamPhoto',
      title: 'Foto del equipo / instalaciones',
      type: 'image',
      description: 'Se muestra en la sección "Nuestra historia". Formato recomendado: 4:3, mínimo 1120×840px.',
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Página Nosotros' }),
  },
})
