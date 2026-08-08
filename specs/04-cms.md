# Backlog Fase 2 — CMS con Sanity
_Versión 2.0 — 2026-08-08_

> **Contexto:** La versión 1.0 del sitio (tag `v1.0` en GitHub) está completa y lista para producción. Esta fase agrega un sistema de gestión de contenido (CMS) usando Sanity, que permite al equipo comercial actualizar imágenes, textos, testimonios, estadísticas y logos de forma autónoma — sin necesidad de un desarrollador.

> **Metodología:** Mismas reglas que `03-tasks.md`. Plan Mode + aprobación humana antes de escribir código. Una tarea atómica a la vez. Commits en formato `T##: descripción`.

> **Punto de retorno seguro:** En cualquier momento se puede hacer rollback a `v1.0` sin perder nada.

> **Decisión de arquitectura — Rutas de servicio:** Las 4 páginas de servicio individuales (`/servicios/gps-vehicular`, `/servicios/gps-flotas`, etc.) se convierten en una sola página dinámica (`/servicios/[slug]`). Esto permite al equipo comercial agregar nuevos servicios desde Sanity sin intervención del desarrollador. Las 4 páginas individuales se eliminan en T40.

> **Estrategia ISR vs Webhooks:** Se usa ISR (revalidación automática cada 60 segundos) en lugar de webhooks. Motivo: simplicidad de implementación sin API route adicional. Los cambios en Sanity se reflejan en el sitio en ≤60 segundos. Si en el futuro el cliente necesita actualizaciones instantáneas, se puede agregar un webhook de Sanity como mejora opcional.

> **Tipado TypeScript:** Los resultados de las consultas GROQ (el lenguaje de consultas propio de Sanity) se tipan manualmente con interfaces TypeScript definidas en `lib/sanity.types.ts`. Esto garantiza cumplimiento con `strict: true` del proyecto.

**Estados:**
- ⬜ Pendiente
- 🟦 En plan (plan escrito, pendiente aprobación)
- 🟨 En ejecución
- ✅ Aprobada
- ❌ Rechazada

---

## FASE 2 — CMS (Sanity)

---

## T39 — Setup Sanity: proyecto + Studio embebido
- **Prioridad:** P4
- **Estado:** ✅ Aprobada — 2026-08-08 · Project ID x4pxz0n1 · dataset production · CORS localhost:3000 + unidos-gps-web.vercel.app · Studio visible en /studio · build y lint pasan
- **Depende de:** —
- **Descripción:** Crear el proyecto en Sanity (sanity.io), instalar las dependencias necesarias (`next-sanity`, `@sanity/image-url`, `@sanity/client`), configurar `sanity.config.ts` e incrustar el panel de administración (Sanity Studio) en la ruta `/studio` del sitio. Agregar las variables de entorno necesarias. Configurar CORS para el dominio de producción `unidosporgps.pe` y el subdominio de Vercel `unidos-gps-web.vercel.app`. Declarar el dominio de imágenes de Sanity (`cdn.sanity.io`) en `next.config.ts` para que `next/image` pueda servir imágenes desde Sanity CDN.
- **Autenticación del Studio:** Sanity Studio v3 requiere una cuenta en sanity.io para poder editar contenido — esa es la capa de seguridad del panel. Sin cuenta Sanity, no se puede modificar nada.
- **Estrategia de cuenta durante el desarrollo:** El proyecto Sanity se crea en la cuenta del desarrollador durante toda la Fase 2. Sanity permite transferir la propiedad del proyecto a otra cuenta cuando el cliente esté listo. La transferencia se realiza en la entrega formal de la Fase 2, una vez que el cliente tenga su cuenta Sanity creada con su email corporativo (ej. `comercial@unidosporgps.pe`). Antes de T46, coordinar con el cliente la creación de su cuenta Sanity para que las pruebas finales se hagan ya con la cuenta definitiva.
- **Archivos permitidos:**
  - `sanity.config.ts` (crear)
  - `app/studio/[[...tool]]/page.tsx` (crear — acceso al Studio embebido)
  - `lib/sanity.client.ts` (crear — cliente de Sanity para Next.js)
  - `lib/sanity.image.ts` (crear — helper para URLs de imágenes desde Sanity CDN)
  - `lib/sanity.types.ts` (crear — interfaces TypeScript para todos los documentos de Sanity)
  - `next.config.ts` (actualizar — añadir `cdn.sanity.io` a `remotePatterns` de `next/image`)
  - `.env.example` (añadir `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN`)
  - `package.json` (añadir dependencias Sanity)
