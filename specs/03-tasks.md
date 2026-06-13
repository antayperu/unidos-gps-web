# Backlog de Tareas — Unidos por GPS Web
_Versión 1.0 — 2026-06-11_

> **Uso:** Este archivo es el backlog vivo. Actualizar el estado de cada tarea inmediatamente tras completarla o rechazarla. Una sola tarea en estado 🟨 a la vez. Toda ejecución en Plan Mode con aprobación humana antes de escribir archivos.

**Estados:**
- ⬜ Pendiente
- 🟦 En plan (plan escrito, pendiente aprobación)
- 🟨 En ejecución
- ✅ Aprobada
- ❌ Rechazada

---

## FASE P0 — Fundaciones

---

## T01 — Extracción y documentación de marca
- **Prioridad:** P0
- **Estado:** ✅ Aprobada
- **Depende de:** —
- **Descripción:** Analizar las imágenes en `design/referencia-actual/` y documentar la identidad visual de marca en `design/brand/brand.md`. Incluye: colores exactos (hex con cuentagotas sobre logo.png), escala de tints/shades, uso del logo (positivo/negativo), tipografía actual del sitio Odoo (si identificable), tono del copy. Este archivo es la fuente de verdad para todos los tokens de diseño.
- **Archivos permitidos:**
  - `design/brand/brand.md` (crear)
- **Criterios de aceptación:**
  - brand.md existe y contiene hex exacto del color primario de marca (del logo).
  - brand.md contiene hex exacto del color acento (si existe en el logo o sitio actual).
  - brand.md contiene reglas de uso del logo positivo y negativo.
  - brand.md documenta si el naranja del nav es color de marca o solo UI funcional.
  - Todos los tokens de `specs/02-design.md §1.1` tienen sus valores "~aproximado" reemplazados por valores confirmados en brand.md.
- **Verificación:** Leer `design/brand/brand.md` y confirmar que ningún valor dice "~aproximado" o "confirmar en T01".

---

## T02 — Scaffolding de Next.js + TypeScript + Tailwind
- **Prioridad:** P0
- **Estado:** ✅ Aprobada
- **Depende de:** T01
- **Descripción:** Inicializar el proyecto Next.js 14+ con App Router, TypeScript strict, Tailwind CSS, ESLint y Prettier. Configurar el alias `@/` en `tsconfig.json`. Crear `.env.example` con las keys de Supabase vacías. Actualizar `.gitignore`.
- **Archivos permitidos:**
  - `package.json`
  - `tsconfig.json`
  - `next.config.ts`
  - `tailwind.config.ts` (configuración base, tokens se agregan en T03)
  - `postcss.config.js`
  - `.eslintrc.json`
  - `.prettierrc`
  - `.env.example`
  - `.gitignore` (actualizar)
  - `app/globals.css`
  - `app/layout.tsx` (root layout mínimo)
  - `app/page.tsx` (placeholder "Próximamente")
- **Criterios de aceptación:**
  - `npm run dev` inicia sin errores.
  - `npm run build` completa sin errores ni warnings de TypeScript.
  - `npm run lint` pasa sin errores.
  - `tsconfig.json` tiene `"strict": true` y path alias `"@/*": ["./*"]`.
  - `.env.example` tiene las 3 variables de Supabase con valores vacíos y comentarios.
  - La página en `localhost:3000` muestra algo (aunque sea placeholder).
- **Verificación:** `npm run build && npm run lint`

---

## T03 — Design tokens en Tailwind config
- **Prioridad:** P0
- **Estado:** ✅ Aprobada
- **Depende de:** T01, T02
- **Descripción:** Implementar todos los design tokens de `specs/02-design.md §1` en `tailwind.config.ts`: paleta de colores completa (usando los hex confirmados de T01), fuentes Google (Plus Jakarta Sans + Inter via `next/font`), escala tipográfica fluida con `clamp()`, border radii, sombras personalizadas. Documentar las variables CSS en `globals.css`.
- **Archivos permitidos:**
  - `tailwind.config.ts`
  - `app/globals.css`
  - `app/layout.tsx` (añadir carga de fonts con `next/font/google`)
- **Criterios de aceptación:**
  - Las clases `text-brand-primary-600`, `text-brand-accent-500`, `font-heading`, `font-body` existen y funcionan.
  - La escala tipográfica fluida usa `clamp()` (verificar en DevTools que los valores son correctos).
  - `npm run build` pasa sin errores.
  - Crear un componente de prueba temporal que use los tokens y verificarlo visualmente a 360/768/1280px; luego eliminarlo.
- **Verificación:** `npm run build && npm run lint`

---

## T04 — Componentes base Header y Footer
- **Prioridad:** P0
- **Estado:** ✅ Aprobada
- **Depende de:** T02, T03
- **Descripción:** Construir `Header` y `Footer` completos con contenido real de la marca. Header: logo, navegación principal, teléfono de emergencia clicable, menú hamburguesa para móvil con Framer Motion. Footer: logo negativo, links, contacto, redes sociales, copyright. Ambos integrados en `app/(marketing)/layout.tsx`.
- **Archivos permitidos:**
  - `components/layout/Header.tsx`
  - `components/layout/Footer.tsx`
  - `app/(marketing)/layout.tsx` (crear)
  - `app/(marketing)/page.tsx` (placeholder mínimo)
  - `content/site.ts` (datos de contacto, links de nav)
  - `public/images/logo.png` (copiar desde design/referencia-actual/)
  - `public/images/logo-negativo.webp` (copiar desde design/referencia-actual/)
