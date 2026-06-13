# Identidad de Marca — Unidos por GPS
_Generado en T01 — 2026-06-12_
_Fuente de verdad para todos los tokens de diseño del sitio web._

---

## 1. Color Primario de Marca

### Origen y método de extracción
Color extraído directamente del archivo `design/referencia-actual/logo.png` mediante análisis de píxeles (PIL/Pillow, muestra de 297.525 píxeles representativos del logotipo). El valor hexadecimal corresponde al color dominante del pin de ubicación y del texto "UNIDOS POR GPS".

### Color base confirmado

| Rol | Hex | RGB | Observación |
|---|---|---|---|
| **Color de marca (primario)** | **`#123C6E`** | rgb(18, 60, 110) | Extraído del logo. Navy blue profundo. |

> ⚠️ **Corrección respecto a `specs/02-design.md §1.1`:** El valor aproximado `#1B3869` queda reemplazado por el valor confirmado `#123C6E`. La diferencia es visible: el navy real es más puro (menos rojizo) y más saturado.

---

## 2. Paleta Completa de Colores

### 2.1 Primarios — Navy Blue (color de marca)

Escala derivada del color base `#123C6E` (H:212° S:72% L:25%), cruzada con valores reales extraídos de los screenshots del sitio actual.

| Token | Hex | Origen | Uso |
|---|---|---|---|
| `brand-primary-950` | `#060D1C` | Derivado | Fondos de máximo contraste |
| `brand-primary-900` | `#0A192F` | **Confirmado** (nav/footer del sitio actual) | Footer, nav background |
| `brand-primary-800` | `#0D2F48` | **Confirmado** (secciones oscuras del sitio actual) | Fondos de sección oscura |
| `brand-primary-700` | `#0F3560` | Derivado | Variante oscura de interacciones |
| `brand-primary-600` | **`#123C6E`** | **Confirmado** (logo — FUENTE DE VERDAD) | **Color principal de marca. Logo, CTAs primarios.** |
| `brand-primary-500` | `#214E9F` | **Confirmado** (links del sitio actual) | Hover de botones primarios, links |
| `brand-primary-400` | `#3A6DBF` | Derivado | Íconos secundarios, badges |
| `brand-primary-300` | `#6A95D6` | Derivado | Estados disabled, texto secundario sobre fondos oscuros |
| `brand-primary-200` | `#A5C0E8` | Derivado | Bordes sutiles en fondos oscuros |
| `brand-primary-100` | `#D5E4F5` | Derivado | Fondos de cards en light mode |
| `brand-primary-50` | `#EBF2FB` | Derivado | Fondos de sección muy sutiles |

### 2.2 Acento — Rojo Emergencia

> **Resultado de T01:** El "naranja" mencionado en `specs/02-design.md §1.1` es en realidad un **rojo** en el sitio Odoo actual. No forma parte del logo ni de la identidad visual core. Es un color funcional de UI exclusivo para el elemento de emergencia 24/7 del header.

| Token | Hex | RGB | Origen | Uso |
|---|---|---|---|---|
| `brand-emergency` | `#DD0303` | rgb(221, 3, 3) | **Confirmado** (nav del sitio actual) | Botón/ícono "Emergencia 24/7" en header |
| `brand-emergency-dark` | `#B50202` | — | Derivado | Hover del botón de emergencia |

**Decisión de marca:** El rojo de emergencia es un color **funcional de UI**, no un color de marca derivado del logo. No debe usarse para nada más allá del elemento de contacto de emergencia. En `tailwind.config.ts` se registra como token separado del sistema primario.

### 2.3 WhatsApp

El sitio Odoo actual usa `#28A745` (verde de Bootstrap), pero para el nuevo sitio se adopta el verde oficial de WhatsApp para coherencia de marca con el ícono.

| Token | Hex | Uso |
|---|---|---|
| `whatsapp` | `#25D366` | Botón flotante, CTAs de WhatsApp |
| `whatsapp-dark` | `#128C7E` | Hover del botón WhatsApp |

### 2.4 Neutrales

| Token | Hex | Uso |
|---|---|---|
| `neutral-900` | `#111827` | Texto principal (body) |
| `neutral-700` | `#374151` | Texto secundario |
| `neutral-500` | `#6B7280` | Texto muted, placeholders |
| `neutral-300` | `#D1D5DB` | Bordes, separadores |
| `neutral-100` | `#F3F4F6` | Fondos de sección alternados |
| `neutral-50` | `#F9FAFB` | Fondo base de página |

