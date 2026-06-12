# Registro de Decisiones de Arquitectura (ADR)
_Formato: ADR ligero — Decisión · Fecha · Contexto · Justificación · Consecuencias_

---

## ADR-01 — Stack tecnológico: Next.js + TypeScript + Tailwind + Framer Motion
- **Estado:** Aprobada
- **Fecha:** 2026-06-11

**Contexto:**
Se necesita construir un sitio web de alta conversión para una empresa de seguridad vehicular peruana. El tráfico es mayoritariamente móvil. Los requisitos incluyen performance Lighthouse ≥95, SEO técnico y un formulario con backend real (Supabase). Se evaluaron: Next.js (App Router), Astro, Remix.

**Decisión:**
Next.js 14+ con App Router como framework principal. TypeScript strict. Tailwind CSS para estilos. Framer Motion para animaciones.

**Justificación:**
- Next.js App Router ofrece el mejor balance entre SSR para SEO y islands interactivos para performance. El ecosistema es maduro y el equipo conoce la plataforma.
- TypeScript strict elimina una clase entera de bugs en runtime.
- Tailwind es el estándar de facto para diseño rápido y consistente; los tokens de diseño en `tailwind.config.ts` aseguran coherencia sin fricción.
- Framer Motion es la librería de animaciones más completa para React, con soporte nativo para `prefers-reduced-motion`.

**Consecuencias:**
- Bundle de JavaScript mayor que con Astro (aceptable por los beneficios de React ecosystem).
- Requiere Node.js en CI/CD.
- Todos los componentes son Server Components por defecto; los Client Components solo donde hay interactividad.

---

## ADR-02 — Hosting: Vercel desde GitHub
- **Estado:** Aprobada
- **Fecha:** 2026-06-11

**Contexto:**
Se necesita un hosting confiable para Next.js con preview deploys en PRs, CI/CD automático y soporte para variables de entorno seguras.

**Decisión:**
Vercel con deploys automáticos desde GitHub (rama `main` → producción; ramas feature → preview URLs).

**Justificación:**
- Vercel es la plataforma nativa de Next.js: mejor rendimiento edge, menor configuración, preview URLs gratuitas.
- Integración nativa con GitHub: cada PR genera una preview URL para revisión visual.
- Variables de entorno administradas de forma segura en el dashboard de Vercel.
- Plan Hobby o Pro cubre holgadamente las necesidades del proyecto.

**Consecuencias:**
- Vendor lock-in leve con Vercel (Next.js también corre en otros hosts, pero con más configuración).
- Sin costo adicional de infrastructure en etapa inicial (plan gratuito).

---

## ADR-03 — Base de datos: Supabase solo para leads
- **Estado:** Aprobada
- **Fecha:** 2026-06-11

**Contexto:**
El sitio necesita persistir leads de cotización. Se evaluaron: Supabase, PlanetScale, Neon, simple email via Resend/SendGrid, Google Sheets via API.

**Decisión:**
Supabase como único almacén de datos. Solo para la tabla `leads`. La service key se usa exclusivamente en la API route server-side. RLS activado.

**Justificación:**
- Supabase provee PostgreSQL gestionado con RLS, dashboard visual y SDK oficial para Node.js.
- La service key en el servidor (no en el cliente) garantiza que nadie puede leer o manipular los leads directamente.
- RLS asegura que incluso si la anon key se expone accidentalmente, no puede leer datos de la tabla `leads`.
- Es sobre-ingenería usar una solución más compleja para el volumen de leads esperado.

**Consecuencias:**
- Se requiere variable de entorno `SUPABASE_SERVICE_ROLE_KEY` en Vercel (no en el cliente).
- La tabla `leads` es solo de escritura para el sitio web; el cliente accede a los datos desde el dashboard de Supabase directamente.
- Si en el futuro se necesita CMS, se evaluará añadir tablas o migrar a otra solución.