- **Criterios de aceptación:**
  - Header visible y funcional a 360px: logo, menú hamburguesa (abre/cierra suave).
  - Header visible y funcional a 768px: logo + navegación principal horizontal.
  - Header visible y funcional a 1280px: logo + nav + teléfono de emergencia.
  - Footer muestra logo negativo, 3 columnas (desktop) / columna (móvil), todos los links.
  - Teléfono de emergencia es `<a href="tel:+51933452214">` clicable.
  - Sin scroll horizontal a ningún breakpoint.
  - Touch targets ≥ 44×44px en todos los elementos interactivos.
  - `npm run build` y `npm run lint` pasan sin errores.
- **Verificación:** `npm run dev` + inspección visual en 360/768/1280px (DevTools responsive mode)

---

## T05 — Setup GitHub + Vercel + variables de entorno
- **Prioridad:** P0
- **Estado:** ✅ Aprobada
- **Depende de:** T02
- **Descripción:** Configurar el repositorio en GitHub (rama main como default), conectar con Vercel para preview deploys automáticos en PRs. Configurar las variables de entorno en el panel de Vercel (SUPABASE_SERVICE_ROLE_KEY, etc.). Verificar que el primer deploy de preview funciona.
- **Archivos permitidos:**
  - Ningún archivo de código. Solo configuración en GitHub y Vercel (operación externa).
- **Criterios de aceptación:**
  - Repositorio accesible en GitHub con rama `main`.
  - Push a `main` dispara deploy automático en Vercel.
  - URL de preview de Vercel accesible y muestra el placeholder de la Home.
  - Variables de entorno configuradas en Vercel (sin valores reales hasta T22).
- **Verificación:** Abrir la URL de Vercel en el browser.

---

## T32 — Sistema de primitivos de UI
- **Prioridad:** P0
- **Estado:** ✅ Aprobada
- **Depende de:** T03
- **Descripción:** Construir los componentes primitivos de UI reutilizables que consumirán todas las secciones T07–T14: `Button` (variantes `primary`, `secondary`, `whatsapp`), `Container` (wrapper de ancho máximo con padding responsive), y `SectionHeading` (título + subtítulo de sección con jerarquía tipográfica). Instalar y configurar `lucide-react` como librería de íconos del proyecto. Ninguna sección de la Home debe recrear estos primitivos.
- **Archivos permitidos:**
  - `components/ui/Button.tsx`
  - `components/ui/Container.tsx`
  - `components/ui/SectionHeading.tsx`
  - `package.json` (añadir `lucide-react`)
