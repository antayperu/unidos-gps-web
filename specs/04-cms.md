# Backlog Fase 4 — CMS con Sanity
_Versión 1.0 — 2026-08-08_

> **Contexto:** La versión 1.0 del sitio (tag `v1.0` en GitHub) está completa y lista para producción. Esta fase agrega un sistema de gestión de contenido (CMS) usando Sanity, que permite al equipo comercial actualizar imágenes, textos, testimonios, estadísticas y logos de forma autónoma — sin necesidad de un desarrollador.

> **Metodología:** Mismas reglas que `03-tasks.md`. Plan Mode + aprobación humana antes de escribir código. Una tarea atómica a la vez. Commits en formato `T##: descripción`.

> **Punto de retorno seguro:** En cualquier momento se puede hacer rollback a `v1.0` sin perder nada.

**Estados:**
- ⬜ Pendiente
- 🟦 En plan (plan escrito, pendiente aprobación)
- 🟨 En ejecución
- ✅ Aprobada
- ❌ Rechazada

---

## FASE 4 — CMS (Sanity)

---

## T39 — Setup Sanity: proyecto + Studio embebido
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** —
- **Descripción:** Crear el proyecto en Sanity (sanity.io), instalar las dependencias necesarias (`next-sanity`, `@sanity/image-url`, `@sanity/client`), configurar `sanity.config.ts` e incrustar el panel de administración (Sanity Studio) en la ruta `/studio` del sitio. Agregar las variables de entorno necesarias. Configurar CORS para el dominio de producción `unidosporgps.pe`.
- **Archivos permitidos:**
  - `sanity.config.ts` (crear)
  - `app/studio/[[...tool]]/page.tsx` (crear — acceso al Studio)
  - `.env.example` (añadir `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN`)
  - `lib/sanity.client.ts` (crear — cliente de Sanity para Next.js)
  - `lib/sanity.image.ts` (crear — helper para URLs de imágenes desde Sanity CDN)
  - `package.json` (añadir dependencias Sanity)
- **Criterios de aceptación:**
  - Acceder a `/studio` con credenciales muestra el panel de Sanity Studio.
  - `lib/sanity.client.ts` exporta un cliente configurado con project ID y dataset.
  - Las 3 variables de entorno están en `.env.example` con comentarios explicativos.
  - `npm run build` pasa sin errores.
- **Verificación:** `npm run dev` + abrir `localhost:3000/studio` + confirmar panel visible.

---

## T40 — Schema Sanity: Servicios
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T39
- **Descripción:** Definir el tipo de documento `service` en Sanity con todos los campos editables: título, slug, descripción corta (para la card en Home), descripción larga (para la página interna), imagen principal, lista de características (features), y texto del CTA. Conectar los componentes `ServicesPreview` y `ServicePage` para que lean desde Sanity en vez de los archivos locales actuales. Implementar ISR (revalidación cada 60 segundos) para que los cambios en Sanity aparezcan en el sitio sin necesitar un nuevo deploy.
- **Archivos permitidos:**
  - `sanity/schemas/service.ts` (crear — definición del tipo documento)
  - `sanity/schemas/index.ts` (crear o actualizar — exportar todos los schemas)
  - `lib/sanity.queries.ts` (crear — queries GROQ para servicios)
  - `components/home/ServicesPreview.tsx` (actualizar — leer desde Sanity)
  - `components/services/ServicePage.tsx` (actualizar — leer desde Sanity)
  - `app/(marketing)/servicios/[slug]/page.tsx` (actualizar — datos desde Sanity)
- **Criterios de aceptación:**
  - En Sanity Studio aparece la sección "Servicios" con los 4 servicios cargados.
  - Modificar el título de un servicio en Studio → el sitio refleja el cambio en ≤60 segundos.
  - Las 4 páginas de servicio siguen funcionando correctamente a 360/768/1280px.
  - `npm run build` pasa.
- **Verificación:** Editar un servicio en Studio → esperar ≤60s → verificar cambio en el sitio.

---

## T41 — Schema Sanity: Testimonios
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T39
- **Descripción:** Definir el tipo de documento `testimonial` en Sanity con los campos: nombre del cliente, tipo de cliente (particular / flota), texto del testimonio, foto (opcional) y orden de aparición. Conectar el componente `Testimonials` para leer desde Sanity. El equipo comercial podrá agregar, editar y reordenar testimonios sin tocar código.
- **Archivos permitidos:**
  - `sanity/schemas/testimonial.ts` (crear)
  - `lib/sanity.queries.ts` (actualizar — añadir query de testimonios)
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
- **Descripción:** Definir un documento singleton `stats` en Sanity (solo existe uno, no se pueden crear múltiples) con los 4 campos de estadísticas: valor numérico, etiqueta descriptiva y sufijo (ej. "+", "%"). Conectar el componente `StatsBand` para leer desde Sanity. Cuando el cliente consiga las cifras reales, el equipo comercial las actualiza directamente en Studio.
- **Archivos permitidos:**
  - `sanity/schemas/stats.ts` (crear — singleton)
  - `lib/sanity.queries.ts` (actualizar)
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
- **Descripción:** Definir un documento singleton `nosotros` en Sanity con los campos: foto del equipo, texto de historia, misión, visión, valores (lista), y año de fundación. Conectar la página `/nosotros` para leer desde Sanity. Permite actualizar la foto del equipo y los textos corporativos sin código.
- **Archivos permitidos:**
  - `sanity/schemas/nosotros.ts` (crear — singleton)
  - `lib/sanity.queries.ts` (actualizar)
  - `app/(marketing)/nosotros/page.tsx` (actualizar — datos desde Sanity)
