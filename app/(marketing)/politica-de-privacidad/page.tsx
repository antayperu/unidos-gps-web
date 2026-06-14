import { Metadata } from 'next'
import { contact } from '@/content/site'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Unidos por GPS Perú',
  description:
    'Política de privacidad y tratamiento de datos personales de Unidos por GPS, conforme a la Ley N° 29733 de Protección de Datos Personales del Perú.',
  openGraph: {
    title: 'Política de Privacidad | Unidos por GPS Perú',
    description: 'Tratamiento de datos personales conforme a la Ley N° 29733.',
    type: 'website',
  },
}

export default function PoliticaDePrivacidadPage() {
  return (
    <article>

      {/* ── Hero ── */}
      <section
        aria-label="Política de Privacidad"
        className="bg-gradient-to-br from-brand-primary-900 to-brand-primary-700
                   py-12 px-5 lg:py-16 lg:px-10 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading font-extrabold text-white
                         text-[1.75rem] lg:text-[2.5rem] leading-tight mb-3">
            Política de Privacidad
          </h1>
          <p className="font-body text-white/70 text-sm lg:text-base">
            Última actualización: junio de 2026
          </p>
        </div>
      </section>

      {/* ── Contenido ── */}
      <section className="bg-white py-12 px-5 lg:py-16 lg:px-10">
        <div className="max-w-3xl mx-auto space-y-8 font-body text-neutral-700
                        text-sm lg:text-base leading-relaxed">

          <section aria-labelledby="seccion-responsable">
            <h2
              id="seccion-responsable"
              className="font-heading font-bold text-brand-primary-900 text-lg lg:text-xl mb-3"
            >
              1. Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de sus datos personales es{' '}
              <strong>Unidos por GPS</strong> (en adelante, &ldquo;la Empresa&rdquo;),
              con presencia en Lima, Perú, y contactable a través de:
            </p>
            <ul className="mt-3 space-y-1 list-none">
              <li>
                Correo electrónico:{' '}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-brand-primary-600 hover:underline"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                Teléfono / WhatsApp:{' '}
                <a
                  href={contact.phoneHref}
                  className="text-brand-primary-600 hover:underline"
                >
                  {contact.phone}
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="seccion-datos">
            <h2
              id="seccion-datos"
              className="font-heading font-bold text-brand-primary-900 text-lg lg:text-xl mb-3"
            >
              2. Datos que Recopilamos
            </h2>
            <p>
              Cuando usted completa el formulario de cotización en nuestro sitio web,
              recopilamos los siguientes datos:
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside marker:text-brand-primary-500">
              <li>Nombre completo</li>
              <li>Número de teléfono / WhatsApp</li>
              <li>Dirección de correo electrónico (opcional)</li>
              <li>Servicio de interés</li>
              <li>Número de vehículos</li>
              <li>Mensaje adicional (opcional)</li>
              <li>
                Dirección IP anonimizada (almacenada como hash SHA-256 únicamente con
                fines de prevención de spam; no es un dato personal identificable)
              </li>
            </ul>
            <p className="mt-3">
              No recopilamos datos sensibles según lo establecido en el Art. 13 de la
              Ley N° 29733.
            </p>
          </section>

          <section aria-labelledby="seccion-finalidad">
            <h2
              id="seccion-finalidad"
              className="font-heading font-bold text-brand-primary-900 text-lg lg:text-xl mb-3"
            >
              3. Finalidad del Tratamiento
            </h2>
            <p>
              Los datos recopilados se utilizan exclusivamente para:
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside marker:text-brand-primary-500">
              <li>
                Atender su solicitud de cotización y brindarle información sobre
                nuestros servicios de GPS vehicular.
              </li>
              <li>
                Contactarle por teléfono, WhatsApp o correo electrónico para
                responder a su consulta.
              </li>
            </ul>
            <p className="mt-3">
              Sus datos <strong>no serán cedidos, vendidos ni compartidos</strong> con
              terceros, salvo obligación legal expresa.
            </p>
          </section>

          <section aria-labelledby="seccion-base-legal">
            <h2
              id="seccion-base-legal"
              className="font-heading font-bold text-brand-primary-900 text-lg lg:text-xl mb-3"
            >
              4. Base Legal
            </h2>
            <p>
              El tratamiento de sus datos se realiza sobre la base del{' '}
              <strong>consentimiento del titular</strong>, otorgado libremente al
              completar y enviar el formulario de cotización, de conformidad con el
              artículo 13 de la{' '}
              <strong>Ley N° 29733 — Ley de Protección de Datos Personales</strong> del
              Perú y su Reglamento (D.S. N° 003-2013-JUS).
            </p>
          </section>

          <section aria-labelledby="seccion-almacenamiento">
            <h2
              id="seccion-almacenamiento"
              className="font-heading font-bold text-brand-primary-900 text-lg lg:text-xl mb-3"
            >
              5. Almacenamiento y Seguridad
            </h2>
            <p>
              Sus datos se almacenan en servidores en la nube con las siguientes
              medidas de seguridad:
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside marker:text-brand-primary-500">
              <li>Cifrado en tránsito mediante TLS/HTTPS.</li>
              <li>Cifrado en reposo en la base de datos.</li>
              <li>Acceso restringido exclusivamente al personal autorizado.</li>
            </ul>
            <p className="mt-3">
              Los datos se conservarán por un período máximo de{' '}
              <strong>24 meses</strong> desde su recopilación, o hasta que usted
              solicite su eliminación.
            </p>
          </section>

          <section aria-labelledby="seccion-derechos">
            <h2
              id="seccion-derechos"
              className="font-heading font-bold text-brand-primary-900 text-lg lg:text-xl mb-3"
            >
              6. Derechos del Titular (ARCO)
            </h2>
            <p>
              Conforme a la Ley N° 29733, usted tiene derecho a:
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside marker:text-brand-primary-500">
              <li>
                <strong>Acceso:</strong> conocer qué datos personales suyos tratamos.
              </li>
              <li>
                <strong>Rectificación:</strong> corregir datos inexactos o incompletos.
              </li>
              <li>
                <strong>Cancelación:</strong> solicitar la eliminación de sus datos.
              </li>
              <li>
                <strong>Oposición:</strong> oponerse al tratamiento de sus datos.
              </li>
            </ul>
            <p className="mt-3">
              Para ejercer cualquiera de estos derechos, envíe una solicitud a{' '}
              <a
                href={`mailto:${contact.email}`}
                className="text-brand-primary-600 hover:underline"
              >
                {contact.email}
              </a>{' '}
              indicando su nombre, número de teléfono registrado y el derecho que
              desea ejercer. Responderemos en un plazo máximo de 20 días hábiles.
            </p>
          </section>

          <section aria-labelledby="seccion-contacto">
            <h2
              id="seccion-contacto"
              className="font-heading font-bold text-brand-primary-900 text-lg lg:text-xl mb-3"
            >
              7. Contacto y Actualizaciones
            </h2>
            <p>
              Para cualquier consulta sobre esta política o sobre el tratamiento de sus
              datos, puede contactarnos en:
            </p>
            <ul className="mt-3 space-y-1 list-none">
              <li>
                Correo:{' '}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-brand-primary-600 hover:underline"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                Teléfono:{' '}
                <a
                  href={contact.phoneHref}
                  className="text-brand-primary-600 hover:underline"
                >
                  {contact.phone}
                </a>
              </li>
            </ul>
            <p className="mt-3">
              Esta política puede ser actualizada en cualquier momento. Los cambios
              serán publicados en esta misma página con la fecha de última actualización.
              Le recomendamos revisarla periódicamente.
            </p>
            <p className="mt-3 text-xs text-neutral-400 italic">
              Este documento es una base legal estándar. El titular de la empresa debe
              revisarlo y aprobarlo antes del lanzamiento público del sitio.
            </p>
          </section>

        </div>
      </section>

    </article>
  )
}