- **Criterios de aceptación:**
  - `Button` variante `primary`: fondo `brand-primary-600`, texto blanco, hover `brand-primary-700`.
  - `Button` variante `secondary`: borde `brand-primary-600`, fondo transparente, texto `brand-primary-600`.
  - `Button` variante `whatsapp`: fondo `#25D366`, texto blanco, hover `#128C7E`.
  - Todas las variantes de `Button` tienen `min-h-[44px]` y `min-w-[44px]` para touch targets.
  - `Container` aplica `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
  - `SectionHeading` renderiza `<h2>` con `font-heading` y un subtítulo `<p>` opcional con `font-body`.
  - `lucide-react` importable y tipado sin errores en TypeScript strict.
  - Inspección visual de las 3 variantes de `Button` a 360/768/1280px sin desbordamiento.
  - `npm run build` y `npm run lint` pasan sin errores.
- **Verificación:** `npm run build && npm run lint` + inspección visual de las 3 variantes de `Button` en DevTools a 360/768/1280px

---

## T36 — Páginas not-found y error con marca
- **Prioridad:** P0
- **Estado:** ✅ Aprobada
- **Depende de:** T04, T32
- **Descripción:** Crear las páginas de error del App Router de Next.js con identidad visual de marca: `not-found.tsx` (error 404) con mensaje amigable en español, logo y CTA para volver a la Home; `error.tsx` (error de runtime) con mensaje genérico y botón para reintentar. Ambas usan los primitivos de UI (T32) y el layout de marketing.
- **Archivos permitidos:**
  - `app/(marketing)/not-found.tsx`
  - `app/(marketing)/error.tsx`
- **Criterios de aceptación:**
  - Navegar a una ruta inexistente muestra `not-found.tsx` con logo, mensaje en español y `Button` variante `primary` con texto "Volver al inicio".
  - `error.tsx` incluye `'use client'` y recibe la prop `reset: () => void` de Next.js para reintentar.
  - Ambas páginas son correctas a 360/768/1280px sin scroll horizontal.
  - `<h1>` presente y descriptivo en ambas; sin salto de niveles de heading.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + navegar a `/ruta-inexistente` + verificar renderizado a 360/768/1280px

---

## FASE P1 — Mockup Visual

---

## T06 — Mockup HTML estático de Home (móvil + desktop)
- **Prioridad:** P1
- **Estado:** ✅ Completado — aprobado por cliente 2026-06-13
- **Depende de:** T01, T03
- **Descripción:** Crear dos archivos HTML estáticos con CSS inline/embedded que representen fielmente el diseño visual de la Home completa: `home-mobile.html` (360px) y `home-desktop.html` (1280px). Usar los design tokens de `specs/02-design.md`. Incluir todas las secciones: Hero, StatsBand, PainPoint, ServicesPreview, HowItWorks, Testimonials, HomeCTA. Usar imágenes placeholder (no las finales). **El objetivo es obtener aprobación visual ANTES de construir componentes React.**
- **Archivos permitidos:**
  - `design/mockups/home-mobile.html`
  - `design/mockups/home-desktop.html`
- **Criterios de aceptación:**
  - Al abrir `home-mobile.html` en browser a 360px se ven todas las secciones, sin scroll horizontal.
  - Al abrir `home-desktop.html` en browser a 1280px se ven todas las secciones con layout de escritorio.
  - Los colores coinciden exactamente con la paleta documentada en `design/brand/brand.md`.
  - Las fuentes (Plus Jakarta Sans + Inter) cargan desde Google Fonts.
  - El stepper muestra layout horizontal en desktop y vertical en móvil.
  - Todas las secciones oscuras y claras alternan correctamente.
  - Los placeholders de `[DATO REAL PENDIENTE]` son visibles (texto de placeholder realista).
- **Verificación:** Abrir ambos archivos en Chrome/Edge. Inspección visual completa por el cliente antes de aprobar la siguiente fase.

> ⚠️ **GATE:** Este mockup requiere aprobación explícita del cliente antes de iniciar T07. No se construyen componentes React hasta que el diseño visual sea aprobado.

---

## FASE P2 — Construcción de la Home (sección por sección)

---

## T07 — Sección Hero
- **Prioridad:** P2
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T04, T06, T32
- **Descripción:** Construir el componente `Hero` con imagen de fondo full-width + overlay de gradiente navy, headline H1, sub-headline, y dos CTAs (WhatsApp primario + "Ver servicios" secundario). La imagen hero usa `next/image` con `priority`. Animación de entrada sutil con Framer Motion.
- **Archivos permitidos:**
  - `components/home/Hero.tsx`
  - `public/images/hero-bg.webp` (placeholder de alta resolución)
  - `app/(marketing)/page.tsx` (añadir Hero)
- **Criterios de aceptación:**
  - Hero visible a 360px: headline legible, CTAs en columna, sin overflow.
  - Hero visible a 768px: layout intermedio.
  - Hero visible a 1280px: imagen de fondo, headline grande, CTAs en fila.
  - `next/image` con `priority={true}` en la imagen de fondo.
  - Contraste del texto sobre el overlay ≥ 4.5:1 (verificar en DevTools accessibility).
  - Animación fade-in del contenido al cargar.
  - `prefers-reduced-motion`: animación reducida a opacidad simple.
  - `npm run build` pasa sin errores.
- **Verificación:** `npm run dev` + inspección visual en 360/768/1280px

---

## T08 — Sección StatsBand
- **Prioridad:** P2
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T07, T32
- **Descripción:** Construir el componente `StatsBand` con las 4 estadísticas confirmadas. Animación de contador numérico al entrar en viewport con Framer Motion. Grid 2×2 en móvil, 4 columnas en desktop.
- **Archivos permitidos:**
  - `components/home/StatsBand.tsx`
  - `app/(marketing)/page.tsx` (añadir StatsBand)
- **Criterios de aceptación:**
  - Las 4 stats se muestran correctamente a 360/768/1280px.
  - Grid 2×2 en móvil (≤767px), 4 columnas en tablet+.
  - Animación de contador se activa al hacer scroll hasta la sección.
  - `prefers-reduced-motion`: sin animación de contador (valores aparecen directamente).
  - Touch targets de iconos ≥ 44×44px (si hay iconos interactivos).
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + scroll test en 360px y 1280px

---

## T09 — Sección PainPoint
- **Prioridad:** P2
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T04, T32
- **Descripción:** Construir el componente `PainPoint` — sección de fondo oscuro (`brand-primary-900`) con dos columnas: pain points del robo (izquierda) y solución de protección (derecha). En móvil se apilan. Animación fade-in + slide-up al entrar en viewport.
- **Archivos permitidos:**
  - `components/home/PainPoint.tsx`
  - `app/(marketing)/page.tsx` (añadir PainPoint)
- **Criterios de aceptación:**
  - Sección visible en fondo oscuro con texto blanco de alto contraste (≥4.5:1).
  - A 360px: apilado vertical (pain arriba, solución abajo).
  - A 1280px: dos columnas lado a lado.
  - Los 3 bullet points de pain están presentes con ícono de alerta.
  - Los 4 features de solución están presentes con ícono de check.
  - Sin scroll horizontal a ningún breakpoint.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + inspección visual en 360/768/1280px, verificar contraste con DevTools

---

## T10 — Sección ServicesPreview
- **Prioridad:** P2
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T04, T32
- **Descripción:** Construir `ServicesPreview` con 4 `ServiceCard`. Cada card tiene imagen placeholder, título, descripción corta y link a la página de servicio correspondiente. Grid adaptativo. Crear `content/services.ts` con los datos de los 4 servicios.
- **Archivos permitidos:**
  - `components/home/ServicesPreview.tsx`
  - `components/ui/ServiceCard.tsx`
  - `content/services.ts`
  - `app/(marketing)/page.tsx` (añadir ServicesPreview)
- **Criterios de aceptación:**
  - A 360px: 1 columna.
  - A 768px: 2 columnas.
  - A 1280px: 4 columnas (o 2×2 si el diseño lo requiere).
  - Cada card tiene imagen con aspect-ratio 16/9 fijo.
  - Hover en desktop: shadow-elevated + leve translate-y.
  - Links de cada card apuntan a `/servicios/[slug]` correctos.
  - `content/services.ts` tipado en TypeScript con interfaz `Service`.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + inspección visual en 360/768/1280px, verificar links con `href` correctos

---

## T11 — Sección HowItWorks (Stepper)
- **Prioridad:** P2
- **Estado:** ✅ Completado — 2026-06-13 · Animaciones verificadas post-fix framer-motion v11.18.2
- **Depende de:** T04, T32
- **Descripción:** Construir `HowItWorks` con `StepperItem` para los 4 pasos del proceso. Fondo oscuro (`brand-primary-800`). Layout horizontal en desktop con línea conectora, vertical en móvil. Animación de stagger al entrar en viewport.
- **Archivos permitidos:**
  - `components/home/HowItWorks.tsx`
  - `components/ui/StepperItem.tsx`
  - `app/(marketing)/page.tsx` (añadir HowItWorks)
- **Criterios de aceptación:**
  - A 360px: 4 pasos en columna, línea vertical conectora a la izquierda.
  - A 768px: puede ser columna o grid 2×2.
  - A 1280px: 4 pasos en fila horizontal con línea conectora horizontal.
  - Número de paso en círculo `brand-accent-500`.
  - Animación stagger: cada paso aparece 0.15s después del anterior.
  - Texto blanco sobre fondo oscuro, contraste ≥ 4.5:1.
  - Sin scroll horizontal.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + inspección visual en 360/768/1280px

---

## T12 — Sección Testimonials
- **Prioridad:** P2
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T04, T32
- **Descripción:** Construir `Testimonials` con `TestimonialCard`. Los testimonios son placeholders marcados como `[DATO REAL PENDIENTE]`. Crear `content/testimonials.ts` con datos de ejemplo tipados. Fondo neutral-50 o blanco.
- **Archivos permitidos:**
  - `components/home/Testimonials.tsx`
  - `components/ui/TestimonialCard.tsx`
  - `content/testimonials.ts`
  - `app/(marketing)/page.tsx` (añadir Testimonials)
- **Criterios de aceptación:**
  - A 360px: 1 columna.
  - A 768px: 2 columnas.
  - A 1280px: 3 columnas.
  - Cada card muestra avatar placeholder, nombre, tipo de cliente y texto.
  - En el código fuente (`testimonials.ts`), los datos placeholder están comentados con `// [DATO REAL PENDIENTE]`.
  - Sin scroll horizontal.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + inspección visual en 360/768/1280px

