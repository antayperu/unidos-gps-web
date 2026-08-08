import { defineField, defineType } from 'sanity'

export const statsSchema = defineType({
  name: 'stats',
  title: 'Estadísticas (Home)',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Las 4 estadísticas',
      type: 'array',
      description: 'Exactamente 4 estadísticas. Arrastra para reordenar.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Valor',
              type: 'string',
              description: 'El número o texto principal. Ej: 13, 24/7, App, $0',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'prefix',
              title: 'Prefijo (opcional)',
              type: 'string',
              description: 'Texto antes del valor. Ej: + para mostrar "+13"',
            }),
            defineField({
              name: 'label',
              title: 'Etiqueta descriptiva',
              type: 'string',
              description: 'Texto debajo del número. Ej: Años de experiencia',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'isAnimated',
              title: '¿Animar como contador?',
              type: 'boolean',
              description: 'Activar si el valor es un número entero que debe animarse al hacer scroll',
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Estadísticas (Home)' }),
  },
})
