# CLAUDE.md — Unidos por GPS Web

## Identidad del Proyecto
**Unidos por GPS** — empresa peruana de seguridad vehicular GPS (unidosporgps.pe).
Construimos un sitio nuevo de alta conversión que reemplaza el sitio existente en Odoo.
Objetivo #1: generar **leads de cotización** vía WhatsApp y formulario → Supabase.
Público: dueños de vehículos particulares (B2C) y gestores de flotas (B2B). Tráfico mayoritariamente móvil.

## Stack
| Capa | Tecnología | Notas |
|---|---|---|
| Framework | Next.js 14+ App Router | Server components por defecto; client components solo si hay interactividad |
| Lenguaje | TypeScript (`strict: true`) | Sin `any`. Tipos en archivos `.ts` / `.tsx` |
| Estilos | Tailwind CSS | Sin CSS suelto salvo tokens en `tailwind.config.ts`; sin `style={{}}` en producción |
| Animaciones | Framer Motion | Sutiles y propositivas. Nunca decorativas. Respetar `prefers-reduced-motion` |
| Base de datos | Supabase | Solo para leads. Service key exclusivamente server-side. RLS activado siempre |
| Hosting | Vercel | Deploys desde GitHub. Preview en PRs |
| Contenido | Archivos del repo (`/content/`) | Sin CMS |

## Convenciones de Código
- Componentes: **PascalCase** en `/components/`. Ningún archivo de código > 500 líneas.
- Rutas: `app/(marketing)/[slug]/page.tsx`; API routes en `app/api/[endpoint]/route.ts`
- Alias de imports: `@/` (configurado en `tsconfig.json`)
- Imágenes: siempre `next/image` con `alt`, dimensiones o `fill` explícitos
- Fonts: variables CSS via `next/font/google`; aplicar con clase Tailwind
- Linting: **ESLint + Prettier sin warnings** antes de todo commit

## Metodología: Spec-First + HITL
- **`specs/`** es la fuente de verdad. Si la lógica cambia, la spec se actualiza primero.
- Toda tarea se ejecuta en **Plan Mode**: plan → aprobación humana → escritura de archivos.
- Una **tarea atómica** a la vez. No se adelanta la siguiente sin aprobación de la actual.
- Formato de commit: `T##: descripción en inglés` (ej. `T03: add tailwind token config`)
- `specs/03-tasks.md` es el backlog vivo; actualizar estado tras cada tarea completada.

## Regla de Marca
- Colores **únicamente** de `design/brand/brand.md`.
- **Prohibido inventar** valores hexadecimales no documentados en brand.md.
- Tints/shades derivados y neutros para contraste: permitidos si se documentan en brand.md.
- Logos: `logo.png` (positivo, sobre fondos claros) · `logo-negativo.webp` (blanco, sobre fondos oscuros).

## Regla Responsive UNIVERSAL
- **Mobile-first** en todo. Ninguna tarea con UI está completa sin verificar:
  - **360px** (móvil pequeño) · **768px** (tablet) · **1280px** (desktop)
- Touch targets mínimo **44×44px**.
- **Cero scroll horizontal** en cualquier breakpoint. Jamás.

## Calidad
- Accesibilidad **WCAG AA**: contraste ≥4.5:1 texto normal, ≥3:1 texto grande/UI.
- `alt` descriptivo en imágenes; `alt=""` en decorativas; `aria-label` en iconos interactivos.
- Focus visible siempre. HTML semántico: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Headings en orden jerárquico; sin saltar niveles.
- **Lighthouse objetivo ≥95** en Performance, Accessibility, Best Practices y SEO.
- Core Web Vitals: **LCP < 2.5s · CLS < 0.1 · INP < 200ms**

## Idioma
- Contenido visible al usuario: **español de Perú**.
- Código, comentarios, nombres de variables, commits: **inglés**.
- Archivos de spec y brand: español (son documentos de negocio).

## Contacto del Cliente
| Canal | Dato |
|---|---|
| WhatsApp (principal) | wa.me/51933452214 |
| Emergencia 24/7 | +51 933 452 214 |
| Email comercial | comercial@unidosporgps.pe |
| Sitio actual | unidosporgps.pe |