---

## T13 — Sección HomeCTA
- **Prioridad:** P2
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T04, T32
- **Descripción:** Construir el `HomeCTA` — sección final con gradiente navy, headline de cierre, botón WhatsApp principal y teléfono clicable. CTA de máximo impacto y conversión.
- **Archivos permitidos:**
  - `components/home/HomeCTA.tsx`
  - `app/(marketing)/page.tsx` (añadir HomeCTA)
- **Criterios de aceptación:**
  - Fondo con gradiente de `brand-primary-700` a `brand-primary-950`.
  - Botón WhatsApp verde prominente (`min-h-[44px]`).
  - Teléfono de emergencia clicable (`tel:`).
  - Centrado en todas las resoluciones.
  - Sin scroll horizontal.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + inspección visual en 360/768/1280px

---

## T14 — Componente WhatsAppFloat
- **Prioridad:** P2
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T04, T32
- **Descripción:** Construir el botón flotante de WhatsApp fijo en la esquina inferior derecha. Presente en todas las páginas vía el layout. Animación de entrada al cargar. No obstruye contenido crítico.
- **Archivos permitidos:**
  - `components/layout/WhatsAppFloat.tsx`
  - `app/(marketing)/layout.tsx` (añadir WhatsAppFloat)
- **Criterios de aceptación:**
  - Visible en todas las páginas a 360/768/1280px.
  - Posición: `fixed bottom-6 right-6` (o equivalente que no obstruya nav inferior en móvil).
  - `aria-label="Chatear por WhatsApp"`, ícono con `aria-hidden="true"`.
  - Link: `https://wa.me/51933452214?text=Hola%2C%20quiero%20cotizar%20un%20GPS` con `target="_blank" rel="noopener noreferrer"`.
  - Touch target ≥ 44×44px.
  - Animación de entrada (slide desde abajo o fade-in) al cargar la página.
  - `prefers-reduced-motion`: sin animación.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + inspección visual en 360px (verificar que no tapa nav) y 1280px

---

