# Guía de imágenes pendientes — Unidos por GPS
_Actualizada 2026-06-14_

Esta guía describe exactamente qué imágenes necesitan reemplazarse, dónde dejarlas y qué nombre exacto deben tener. Los logos ya están en su lugar (se copiaron en T04). Lo que falta son las fotos de contenido.

---

## Resumen rápido

| # | Archivo a entregar | Carpeta destino | Resolución mínima | Formato |
|---|---|---|---|---|
| 1 | `hero-bg.webp` | `public/images/` | 1920 × 1080 px | WebP o JPG |
| 2 | `gps-vehicular.webp` | `public/images/services/` | 800 × 450 px | WebP o JPG |
| 3 | `gps-flotas.webp` | `public/images/services/` | 800 × 450 px | WebP o JPG |
| 4 | `unidos-liberty.webp` | `public/images/services/` | 800 × 450 px | WebP o JPG |
| 5 | `dashcam-ia.webp` | `public/images/services/` | 800 × 450 px | WebP o JPG |

> **Formato:** WebP es ideal (menor peso). JPG también funciona — Next.js lo convierte a WebP/AVIF automáticamente al servir. PNG no recomendado para fotos (peso excesivo).
>
> **Coloca los originales en las mismas carpetas con exactamente esos nombres de archivo.** El código los referencia directamente; si el nombre difiere, la imagen no cargará.

---

## Detalle por imagen

### 1. Hero principal — `public/images/hero-bg.webp`

**Componente:** [components/home/Hero.tsx](../components/home/Hero.tsx)

**Cómo se usa:** Imagen de fondo full-width que ocupa el 100% del viewport. Se muestra con `object-cover` (recorta para cubrir el área) y tiene un overlay de gradiente navy encima. El texto blanco del hero queda sobre ella.

**Resolución mínima:** 1920 × 1080 px  
**Aspecto:** 16:9 o más ancho (panorámica)  
**Zona segura:** El centro de la imagen es lo que más se ve en móvil. Evitar elementos importantes en los extremos izquierdo/derecho que puedan quedar cortados en pantallas estrechas.

**Sugerencia de contenido:** Vehículo moderno (auto o camioneta) con GPS instalado, ciudad nocturna de Lima, o flota de vehículos. Tonos oscuros son ideales porque el overlay ya oscurece la imagen, pero no es obligatorio.

**Fuente sugerida:** Sitio actual `unidosporgps.pe` (sección principal) o solicitarla al cliente.

---

### 2. GPS Vehicular Particular — `public/images/services/gps-vehicular.webp`

**Componentes:**
- [components/ui/ServiceCard.tsx](../components/ui/ServiceCard.tsx) — tarjeta en la sección ServicesPreview de la Home
- [components/services/ServicePage.tsx](../components/services/ServicePage.tsx) — imagen destacada en la página `/servicios/gps-vehicular`

**Referenciada en:**
- [content/services.ts](../content/services.ts)
- [content/servicePages.ts](../content/servicePages.ts)

**Cómo se usa:** Se renderiza con `object-cover` dentro de un contenedor de aspecto 16:9 fijo. En la ServiceCard es una thumbnail; en la ServicePage es el hero de la página.

**Resolución mínima:** 800 × 450 px (aspecto 16:9)  
**Recomendado para nitidez en Retina:** 1200 × 675 px

**Sugerencia de contenido:** GPS instalado en vehículo particular (auto), o mano sosteniendo un dispositivo GPS, o pantalla de la app con mapa.

---

### 3. GPS para Flotas — `public/images/services/gps-flotas.webp`

**Componentes:** Mismos que #2 (ServiceCard + ServicePage `/servicios/gps-flotas`)

**Referenciada en:**
- [content/services.ts](../content/services.ts)
- [content/servicePages.ts](../content/servicePages.ts)

**Resolución mínima:** 800 × 450 px (aspecto 16:9)

**Sugerencia de contenido:** Flota de camiones o vans con logo de la empresa, dashboard de monitoreo de flotas en pantalla, o múltiples vehículos estacionados.

---

### 4. Unidos Liberty — `public/images/services/unidos-liberty.webp`

**Componentes:** Mismos que #2 (ServiceCard + ServicePage `/servicios/unidos-liberty`)

**Referenciada en:**
- [content/services.ts](../content/services.ts)
- [content/servicePages.ts](../content/servicePages.ts)

**Resolución mínima:** 800 × 450 px (aspecto 16:9)

**Sugerencia de contenido:** Dispositivo GPS portátil (pequeño, sin cables), mochila o bolso con el dispositivo, o persona usando la app de rastreo en el teléfono.

---

### 5. Dashcam con IA — `public/images/services/dashcam-ia.webp`

**Componentes:** Mismos que #2 (ServiceCard + ServicePage `/servicios/dashcam-ia`)

**Referenciada en:**
- [content/services.ts](../content/services.ts)
- [content/servicePages.ts](../content/servicePages.ts)

**Resolución mínima:** 800 × 450 px (aspecto 16:9)

**Sugerencia de contenido:** Dashcam instalada en el parabrisas, captura de pantalla de la cámara con overlay de detección de IA, o interior de vehículo con la cámara visible.

---

## Logos (ya están en producción — no reemplazar salvo actualización de marca)

| Archivo | Ubicación | Componentes que lo usan |
|---|---|---|
| `logo.png` | `public/images/logo.png` | Header, páginas 404 |
| `logo-negativo.webp` | `public/images/logo-negativo.webp` | Footer |

Estos se copiaron desde `design/referencia-actual/` en T04 y son los logos reales de la marca. Solo reemplazar si el cliente actualiza su identidad visual.

---

## Proceso de reemplazo (cuando tengas las fotos)

1. Coloca los archivos en las carpetas indicadas con exactamente los nombres listados.
2. Si la foto es JPG, renómbrala con extensión `.webp` — Next.js la procesará igual (acepta JPG con extensión webp). Si quieres convertir a WebP real, usa [Squoosh](https://squoosh.app) o `cwebp`.
3. Ejecuta `npm run dev` y verifica visualmente en `localhost:3000` a 360px, 768px y 1280px.
4. Haz commit y push → Vercel despliega automáticamente.

No hay cambios de código necesarios — solo reemplazar los archivos.
