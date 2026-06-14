import { Resend } from 'resend'
import type { LeadInput } from '@/lib/validations'

const SERVICE_LABELS: Record<string, string> = {
  'gps-vehicular': 'GPS Vehicular Particular',
  'gps-flotas': 'GPS para Flotas',
  'unidos-liberty': 'Unidos Liberty',
  'dashcam-ia': 'Dashcam con IA',
  'asesoria': 'No sé / Necesito asesoría',
}

function buildEmailHtml(lead: LeadInput): string {
  const timestamp = new Date().toLocaleString('es-PE', {
    timeZone: 'America/Lima',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const rows: [string, string | null | undefined][] = [
    ['Nombre', lead.name],
    ['Teléfono / WhatsApp', lead.phone],
    ['Email', lead.email || '—'],
    ['Servicio solicitado', SERVICE_LABELS[lead.service] ?? lead.service],
    ['Nº de vehículos', String(lead.vehicles)],
    ['Mensaje', lead.message || '—'],
    ['Fecha y hora (Lima)', timestamp],
  ]

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;background:#f4f6f8;font-weight:600;color:#374151;white-space:nowrap;border-bottom:1px solid #e5e7eb;">${label}</td>
          <td style="padding:10px 14px;color:#111827;border-bottom:1px solid #e5e7eb;">${value}</td>
        </tr>`,
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:system-ui,sans-serif;">
  <div style="max-width:560px;margin:32px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08);">
    <div style="background:#1e3a5f;padding:24px 28px;">
      <p style="margin:0;color:#fff;font-size:20px;font-weight:700;">Unidos por GPS</p>
      <p style="margin:4px 0 0;color:#93c5fd;font-size:14px;">Nuevo lead de cotización</p>
    </div>
    <div style="padding:24px 28px;">
      <p style="margin:0 0 20px;color:#374151;font-size:15px;">
        Alguien acaba de enviar el formulario de cotización. Datos del contacto:
      </p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
        ${tableRows}
      </table>
      <div style="margin-top:24px;text-align:center;">
        <a href="https://wa.me/${lead.phone.replace(/^\+?51/, '51')}?text=Hola%20${encodeURIComponent(lead.name)}%2C%20te%20contactamos%20de%20Unidos%20por%20GPS%20por%20tu%20cotizaci%C3%B3n"
           style="display:inline-block;background:#25d366;color:#fff;font-weight:600;text-decoration:none;padding:12px 24px;border-radius:100px;font-size:14px;">
          Responder por WhatsApp
        </a>
      </div>
    </div>
    <div style="background:#f4f6f8;padding:14px 28px;text-align:center;">
      <p style="margin:0;color:#9ca3af;font-size:12px;">Este email fue generado automáticamente por unidosporgps.pe</p>
    </div>
  </div>
</body>
</html>`
}

export async function sendLeadEmail(lead: LeadInput): Promise<{ ok: boolean; error?: unknown }> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { ok: false, error: 'RESEND_API_KEY not set' }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Unidos por GPS <noreply@unidosporgps.pe>',
      to: ['comercial@unidosporgps.pe'],
      subject: `Nuevo lead — ${lead.name} (${SERVICE_LABELS[lead.service] ?? lead.service})`,
      html: buildEmailHtml(lead),
    })

    if (error) {
      return { ok: false, error }
    }

    return { ok: true }
  } catch (err) {
    return { ok: false, error: err }
  }
}