## T15 — Integración y revisión final de la Home
- **Prioridad:** P2
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T07, T08, T09, T10, T11, T12, T13, T14
- **Descripción:** Ensamblar todas las secciones en `app/(marketing)/page.tsx`. Revisar el flujo visual completo de la Home, ajustar espaciados, orden de secciones y transiciones entre ellas. Ejecutar Lighthouse para obtener baseline de métricas.
- **Archivos permitidos:**
  - `app/(marketing)/page.tsx`
  - Ajustes menores en cualquier componente de la Home (sin refactors mayores)
- **Criterios de aceptación:**
  - La Home se despliega completa en 360/768/1280px sin errores visuales.
  - Sin scroll horizontal en ningún breakpoint.
  - Lighthouse Performance ≥ 80 en desarrollo local (objetivo ≥ 95 es para producción en T30).
  - Lighthouse Accessibility ≥ 90.
  - Todos los links internos funcionan.
  - `npm run build` y `npm run lint` pasan sin errores ni warnings.
- **Verificación:** `npm run build && npm run lint` + Lighthouse en `npm run dev` + inspección visual en 360/768/1280px

---

## FASE P3 — Páginas Internas, Supabase, SEO, Deploy

---

## T16 — Página GPS Vehicular Particular
- **Prioridad:** P3
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T04, T10
- **Descripción:** Crear la página `/servicios/gps-vehicular` usando el template `ServicePage`. Incluye: hero de la página, descripción del servicio, lista de features, imagen, CTA de cotización.
- **Archivos permitidos:**
  - `app/(marketing)/servicios/gps-vehicular/page.tsx`
  - `components/services/ServicePage.tsx` (crear template reutilizable)
- **Criterios de aceptación:**
  - Página accesible en `/servicios/gps-vehicular`.
  - Todas las features del GPS Vehicular de `specs/01-requirements.md §5.4` están presentes.
  - CTA de cotización visible y funcional (link a `/cotizar`).
  - Correcta a 360/768/1280px.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + navegación manual a la URL + inspección 360/768/1280px

---

## T17 — Página GPS para Flotas
- **Prioridad:** P3
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T16
- **Descripción:** Crear la página `/servicios/gps-flotas` usando `ServicePage`. Enfoque en el público B2B.
- **Archivos permitidos:**
  - `app/(marketing)/servicios/gps-flotas/page.tsx`
- **Criterios de aceptación:** Mismos criterios que T16, con contenido de GPS Flotas.
- **Verificación:** `npm run dev` + navegación manual + inspección 360/768/1280px

---

## T18 — Página Unidos Liberty
- **Prioridad:** P3
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T16
- **Descripción:** Crear la página `/servicios/unidos-liberty` usando `ServicePage`.
- **Archivos permitidos:**
  - `app/(marketing)/servicios/unidos-liberty/page.tsx`
- **Criterios de aceptación:** Mismos criterios que T16, con contenido de Unidos Liberty.
- **Verificación:** `npm run dev` + navegación manual + inspección 360/768/1280px

---

## T19 — Página Dashcam con IA
- **Prioridad:** P3
- **Estado:** ✅ Completado — 2026-06-13
- **Depende de:** T16
- **Descripción:** Crear la página `/servicios/dashcam-ia` usando `ServicePage`. Marcar features pendientes de confirmación con `[DATO REAL PENDIENTE]` en el código.
- **Archivos permitidos:**
  - `app/(marketing)/servicios/dashcam-ia/page.tsx`
- **Criterios de aceptación:** Mismos criterios que T16, con contenido de Dashcam IA.
- **Verificación:** `npm run dev` + navegación manual + inspección 360/768/1280px

---

## T20 — Página Nosotros
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T04
- **Descripción:** Crear la página `/nosotros` con historia de la empresa, valores, equipo y diferenciadores. Contenido `[DATO REAL PENDIENTE]` donde no haya información confirmada. CTA de cotización al final.
- **Archivos permitidos:**
  - `app/(marketing)/nosotros/page.tsx`
- **Criterios de aceptación:**
  - Página accesible en `/nosotros`.
  - Correcta a 360/768/1280px.
  - Los diferenciadores de la marca (+10 años, instalación oculta, app propia, sin pago de equipo) están presentes.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + navegación + inspección 360/768/1280px

---

## T21 — Página Cotizar (formulario UI, sin backend)
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T04
- **Descripción:** Crear la página `/cotizar` con el formulario de cotización completo (UI y validación client-side). Sin integración con Supabase todavía (eso es T24). El formulario debe mostrar estado de éxito simulado para verificar el UX.
- **Archivos permitidos:**
  - `app/(marketing)/cotizar/page.tsx`
  - `components/ui/QuoteForm.tsx`
- **Criterios de aceptación:**
  - Página accesible en `/cotizar`.
  - Todos los campos del formulario de `specs/01-requirements.md §4.1` presentes.
  - Validación client-side con mensajes de error en línea y en español.
  - Todos los campos tienen `<label>` explícito.
  - Errores asociados con `aria-describedby`.
  - Botón de envío con spinner en estado de carga (simulado).
  - Estado de éxito muestra mensaje de confirmación.
  - Correcta a 360/768/1280px. Touch targets ≥ 44×44px en todos los inputs.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + rellenar formulario + verificar validaciones en 360/768/1280px

---