---

## ADR-04 — Sin CMS: contenido en archivos del repositorio
- **Estado:** Aprobada
- **Fecha:** 2026-06-11

**Contexto:**
El contenido del sitio (copy de servicios, testimonios, datos de la empresa) podría gestionarse con un CMS headless (Contentful, Sanity, Strapi, etc.) o mantenerse en archivos del repo.

**Decisión:**
El contenido vive en archivos TypeScript del repositorio (`/content/*.ts`). Sin CMS en esta etapa.

**Justificación:**
- El volumen de contenido es pequeño (1 home + 6 páginas internas + datos fijos).
- El cliente no tiene necesidad inmediata de editar contenido de forma autónoma y frecuente.
- Los archivos TypeScript tipados previenen errores de contenido faltante en build time.
- Un CMS introduce complejidad operativa, costo mensual y un punto más de falla.
- Si la necesidad de edición autónoma surge en el futuro, se puede migrar a un CMS sin cambiar la arquitectura de los componentes.

**Consecuencias:**
- Para actualizar contenido se necesita un commit al repositorio y un re-deploy.
- El cliente depende del equipo de desarrollo para cambios de texto (aceptable en esta etapa).
- Los testimonios y cifras reales se añaden en código, lo cual refuerza la regla de "no inventar cifras".

---

## ADR-05 — Metodología: Spec-First + HITL (Human-in-the-Loop)
- **Estado:** Aprobada
- **Fecha:** 2026-06-11

**Contexto:**
El proyecto se desarrolla con asistencia de IA (Claude Code). Se necesita una metodología que garantice calidad, alineación con el cliente y control humano en cada paso.

**Decisión:**
Spec-First + HITL obligatorio: las especificaciones en `specs/` son la fuente de verdad. Toda tarea se ejecuta en Plan Mode (plan → aprobación humana → escritura). Una tarea atómica a la vez.

**Justificación:**
- Spec-First previene el síndrome de "código sin propósito": cada archivo creado tiene una justificación documentada.
- El HITL garantiza que el cliente aprueba cada funcionalidad antes de que se construya, evitando retrabajos costosos.
- Las tareas atómicas permiten hacer commits limpios, rollbacks precisos y revisiones enfocadas.
- El plan escrito en cada tarea sirve como documentación implícita del razonamiento detrás de cada decisión de implementación.

**Consecuencias:**
- El desarrollo es más lento que "vibe-coding" sin restricciones.
- Cada tarea requiere una sesión con aprobación explícita del cliente → ideal para proyectos con un cliente activo.
- La especificación debe mantenerse actualizada; si el cliente cambia de opinión, la spec se actualiza antes del código.

---

## ADR-06 — Sin multi-agente ni worktrees: un agente por tarea
- **Estado:** Aprobada
- **Fecha:** 2026-06-11

**Contexto:**
Claude Code soporta múltiples agentes en paralelo y worktrees de git para desarrollo concurrente. Se evaluó si usar estas capacidades para acelerar el desarrollo.

**Decisión:**
Un solo agente por sesión. Sin worktrees. Las tareas se ejecutan secuencialmente.

**Justificación:**
- El proyecto es de escala media (1 sitio marketing, ~8 páginas). La paralelización de agentes no añade valor suficiente para justificar la complejidad de manejo.
- Los worktrees son útiles cuando hay múltiples features independientes en vuelo simultáneo. Aquí las tareas tienen dependencias secuenciales claras (P0 → P1 → P2 → P3).
- La metodología HITL ya de por sí serializa el desarrollo (aprobación antes de siguiente tarea), haciendo el paralelismo innecesario.
- Un agente único simplifica el contexto, el debugging y la trazabilidad del trabajo.

**Consecuencias:**
- El desarrollo es inherentemente secuencial.
- Si en el futuro se necesita trabajar en múltiples features independientes en paralelo, se puede revisar esta decisión.
