import { z } from 'zod'

const phoneRegex = /^(\+?51)?9\d{8}$/

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'El nombre es requerido')
    .max(120, 'El nombre es demasiado largo'),
  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/[\s()-]/g, ''))
    .pipe(
      z
        .string()
        .regex(phoneRegex, 'Ingresa un número peruano válido (Ej: 987654321)'),
    ),
  email: z
    .string()
    .trim()
    .email('Ingresa un email válido')
    .max(160, 'El email es demasiado largo')
    .optional()
    .or(z.literal(''))
    .transform((value) => value || null),
  service: z.enum(
    ['gps-vehicular', 'gps-flotas', 'unidos-liberty', 'dashcam-ia', 'asesoria'],
    { message: 'Selecciona un servicio válido' },
  ),
  vehicles: z.coerce
    .number()
    .int('Indica un número entero de vehículos')
    .min(1, 'Mínimo 1 vehículo')
    .max(999, 'El número de vehículos es demasiado alto'),
  message: z
    .string()
    .trim()
    .max(500, 'Máximo 500 caracteres')
    .optional()
    .or(z.literal(''))
    .transform((value) => value || null),
})

export type LeadInput = z.infer<typeof leadSchema>