- **Criterios de aceptación:**
  - Acceder a `/studio` con cuenta Sanity muestra el panel de Sanity Studio.
  - `lib/sanity.client.ts` exporta un cliente configurado con project ID y dataset.
  - Las 3 variables de entorno están en `.env.example` con comentarios explicativos.
  - `next.config.ts` tiene `cdn.sanity.io` en `remotePatterns`.
  - CORS configurado para `unidosporgps.pe` y `unidos-gps-web.vercel.app` en el panel de Sanity.
  - Las variables de entorno están cargadas en el panel de Vercel (producción y preview).
  - `npm run build` pasa sin errores.
- **Verificación:** `npm run dev` + abrir `localhost:3000/studio` + confirmar panel visible con login de Sanity.

---

## T40 — Schema Sanity: Servicios
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T39
- **Descripción:** Definir el tipo de documento `service` en Sanity con todos los campos editables: título, slug, descripción corta (para la card en Home), descripción larga (para la página interna), imagen principal, lista de características (features), y texto del CTA. Convertir las 4 páginas de servicio individuales en una sola página dinámica `app/(marketing)/servicios/[slug]/page.tsx` que lee el slug desde la URL y busca el servicio correspondiente en Sanity. Usar `generateStaticParams` para pre-generar las 4 páginas en el build. Conectar también el componente `ServicesPreview` para que lea desde Sanity. Implementar ISR con revalidación cada 60 segundos.
- **Cambio estructural:** Las 4 páginas individuales se **eliminan** y son reemplazadas por la ruta dinámica `[slug]`. Las URLs del sitio no cambian — el visitante sigue entrando a `/servicios/gps-vehicular`, etc. Solo cambia la arquitectura interna del código.
- **Archivos permitidos:**
  - `sanity/schemas/service.ts` (crear — definición del tipo documento)
  - `sanity/schemas/index.ts` (crear — exportar todos los schemas)
  - `lib/sanity.queries.ts` (crear — queries GROQ para servicios)
  - `lib/sanity.types.ts` (actualizar — añadir interfaz `Service`)
  - `components/home/ServicesPreview.tsx` (actualizar — leer desde Sanity)
  - `components/services/ServicePage.tsx` (actualizar — recibir datos desde Sanity)
  - `app/(marketing)/servicios/[slug]/page.tsx` (crear — ruta dinámica con `generateStaticParams`)
  - `app/(marketing)/servicios/gps-vehicular/page.tsx` (eliminar)
  - `app/(marketing)/servicios/gps-flotas/page.tsx` (eliminar)
  - `app/(marketing)/servicios/unidos-liberty/page.tsx` (eliminar)
  - `app/(marketing)/servicios/dashcam-ia/page.tsx` (eliminar)
- **Criterios de aceptación:**
  - En Sanity Studio aparece la sección "Servicios" con los 4 servicios cargados.
  - Las URLs `/servicios/gps-vehicular`, `/servicios/gps-flotas`, `/servicios/unidos-liberty` y `/servicios/dashcam-ia` siguen funcionando correctamente (sin cambio visible para el visitante).
  - Modificar el título de un servicio en Studio → el sitio refleja el cambio en ≤60 segundos.
  - Las 4 páginas de servicio siguen funcionando correctamente a 360/768/1280px.
  - `npm run build` pasa sin errores.
- **Verificación:** Editar un servicio en Studio → esperar ≤60s → verificar cambio en el sitio. Verificar las 4 URLs de servicio en el browser.

---

## T41 — Schema Sanity: Testimonios
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T39
- **Descripción:** Definir el tipo de documento `testimonial` en Sanity con los campos: nombre del cliente, tipo de cliente (particular / flota), texto del testimonio, foto (opcional) y orden de aparición. Conectar el componente `Testimonials` para leer desde Sanity. El equipo comercial podrá agregar, editar y reordenar testimonios sin tocar código.
- **Archivos permitidos:**
  - `sanity/schemas/testimonial.ts` (crear)
  - `lib/sanity.queries.ts` (actualizar — añadir query de testimonios)
  - `lib/sanity.types.ts` (actualizar — añadir interfaz `Testimonial`)
  - `components/home/Testimonials.tsx` (actualizar — leer desde Sanity)
