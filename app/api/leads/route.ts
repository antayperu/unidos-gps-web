import { createHash } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase-server'
import { leadSchema } from '@/lib/validations'

export const runtime = 'nodejs'

const DEDUPE_WINDOW_MS = 60_000

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  return forwardedFor?.split(',')[0]?.trim() || realIp || 'unknown'
}

function hashIp(ip: string) {
  return createHash('sha256').update(ip).digest('hex')
}


export async function POST(request: NextRequest) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, message: 'El cuerpo de la solicitud no es JSON válido' },
      { status: 400 },
    )
  }

  const parsed = leadSchema.safeParse(payload)

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors

    return NextResponse.json(
      {
        ok: false,
        message: 'Revisa los campos del formulario',
        errors: fieldErrors,
      },
      { status: 400 },
    )
  }

  const lead = parsed.data
  const supabase = createServerClient()
  const duplicateSince = new Date(Date.now() - DEDUPE_WINDOW_MS).toISOString()

  const { data: duplicate, error: duplicateError } = await supabase
    .from('leads')
    .select('id')
    .eq('telefono', lead.phone)
    .gte('created_at', duplicateSince)
    .limit(1)
    .maybeSingle()

  if (duplicateError) {
    console.error('Lead duplicate check failed', duplicateError)

    return NextResponse.json(
      { ok: false, message: 'No pudimos procesar tu solicitud en este momento' },
      { status: 500 },
    )
  }

  if (duplicate) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Ya recibimos una cotización con este teléfono hace unos segundos',
      },
      { status: 429 },
    )
  }

  const { error: insertError } = await supabase.from('leads').insert({
    nombre: lead.name,
    telefono: lead.phone,
    email: lead.email,
    servicio: lead.service,
    num_vehiculos: lead.vehicles,
    mensaje: lead.message,
    ip_hash: hashIp(getClientIp(request)),
    source: 'web-form',
  })

  if (insertError) {
    console.error('Lead insert failed', insertError)

    return NextResponse.json(
      { ok: false, message: 'No pudimos guardar tu cotización en este momento' },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
