'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { track } from '@vercel/analytics/react'
import { CheckCircle, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { contact } from '@/content/site'

const WA_COTIZAR_HREF = `${contact.whatsappHref}?text=Hola%2C%20quiero%20cotizar%20un%20GPS`

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  vehicles: number
  message: string
  website?: string
}

const inputBase =
  'w-full rounded-lg border bg-white px-4 py-3 font-body text-sm text-neutral-900 ' +
  'placeholder:text-neutral-400 transition-colors min-h-[44px] ' +
  'focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent ' +
  'disabled:bg-neutral-100 disabled:cursor-not-allowed'

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-body font-medium text-sm text-neutral-700">
        {label}
        {required && (
          <span className="text-error ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-error mt-0.5">
          {error}
        </p>
      )}
    </div>
  )
}

export default function QuoteForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ defaultValues: { vehicles: 1 } })

  const onSubmit = async (data: FormData) => {
    setFormState('loading')
    setServerError(null)

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (json.ok) {
        track('lead_submitted')
        setFormState('success')
        return
      }

      if (json.errors) {
        Object.entries(json.errors as Record<string, string[]>).forEach(([field, msgs]) => {
          setError(field as keyof FormData, { message: msgs[0] })
        })
        setFormState('idle')
        return
      }

      setServerError(json.message ?? 'Ocurrió un error al enviar. Intenta de nuevo.')
      setFormState('error')
    } catch {
      setServerError('No pudimos conectar con el servidor. Intenta de nuevo.')
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div role="status" className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-whatsapp mx-auto mb-4" aria-hidden="true" />
        <h2 className="font-heading font-bold text-brand-primary-900 text-xl mb-2">
          ¡Cotización enviada!
        </h2>
        <p className="font-body text-neutral-600 text-sm mb-6 leading-relaxed">
          Te contactaremos en menos de 24 horas.{' '}
          También puedes escribirnos directamente por WhatsApp.
        </p>
        <Button variant="whatsapp" href={WA_COTIZAR_HREF}>
          <WhatsAppIcon />
          Escríbenos por WhatsApp
        </Button>
      </div>
    )
  }

  const isLoading = formState === 'loading' || isSubmitting
  const vehiclesValue = watch('vehicles') ?? 1
  const ic = (hasError: boolean) =>
    `${inputBase} ${hasError ? 'border-error focus:ring-error' : 'border-neutral-300'}`

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

      {/* Honeypot anti-spam — invisible to humans, attractive to bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden opacity-0 pointer-events-none"
        {...register('website')}
      />

      <Field id="q-name" label="Nombre completo" error={errors.name?.message} required>
        <input
          id="q-name"
          type="text"
          autoComplete="name"
          placeholder="Tu nombre completo"
          aria-describedby={errors.name ? 'q-name-error' : undefined}
          aria-invalid={errors.name ? 'true' : undefined}
          disabled={isLoading}
          className={ic(!!errors.name)}
          {...register('name', {
            required: 'El nombre es requerido',
            validate: (v) => v.trim().length > 0 || 'El nombre es requerido',
          })}
        />
      </Field>

      <Field id="q-phone" label="Teléfono / WhatsApp" error={errors.phone?.message} required>
        <input
          id="q-phone"
          type="tel"
          autoComplete="tel"
          placeholder="987 654 321"
          aria-describedby={errors.phone ? 'q-phone-error' : undefined}
          aria-invalid={errors.phone ? 'true' : undefined}
          disabled={isLoading}
          className={ic(!!errors.phone)}
          {...register('phone', {
            required: 'El teléfono es requerido',
            pattern: {
              value: /^(\+?51)?9\d{8}$/,
              message: 'Ingresa un número peruano válido (Ej: 987654321)',
            },
          })}
        />
      </Field>

      <Field id="q-email" label="Email (opcional)" error={errors.email?.message}>
        <input
          id="q-email"
          type="email"
          autoComplete="email"
          placeholder="correo@ejemplo.com"
          aria-describedby={errors.email ? 'q-email-error' : undefined}
          aria-invalid={errors.email ? 'true' : undefined}
          disabled={isLoading}
          className={ic(!!errors.email)}
          {...register('email', {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Ingresa un email válido',
            },
          })}
        />
      </Field>

      <Field id="q-service" label="Servicio de interés" error={errors.service?.message} required>
        <select
          id="q-service"
          aria-describedby={errors.service ? 'q-service-error' : undefined}
          aria-invalid={errors.service ? 'true' : undefined}
          disabled={isLoading}
          className={ic(!!errors.service)}
          {...register('service', { required: 'Selecciona un servicio' })}
        >
          <option value="">Selecciona un servicio...</option>
          <option value="gps-vehicular">GPS Vehicular Particular</option>
          <option value="gps-flotas">GPS para Flotas</option>
          <option value="unidos-liberty">Unidos Liberty</option>
          <option value="dashcam-ia">Dashcam con IA</option>
          <option value="asesoria">No sé / Necesito asesoría</option>
        </select>
      </Field>

      <Field
        id="q-vehicles"
        label="Número de vehículos"
        error={errors.vehicles?.message}
        required
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setValue('vehicles', Math.max(1, vehiclesValue - 1), { shouldValidate: true })}
            disabled={isLoading}
            aria-label="Reducir número de vehículos"
            className="flex items-center justify-center w-11 h-11 flex-shrink-0 rounded-lg border border-neutral-300
                       text-lg text-neutral-600 bg-white hover:bg-neutral-50
                       transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            −
          </button>
          <input
            {...register('vehicles', {
              required: 'Indica el número de vehículos',
              min: { value: 1, message: 'Mínimo 1 vehículo' },
              valueAsNumber: true,
            })}
            id="q-vehicles"
            type="number"
            min={1}
            value={vehiclesValue}
            onChange={(e) => setValue('vehicles', e.target.valueAsNumber || 1, { shouldValidate: true })}
            aria-describedby={errors.vehicles ? 'q-vehicles-error' : undefined}
            aria-invalid={errors.vehicles ? 'true' : undefined}
            disabled={isLoading}
            className={`${ic(!!errors.vehicles)} text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
          />
          <button
            type="button"
            onClick={() => setValue('vehicles', vehiclesValue + 1, { shouldValidate: true })}
            disabled={isLoading}
            aria-label="Aumentar número de vehículos"
            className="flex items-center justify-center w-11 h-11 flex-shrink-0 rounded-lg border border-neutral-300
                       text-lg text-neutral-600 bg-white hover:bg-neutral-50
                       transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
      </Field>

      <Field id="q-message" label="Mensaje adicional (opcional)" error={errors.message?.message}>
        <textarea
          id="q-message"
          rows={4}
          maxLength={500}
          placeholder="Cuéntanos más sobre tu necesidad..."
          aria-describedby={errors.message ? 'q-message-error' : undefined}
          aria-invalid={errors.message ? 'true' : undefined}
          disabled={isLoading}
          className={`${ic(!!errors.message)} resize-none`}
          {...register('message', {
            maxLength: { value: 500, message: 'Máximo 500 caracteres' },
          })}
        />
      </Field>

      {formState === 'error' && serverError && (
        <p role="alert" className="text-sm text-error text-center">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full inline-flex items-center justify-center gap-2 min-h-[44px]
                   rounded-full bg-brand-primary-600 hover:bg-brand-primary-700
                   font-body font-medium text-base text-white px-6 py-3
                   transition-colors duration-200
                   focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-brand-primary-500 focus-visible:ring-offset-2
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          'Enviar cotización'
        )}
      </button>

      <p className="text-xs text-neutral-400 text-center">
        * Campos requeridos. Tu información está protegida.
      </p>

    </form>
  )
}