- **Criterios de aceptación:**
  - En Studio aparece la sección "Testimonios" con los 3 testimonios actuales cargados.
  - Agregar un nuevo testimonio en Studio → aparece en el sitio en ≤60 segundos.
  - El layout 1/2/3 columnas sigue funcionando correctamente.
  - `npm run build` pasa.
- **Verificación:** Agregar un 4to testimonio de prueba en Studio → verificar que aparece en el sitio.

---

## T42 — Schema Sanity: Estadísticas (StatsBand)
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T39
- **Descripción:** Definir un documento singleton `stats` en Sanity (solo existe uno, no se pueden crear múltiples) con los 4 campos de estadísticas: valor numérico, etiqueta descriptiva y sufijo (ej. "+", "%"). Conectar el componente `StatsBand` para leer desde Sanity. Cuando el cliente consiga las cifras reales, el equipo comercial las actualiza directamente en Studio sin necesidad de un desarrollador.
- **Archivos permitidos:**
  - `sanity/schemas/stats.ts` (crear — singleton)
  - `lib/sanity.queries.ts` (actualizar)
  - `lib/sanity.types.ts` (actualizar — añadir interfaz `Stats`)
  - `components/home/StatsBand.tsx` (actualizar — leer desde Sanity)
- **Criterios de aceptación:**
  - En Studio aparece la sección "Estadísticas" con los 4 campos editables.
  - Modificar un número en Studio → se refleja en la franja del sitio en ≤60 segundos.
  - La animación de contadores sigue funcionando después del cambio.
  - `npm run build` pasa.
- **Verificación:** Cambiar un valor numérico en Studio → verificar cambio en el sitio.

---

## T43 — Schema Sanity: Página Nosotros
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T39
- **Descripción:** Definir un documento singleton `nosotros` en Sanity con los campos: foto del equipo, texto de historia, misión, visión, valores (lista con ícono y texto), y año de fundación. Conectar la página `/nosotros` para leer desde Sanity los textos corporativos y la foto del equipo. **Nota importante:** Los logos de homologadoras (MTC, OSIPTEL, SUTRAN, OSINERGMIN) son un schema separado definido en T44 — este singleton solo gestiona textos corporativos y foto del equipo.
- **Archivos permitidos:**
  - `sanity/schemas/nosotros.ts` (crear — singleton)
  - `lib/sanity.queries.ts` (actualizar)
  - `lib/sanity.types.ts` (actualizar — añadir interfaz `Nosotros`)
  - `app/(marketing)/nosotros/page.tsx` (actualizar — textos y foto desde Sanity)
- **Criterios de aceptación:**
  - En Studio aparece la sección "Nosotros" con todos los campos de texto y foto editables.
  - Cambiar la foto del equipo en Studio → se refleja en `/nosotros` en ≤60 segundos.
  - La página sigue correcta a 360/768/1280px.
  - `npm run build` pasa.
- **Verificación:** Cambiar la foto del equipo en Studio → verificar cambio en `/nosotros`.

---

## T44 — Schema Sanity: Logos de homologadoras
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T39
- **Descripción:** Definir el tipo de documento `homologator` en Sanity con los campos: nombre de la entidad, logo (imagen con transparencia) y orden de aparición. Conectar el componente `HomologatorCard` y la sección correspondiente en la página `/nosotros` para leer desde Sanity. El equipo comercial podrá subir los logos pendientes de MTC, OSIPTEL y SUTRAN directamente desde Studio, sin necesidad de un desarrollador.
- **Archivos permitidos:**
  - `sanity/schemas/homologator.ts` (crear)
  - `lib/sanity.queries.ts` (actualizar)
  - `lib/sanity.types.ts` (actualizar — añadir interfaz `Homologator`)
  - `components/ui/HomologatorCard.tsx` (actualizar — recibir URL de imagen desde Sanity CDN)
  - `app/(marketing)/nosotros/page.tsx` (actualizar — logos desde Sanity)
- **Criterios de aceptación:**
  - En Studio aparece la sección "Homologadoras" con OSINERGMIN ya cargado.
  - Subir el logo de MTC en Studio → aparece en `/nosotros` en ≤60 segundos.
  - Los logos se renderizan con fondo transparente correctamente.
  - `npm run build` pasa.