## T22 — Setup de Supabase (tabla leads + RLS)
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T02
- **Descripción:** Crear el proyecto en Supabase, ejecutar el schema SQL de `specs/02-design.md §3.3` para crear la tabla `leads`, activar RLS, crear la policy de insert-only para service_role. Documentar el proceso en `lib/supabase-schema.sql`. Crear el cliente server-side en `lib/supabase-server.ts`.
- **Archivos permitidos:**
  - `lib/supabase-server.ts`
  - `lib/supabase-schema.sql` (documentación del schema aplicado)
- **Criterios de aceptación:**
  - La tabla `leads` existe en Supabase con todas las columnas del schema.
  - RLS activado; la policy `service_role_insert_only` existe.
  - `lib/supabase-server.ts` exporta una función `createServerClient()` que usa `SUPABASE_SERVICE_ROLE_KEY`.
  - La service key NUNCA aparece en archivos del repo (solo en `.env.local`).
  - `npm run build` pasa.
- **Verificación:** `npm run build` + verificar en Supabase dashboard que la tabla y policy existen

---

## T23 — API route POST /api/leads
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T22
- **Descripción:** Crear la API route `app/api/leads/route.ts`. Valida el body con Zod, verifica dedup de 60 segundos, inserta en Supabase usando el cliente server-side, retorna respuestas apropiadas (200/400/429/500).
- **Archivos permitidos:**
  - `app/api/leads/route.ts`
  - `lib/validations.ts` (schema Zod para el formulario)
- **Criterios de aceptación:**
  - POST con datos válidos retorna 200 y el lead aparece en Supabase.
  - POST con datos inválidos retorna 400 con errores por campo.
  - POST duplicado dentro de 60 segundos retorna 429.
  - El error real de Supabase nunca se expone al cliente en producción.
  - La service key solo se accede via `process.env.SUPABASE_SERVICE_ROLE_KEY` en el módulo server-side.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + probar con `curl` o Postman: caso success, caso invalid, caso duplicado

---

## T34 — Anti-spam: honeypot + protección del formulario
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T21, T23
- **Descripción:** Agregar protección anti-spam al formulario de cotización. Implementar: (1) campo honeypot oculto en `QuoteForm` que, si viene relleno, descarta el submit silenciosamente sin alertar al bot; (2) validación del honeypot en la API route con respuesta falsa 200 (no exponer la detección). La integración con Cloudflare Turnstile se deja documentada como opcional a activar si el volumen de spam lo justifica.
- **Archivos permitidos:**
  - `components/ui/QuoteForm.tsx` (añadir campo honeypot)
  - `app/api/leads/route.ts` (añadir validación honeypot server-side)
- **Criterios de aceptación:**
  - El campo honeypot está en el DOM pero invisible (`position: absolute; opacity: 0; pointer-events: none`), con `autocomplete="off"` y nombre genérico que atraiga bots (ej. `website`).
  - Si el campo honeypot viene relleno, la API retorna `200` (respuesta falsa) pero NO inserta el lead en Supabase.
  - La experiencia del usuario legítimo no se ve afectada a 360/768/1280px.
  - Rellenar manualmente el honeypot via DevTools y enviar el formulario NO crea registro en Supabase.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + rellenar honeypot manualmente via DevTools + confirmar que NO aparece registro en Supabase dashboard

---

## T24 — Integración formulario ↔ API route ↔ Supabase
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T21, T23, T34
- **Descripción:** Conectar el `QuoteForm` (T21) con la API route (T23). Manejar todos los estados de respuesta en el cliente: loading, success (con opción de ir a WhatsApp), error de validación (mostrar errores en campos), error de servidor (mensaje genérico).
- **Archivos permitidos:**
  - `components/ui/QuoteForm.tsx` (actualizar)
- **Criterios de aceptación:**
  - Enviar el formulario con datos válidos crea el lead en Supabase (verificar en Supabase dashboard).
  - El estado de éxito muestra mensaje de confirmación + opción de WhatsApp.
  - Errores del servidor se muestran de forma amigable (sin stack traces).
  - El botón de envío está deshabilitado durante el loading.
  - Anti-duplicado funciona: segundo envío en < 60s muestra mensaje apropiado.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + envío real del formulario + verificar lead en Supabase dashboard

---

## T33 — Notificación por email de lead nuevo
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T23
- **Descripción:** Implementar notificación automática por email a `comercial@unidosporgps.pe` cada vez que se inserta un nuevo lead válido en Supabase. Implementar via Resend (API de email transaccional) llamado desde la API route `/api/leads` después de la inserción exitosa. El email debe incluir todos los datos del lead. Si el envío de email falla, el lead se guarda igualmente (error no bloqueante).
- **Archivos permitidos:**
  - `app/api/leads/route.ts` (añadir llamada a Resend tras inserción exitosa)
  - `lib/email.ts` (helper de Resend que construye y envía el email)
  - `package.json` (añadir `resend`)
  - `.env.example` (añadir `RESEND_API_KEY` con valor vacío y comentario)
- **Criterios de aceptación:**
  - Al insertar un lead válido, `comercial@unidosporgps.pe` recibe un email en menos de 60 segundos.
  - El email contiene: nombre completo, teléfono, tipo de servicio solicitado, mensaje y timestamp.
  - Si Resend falla (red, key inválida), la API sigue retornando `200` y el lead queda en Supabase.
  - `RESEND_API_KEY` nunca aparece en archivos del repo (solo en `.env.local` y panel de Vercel).
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + enviar formulario con datos válidos + verificar recepción del email en `comercial@unidosporgps.pe`

