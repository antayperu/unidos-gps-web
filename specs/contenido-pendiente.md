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

**Cómo se usa:** Foto con dos comportamientos según breakpoint:
- **Mobile / tablet (< 1024 px):** Imagen de fondo a pantalla completa con overlay navy al 70% (`bg-brand-primary-900/70`), texto y CTAs encima. `object-cover object-center`.
- **Desktop (≥ 1024 px):** Tarjeta redondeada en la columna derecha del hero, aspecto 4:3, `object-cover`. La foto mide 480 px de ancho en el layout desktop.

**Resolución mínima:** 960 × 720 px (aspecto 4:3)  
**Aspecto:** 4:3 — no 16:9. Una foto cuadrada o ligeramente apaisada funciona mejor.  
**Zona segura:** El centro de la imagen es lo que más se ve. Evitar elementos importantes en los bordes.

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

## Logos de entidades homologadoras — `public/images/logos/`

**Componente:** [components/ui/HomologatorCard.tsx](../components/ui/HomologatorCard.tsx)  
**Usado en:** [app/(marketing)/nosotros/page.tsx](../app/(marketing)/nosotros/page.tsx) — sección "Homologados por"

### Archivos requeridos

| # | Archivo | Carpeta destino | Entidad completa |
|---|---|---|---|
| 1 | `mtc.png` | `public/images/logos/` | Ministerio de Transportes y Comunicaciones |
| 2 | `osiptel.png` | `public/images/logos/` | Organismo Supervisor de Inversión Privada en Telecomunicaciones |
| 3 | `sutran.png` | `public/images/logos/` | Superintendencia de Transporte Terrestre de Personas, Carga y Mercancías |
| 4 | `osinergmin.png` | `public/images/logos/` | Organismo Supervisor de la Inversión en Energía y Minería |

### Especificaciones técnicas

**Formato recomendado: PNG con fondo transparente**
- Los logos institucionales peruanos suelen incluir texto + símbolo. PNG preserva la transparencia, lo que permite que se vean bien sobre el fondo blanco de la tarjeta.
- **No usar JPG** — no soporta transparencia; los logos quedarían con fondo blanco cuadrado que choca visualmente.
- **WebP con transparencia** también funciona — el componente acepta cualquier formato que el browser soporte.
- **SVG** es el formato ideal si la entidad lo provee. En ese caso cámbia la extensión en `HOMOLOGATORS` dentro de `nosotros/page.tsx` (un cambio de línea por logo).

**Resolución mínima:** Usa el archivo oficial de la entidad (suelen ser de alta resolución). El componente renderiza el logo en un contenedor de `64 px de alto × ancho de la tarjeta` con `object-contain` — cualquier logo ≥ 200 × 80 px se verá nítido en Retina.

**Zona segura:** El logo se centra automáticamente con `object-contain`. No se recorta — el aspecto completo es siempre visible.

### Cómo conseguirlos

- **MTC:** mtc.gob.pe → sección "Prensa" o "Identidad institucional"
- **OSIPTEL:** osiptel.gob.pe → "Acerca de OSIPTEL" → "Imagen institucional"
- **SUTRAN:** sutran.gob.pe → sección de descargas / prensa
- **OSINERGMIN:** osinergmin.gob.pe → "Comunicaciones" → "Imagen institucional"
- Alternativa: solicitar directamente al área de comunicaciones de cada entidad.

### Proceso de reemplazo

1. Descarga el logo oficial (PNG con transparencia) de cada entidad.
2. Renombra exactamente como indica la tabla: `mtc.png`, `osiptel.png`, etc.
3. Crea la carpeta `public/images/logos/` si no existe y coloca los archivos ahí.
4. Ejecuta `npm run dev` — los logos aparecen automáticamente. **Sin cambios de código.**
5. Verifica a 360 px, 768 px y 1280 px que los logos se vean proporcionales y centrados.
6. Haz commit y push → Vercel despliega.

---

## Proceso de reemplazo (cuando tengas las fotos)

1. Coloca los archivos en las carpetas indicadas con exactamente los nombres listados.
2. Si la foto es JPG, renómbrala con extensión `.webp` — Next.js la procesará igual (acepta JPG con extensión webp). Si quieres convertir a WebP real, usa [Squoosh](https://squoosh.app) o `cwebp`.
3. Ejecuta `npm run dev` y verifica visualmente en `localhost:3000` a 360px, 768px y 1280px.
4. Haz commit y push → Vercel despliega automáticamente.

No hay cambios de código necesarios — solo reemplazar los archivos.