- **Verificación:** Subir un logo de prueba en Studio → verificar que aparece en Nosotros.

---

## T45 — Migración de contenido actual a Sanity
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T40, T41, T42, T43, T44
- **Descripción:** Cargar manualmente todo el contenido actual del sitio en Sanity Studio: los 4 servicios con sus textos e imágenes, los 3 testimonios de placeholder, las 4 estadísticas actuales, el contenido de Nosotros (historia, misión, visión, valores, foto del equipo), y el logo de OSINERGMIN. La migración es entrada manual en el panel de Studio — no se usan scripts automáticos. Una vez migrado y verificado visualmente, se eliminan los archivos de contenido locales del repositorio.
- **Archivos a eliminar tras la migración:**
  - `content/services.ts` → reemplazado por Sanity
  - `content/testimonials.ts` → reemplazado por Sanity
  - `content/servicePages.ts` → reemplazado por Sanity
- **Archivos que NO se tocan:**
  - `content/site.ts` → permanece en el repositorio (contacto, navegación, redes sociales — no es contenido editorial)
- **Criterios de aceptación:**
  - El sitio se ve visualmente idéntico a v1.0 con datos viniendo desde Sanity.
  - Los 3 archivos de contenido locales eliminados ya no son importados en ningún componente.
  - Todas las páginas pasan `npm run build` sin errores.
  - Lighthouse Performance ≥ 95 tras la migración.
- **Verificación:** Revisión visual completa a 360/768/1280px en todas las páginas.

---

## T46 — Validación final y smoke test CMS
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T45
- **Descripción:** Prueba completa del flujo de autonomía del equipo comercial: editar un servicio, agregar un testimonio, cambiar una estadística, subir un logo, cambiar la foto de Nosotros — todo desde Studio sin ayuda del desarrollador. Verificar que cada cambio aparece en el sitio en ≤60 segundos. Ejecutar Lighthouse para confirmar que las métricas no bajaron tras la integración con Sanity CDN. Antes de esta tarea, el cliente debe haber creado las cuentas Sanity para el equipo comercial.
- **Criterios de aceptación:**
  - Un usuario no-técnico puede completar los 5 flujos anteriores sin ayuda.
  - Lighthouse Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO 100.
  - Sin errores de consola en ninguna página.
  - `npm run build` y `npm run lint` pasan sin errores.
- **Transferencia de cuenta Sanity:** Antes o durante esta tarea, el cliente debe haber creado su cuenta en sanity.io con su email corporativo. El desarrollador transfiere la propiedad del proyecto Sanity desde su cuenta a la del cliente. Tras la transferencia, el desarrollador sigue como miembro administrador del proyecto durante el periodo de garantía.
- **Verificación:** Sesión de prueba con el equipo comercial antes de la aprobación final.

---

## T47 — Guía de usuario para el equipo comercial
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T46
- **Descripción:** Crear una guía visual en PDF (con capturas de pantalla del Studio real, tomadas post-T46) que explique paso a paso cómo realizar cada tarea de actualización de contenido. Lenguaje simple, sin términos técnicos. Incluir: cómo acceder al panel, cómo subir una imagen, cómo editar un servicio, cómo agregar un testimonio, cómo actualizar las estadísticas.
- **Entregable:**
  - `docs/guia-equipo-comercial.pdf`
- **Criterios de aceptación:**
  - Un miembro del equipo comercial puede seguir la guía sin asistencia técnica.
  - La guía cubre los 5 flujos de T46.
  - Revisada y aprobada por el cliente antes de considerarse completa.
- **Verificación:** Sesión de entrega con el equipo comercial.

---

## Resumen de costos Fase 2

| Servicio | Plan recomendado | Costo mensual |
|---|---|---|
| Sanity CMS | Free (hasta 3 usuarios, 10 GB) | $0 |
| Vercel | Pro (requerido para uso comercial) | $20 USD |
| Supabase | Free | $0 |
| Resend (email leads) | Free (3,000 emails/mes) | $0 |
| **Total** | | **$20 USD/mes** |

> El plan gratuito de Sanity es suficiente para Unidos por GPS. Si en el futuro el equipo crece a más de 3 editores o el volumen de imágenes supera 10 GB, el plan Growth de Sanity cuesta $15 USD/mes adicionales.