---

## T35 — Analítica y tracking de conversión
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T15, T24
- **Descripción:** Integrar Vercel Analytics para métricas de tráfico y Core Web Vitals. Añadir eventos de conversión custom: submit exitoso del formulario de cotización (`lead_submitted`) y clics en el botón flotante de WhatsApp (`whatsapp_click`). Los eventos se implementan via `@vercel/analytics/react`.
- **Archivos permitidos:**
  - `app/layout.tsx` (añadir `<Analytics />` de `@vercel/analytics/react`)
  - `components/ui/QuoteForm.tsx` (añadir `track('lead_submitted')` en submit exitoso)
  - `components/layout/WhatsAppFloat.tsx` (añadir `track('whatsapp_click')` en el `onClick`)
  - `package.json` (añadir `@vercel/analytics`)
- **Criterios de aceptación:**
  - El dashboard de Vercel Analytics muestra tráfico del sitio tras el primer deploy post-T35.
  - El evento `lead_submitted` aparece en Vercel Analytics al enviar el formulario exitosamente.
  - El evento `whatsapp_click` aparece al hacer clic en el botón flotante.
  - Sin errores de consola relacionados con Analytics a 360/768/1280px.
  - `npm run build` pasa.
- **Verificación:** Deploy en Vercel + enviar formulario + clic en WhatsApp float + verificar eventos en Vercel Analytics dashboard (puede tardar 1–2 minutos en aparecer)

---

## T25 — Página Política de Privacidad
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T04
- **Descripción:** Crear la página `/politica-de-privacidad` con el contenido legal de tratamiento de datos personales. Contenido generado como base legal según regulación peruana (Ley N° 29733). El cliente debe revisar y aprobar el texto antes del lanzamiento.
- **Archivos permitidos:**
  - `app/(marketing)/politica-de-privacidad/page.tsx`
- **Criterios de aceptación:**
  - Página accesible en `/politica-de-privacidad`.
  - Contenido cubre: responsable del tratamiento, datos recopilados, finalidad, derechos del titular, contacto.
  - Correcta a 360/768/1280px.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + navegación + inspección 360px y 1280px

---

## T26 — Metadata SEO por página
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T15, T16, T17, T18, T19, T20, T21, T25
- **Descripción:** Implementar la Metadata API de Next.js en cada `page.tsx` con los valores de `specs/02-design.md §3.6`: `title`, `description`, Open Graph, Twitter Card. Usar `generateMetadata()` donde el contenido sea dinámico.
- **Archivos permitidos:**
  - `app/layout.tsx` (metadata base)
  - `app/(marketing)/page.tsx`
  - `app/(marketing)/nosotros/page.tsx`
  - `app/(marketing)/cotizar/page.tsx`
  - `app/(marketing)/servicios/*/page.tsx` (4 páginas)
  - `app/(marketing)/politica-de-privacidad/page.tsx`
- **Criterios de aceptación:**
  - Cada página tiene `<title>` único según la tabla de `specs/02-design.md §3.6`.
  - Cada página tiene `<meta name="description">` único.
  - Open Graph funciona: verificar con og:debugger o similar.
  - `npm run build` pasa.
- **Verificación:** `npm run build` + `View Source` de cada página para verificar los meta tags

---

## T27 — sitemap.xml + robots.txt
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T26
- **Descripción:** Crear `app/sitemap.ts` que genere automáticamente el sitemap con las 8 URLs del sitio. Crear `app/robots.ts` que permita indexación general y apunte al sitemap.
- **Archivos permitidos:**
  - `app/sitemap.ts`
  - `app/robots.ts`
- **Criterios de aceptación:**
  - `/sitemap.xml` accesible y contiene las 8 URLs con `lastModified`.
  - `/robots.txt` accesible, permite `User-agent: *`, tiene `Sitemap:` apuntando al sitemap.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + abrir `/sitemap.xml` y `/robots.txt` en el browser

---

## T28 — Schema.org (Structured Data)
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T26
- **Descripción:** Crear el componente `StructuredData` que renderiza JSON-LD. Implementar `LocalBusiness` en la Home y `Service` en cada página de servicio.
- **Archivos permitidos:**
  - `components/seo/StructuredData.tsx`
  - `app/(marketing)/page.tsx` (añadir LocalBusiness)
  - `app/(marketing)/servicios/*/page.tsx` (añadir Service schema)
- **Criterios de aceptación:**
  - El HTML de la Home contiene `<script type="application/ld+json">` con LocalBusiness.
  - Cada página de servicio tiene schema.org Service.
  - Sin errores en Google Rich Results Test.
  - `npm run build` pasa.
- **Verificación:** `npm run build` + View Source + pegar JSON en validator.schema.org

---

## T29 — Security headers en next.config.ts
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T02
- **Descripción:** Agregar los security headers HTTP en `next.config.ts`: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, y un Content Security Policy básico que permita Google Fonts, Google Analytics (si aplica) y Supabase.
- **Archivos permitidos:**
  - `next.config.ts`