### 2.5 Semánticos

| Token | Hex | Uso |
|---|---|---|
| `success` | `#16A34A` | Confirmación de formulario |
| `error` | `#DC2626` | Errores de validación |
| `warning` | `#D97706` | Alertas informativas |

---

## 3. Logotipo

### Descripción visual
- Ícono: pin de ubicación (map pin) en navy `#123C6E` con un círculo blanco interior que contiene la silueta de un auto de frente.
- Texto: "UNIDOS POR GPS" en mayúsculas, tipografía sans-serif bold/extrabold de tipo geométrico-humanista con trazos redondeados (similar a Montserrat ExtraBold). Mismo navy `#123C6E`.
- El logo es **monocromático**: un único color navy más blanco. No tiene naranja, ni rojo, ni degradado.

### Versiones

| Versión | Archivo | Fondo | Cuándo usar |
|---|---|---|---|
| **Positivo** | `public/images/logo.png` | Blanco / claro | Sobre fondos blancos, grises claros, `neutral-50`, `brand-primary-50/100` |
| **Negativo** | `public/images/logo-negativo.webp` | Transparente (elementos en blanco) | Sobre fondos oscuros: `brand-primary-900`, `brand-primary-950`, `brand-primary-800` |

### Reglas de uso
- **Nunca** usar el logo positivo sobre fondos oscuros (navy, negro).
- **Nunca** usar el logo negativo sobre fondos claros.
- **Nunca** recolorizar, distorsionar o añadir efectos al logo.
- Espacio de protección mínimo: altura de la letra "U" en cada lado.
- Tamaño mínimo: 120px de ancho en digital.

---

## 4. Tipografía

### Tipografía del logo
El texto "UNIDOS POR GPS" en el logo utiliza una tipografía **no disponible en Google Fonts** como asset propio del logo. No se replica en el sitio.

### Tipografía del sitio web (nuevo sitio)

| Rol | Familia | Peso(s) | Variable CSS | Carga |
|---|---|---|---|---|
| Headings (H1–H4) | **Plus Jakarta Sans** | 700, 800 | `--font-heading` | `next/font/google` |
| Body / UI | **Inter** | 400, 500, 600 | `--font-body` | `next/font/google` |

**Justificación:** Plus Jakarta Sans tiene proporciones amplias y un caracter bold cercano al tono del logo (geométrico, confiable). Inter es óptimo para legibilidad en interfaces.

---

## 5. Tono del Copy

Basado en el análisis del sitio actual de Odoo:

- **Directo y orientado a la acción:** "Protección inteligente para tu vehículo", "Protege tu vehículo hoy"
- **Confianza por experiencia:** "+10 años de experiencia", "Monitoreo 24/7", "App propia"
- **Propuesta de valor clara:** "Sin pago de equipo" como diferenciador
- **Urgencia sin alarmar:** "Emergencia 24/7" como servicio, no como miedo
- **Trato cercano:** segunda persona singular ("tu vehículo", "escríbenos")
- **Idioma:** español de Perú. Sin regionalismos excluyentes.

---

## 6. Verificación de tokens vs. `specs/02-design.md §1.1`

| Token en specs | Valor anterior ("~aproximado") | Valor confirmado T01 | Estado |
|---|---|---|---|
| `brand-primary-700` | `#162D65` | `#0F3560` | Actualizado |
| `brand-primary-600` | `#1B3869` | **`#123C6E`** | **Actualizado — fuente del logo** |
| `brand-primary-500` | `#2248A0` | `#214E9F` | Actualizado |
| `brand-primary-900` | `#0C1C38` | `#0A192F` | Actualizado |
| `brand-primary-800` | `#112450` | `#0D2F48` | Actualizado |
| `brand-accent-500` | `#E85A1C` (naranja) | `#DD0303` (rojo) | **Corrección: es ROJO, no naranja. Renombrado a `brand-emergency`.** |
| `brand-accent-600` | `#C44011` | `#B50202` | Actualizado (hover del rojo) |

> **Nota para T03:** Al implementar `tailwind.config.ts`, usar los valores de esta tabla, **no** los de `specs/02-design.md §1.1`. Este archivo es la fuente de verdad post-T01.