- **Criterios de aceptación:**
  - En Studio aparece la sección "Nosotros" con todos los campos editables.
  - Cambiar la foto del equipo en Studio → se refleja en `/nosotros` en ≤60 segundos.
  - La página sigue correcta a 360/768/1280px.
  - `npm run build` pasa.
- **Verificación:** Cambiar la foto del equipo en Studio → verificar cambio en `/nosotros`.

---

## T44 — Schema Sanity: Logos de homologadoras
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T39
- **Descripción:** Definir el tipo de documento `homologator` en Sanity con los campos: nombre de la entidad, logo (imagen con transparencia) y orden de aparición. Conectar el componente de logos en la página Nosotros para leer desde Sanity. El equipo comercial podrá subir los logos pendientes de MTC, OSIPTEL y SUTRAN directamente desde Studio, sin necesidad de un desarrollador.
- **Archivos permitidos:**
  - `sanity/schemas/homologator.ts` (crear)
  - `lib/sanity.queries.ts` (actualizar)
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
- **Descripción:** Cargar todo el contenido actual del sitio en Sanity Studio: los 4 servicios con sus textos e imágenes, los 3 testimonios de placeholder, las 4 estadísticas actuales, el contenido de Nosotros, y el logo de OSINERGMIN. Una vez migrado, verificar que el sitio se ve idéntico a la versión actual con los datos viniendo de Sanity.
- **Archivos a eliminar tras la migración:**
  - `content/services.ts` → reemplazado por Sanity
  - `content/testimonials.ts` → reemplazado por Sanity
  - `content/servicePages.ts` → reemplazado por Sanity
- **Criterios de aceptación:**
  - El sitio se ve visualmente idéntico a v1.0 con datos desde Sanity.
  - Los archivos de contenido locales ya no son necesarios y se eliminan.
  - Todas las páginas pasan `npm run build` sin errores.
  - Lighthouse Performance ≥ 95 tras la migración (las imágenes ahora sirven desde Sanity CDN).
- **Verificación:** Revisión visual completa a 360/768/1280px en todas las páginas.

---

## T46 — Validación final y smoke test CMS
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T45
- **Descripción:** Prueba completa del flujo de autonomía del equipo comercial: editar un servicio, agregar un testimonio, cambiar una estadística, subir un logo, cambiar la foto de Nosotros — todo desde Studio. Verificar que cada cambio aparece en el sitio sin intervención del desarrollador. Ejecutar Lighthouse para confirmar que las métricas no bajaron tras la integración con Sanity CDN.
- **Criterios de aceptación:**
  - Un usuario no-técnico puede completar los 5 flujos anteriores sin ayuda.
  - Lighthouse Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO 100.
  - Sin errores de consola en ninguna página.
  - `npm run build` y `npm run lint` pasan sin errores.
- **Verificación:** Sesión de prueba con el equipo comercial antes de la aprobación final.

---

## T47 — Guía de usuario para el equipo comercial
- **Prioridad:** P4
- **Estado:** ⬜ Pendiente
- **Depende de:** T46
- **Descripción:** Crear una guía visual en PDF (con capturas de pantalla del Studio real) que explique paso a paso cómo realizar cada tarea de actualización de contenido. Lenguaje simple, sin términos técnicos. Incluir: cómo acceder al panel, cómo subir una imagen, cómo editar un servicio, cómo agregar un testimonio, cómo actualizar las estadísticas.
- **Entregable:**
  - `docs/guia-equipo-comercial.pdf`
- **Criterios de aceptación:**
  - Un miembro del equipo comercial puede seguir la guía sin asistencia técnica.
  - La guía cubre los 5 flujos de T46.
  - Revisada y aprobada por el cliente antes de considerarse completa.
- **Verificación:** Sesión de entrega con el equipo comercial.

---

## Resumen de costos Fase 4

| Servicio | Plan recomendado | Costo mensual |
|---|---|---|
| Sanity CMS | Free (hasta 3 usuarios, 10 GB) | $0 |
| Vercel | Pro (requerido para uso comercial) | $20 USD |
| Supabase | Free | $0 |
| Resend (email leads) | Free (3,000 emails/mes) | $0 |
| **Total** | | **$20 USD/mes** |

> El plan gratuito de Sanity es suficiente para Unidos por GPS. Si en el futuro el equipo crece a más de 3 editores o el volumen de imágenes supera 10 GB, el plan Growth de Sanity cuesta $15 USD/mes adicionales.