- **Criterios de aceptación:**
  - Los headers están presentes en las respuestas HTTP (verificar con DevTools > Network > Response Headers).
  - `X-Frame-Options: DENY`.
  - `X-Content-Type-Options: nosniff`.
  - `Referrer-Policy: strict-origin-when-cross-origin`.
  - CSP no rompe Google Fonts ni las imágenes.
  - `npm run build` pasa.
- **Verificación:** `npm run dev` + DevTools Network + verificar headers en cualquier página

---

## T30 — Lighthouse audit y optimización final
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T15, T26, T27, T28, T29
- **Descripción:** Ejecutar Lighthouse en el deploy de Vercel (no localhost). Identificar y corregir todos los issues hasta alcanzar ≥95 en Performance, Accessibility, Best Practices y SEO. Verificar Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- **Archivos permitidos:**
  - Cualquier archivo que requiera optimización (imágenes, componentes, config)
  - Los cambios deben ser mínimos y dirigidos; sin refactors amplios
- **Criterios de aceptación:**
  - Lighthouse Performance ≥ 95 en Vercel production URL.
  - Lighthouse Accessibility ≥ 95.
  - Lighthouse Best Practices ≥ 95.
  - Lighthouse SEO ≥ 95.
  - LCP < 2.5s, CLS < 0.1, INP < 200ms en Vercel (medido con PageSpeed Insights).
  - Todos los scores documentados en un comentario del commit.
- **Verificación:** PageSpeed Insights con la URL de Vercel production

---

## T31 — Deploy a producción y smoke test
- **Prioridad:** P3
- **Estado:** ⬜ Pendiente
- **Depende de:** T30
- **Descripción:** Configurar el dominio de producción en Vercel (unidosporgps.pe o subdominio). Ejecutar smoke test manual de las rutas críticas: Home, páginas de servicio, formulario de cotización (envío real), WhatsApp float.
- **Archivos permitidos:**
  - Ningún archivo de código. Solo configuración DNS/Vercel (operación externa) y posible `next.config.ts` para el dominio.
- **Criterios de aceptación:**
  - El sitio es accesible en el dominio de producción con HTTPS.
  - Formulario de cotización crea leads reales en Supabase production.
  - Botón flotante WhatsApp abre WhatsApp correctamente.
  - Teléfono de emergencia es clickeable.
  - No hay errores de consola en producción.
  - Lighthouse ≥ 95 en el dominio final (no solo en Vercel subdomain).
- **Verificación:** Smoke test manual en dispositivo móvil real (Android) + desktop Chrome

---

## Bloqueantes de contenido del cliente

> Estos ítems son datos reales que el cliente debe proveer antes de que el sitio pueda lanzarse a producción. Están marcados como `[DATO REAL PENDIENTE]` en el código fuente. Reunir esta información en paralelo con el desarrollo.

### Imágenes

| Ítem | Usado en | Especificación técnica |
|---|---|---|
| Imagen hero principal | T07 — `hero-bg.webp` | Fotografía de alta resolución (mín. 1920×1080px). Tema: vehículo protegido, ciudad nocturna o GPS instalado. Formato WebP o JPG. |
| Imagen servicio GPS Vehicular | T10, T16 | Relación de aspecto 16:9, mín. 800×450px |
| Imagen servicio GPS Flotas | T10, T17 | Relación de aspecto 16:9, mín. 800×450px |
| Imagen servicio Unidos Liberty | T10, T18 | Relación de aspecto 16:9, mín. 800×450px |
| Imagen servicio Dashcam IA | T10, T19 | Relación de aspecto 16:9, mín. 800×450px |
| Fotos de equipo (opcional) | T20 — Nosotros | Formato cuadrado o 3:4, mín. 400×400px por persona |

### Cifras para StatsBand (T08)

Los 4 valores numéricos con sus etiquetas. Ejemplos de qué proveer:
- Número de vehículos protegidos actualmente
- Años en el mercado (o año de fundación)
- Tasa de recuperación de vehículos robados (%)
- Número de clientes activos o ciudades con cobertura

### Testimonios reales (T12)

Mínimo 3 testimonios. Por cada uno:
- Nombre del cliente (o iniciales si prefiere anonimato)
- Tipo de cliente: "propietario particular" o "gestor de flota"
- Texto del testimonio (2–4 oraciones)
- Foto del cliente (opcional, 1:1, mín. 80×80px)

### Copy de servicios (T16–T19)

Por cada servicio (GPS Vehicular, GPS Flotas, Unidos Liberty, Dashcam IA):
- Descripción corta (1–2 oraciones para la ServiceCard)
- Descripción larga (para la página interna)
- Lista completa de features/características incluidas
- Precio o rango de precio (si se va a publicar)
- Diferenciadores vs. la competencia

### Datos corporativos para Nosotros (T20)

- Año de fundación
- Historia de la empresa (2–3 párrafos)
- Misión y visión (si existen formalmente)
- Nombres y cargos del equipo (para sección de equipo, si se decide incluir)
- Certificaciones, partnerships o reconocimientos relevantes

### Presencia digital

- URL de Facebook (si existe)
- URL de Instagram (si existe)
- URL de LinkedIn (si existe)
- URL de YouTube / TikTok (si existe)
- Google Business Profile (para Schema.org LocalBusiness en T28)
