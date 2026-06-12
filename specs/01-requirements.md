# Requerimientos — Unidos por GPS Web
_Versión 1.0 — 2026-06-11_

---

## 1. Objetivo de Negocio

Construir un sitio web nuevo de alta conversión para **Unidos por GPS** que reemplace el sitio actual en Odoo, superándolo en diseño, performance, SEO y experiencia móvil. El sitio debe convertir visitantes en leads cualificados vía WhatsApp y formulario de cotización.

### Métricas de Éxito

| Métrica | Línea base | Objetivo (3 meses post-lanzamiento) |
|---|---|---|
| Leads vía WhatsApp / mes | [DATO REAL PENDIENTE] | +30% vs. línea base |
| Leads vía formulario / mes | 0 (sin formulario en Odoo) | ≥ 20 leads/mes |
| Lighthouse Performance | [DATO REAL PENDIENTE] | ≥ 95 |
| Lighthouse Accessibility | [DATO REAL PENDIENTE] | ≥ 95 |
| LCP (Largest Contentful Paint) | [DATO REAL PENDIENTE] | < 2.5 s |
| CLS (Cumulative Layout Shift) | [DATO REAL PENDIENTE] | < 0.1 |
| Tasa de rebote móvil | [DATO REAL PENDIENTE] | < 55% |
| Posición orgánica "GPS vehicular Lima" | [DATO REAL PENDIENTE] | Top 10 en 6 meses |

> **Nota:** Los valores "[DATO REAL PENDIENTE]" deben completarse con datos del cliente o de herramientas de analítica (Google Analytics, Search Console) antes del lanzamiento para poder medir el delta real.

---

## 2. Audiencias

### 2.1 Particular B2C — Dueño de vehículo

**Perfil:** Persona natural, 25–55 años, Perú urbano (Lima y principales ciudades de provincias). Siente inseguridad vehicular cotidiana. Navega mayoritariamente desde móvil. Decide por recomendación, precio y facilidad.

**Jobs-to-be-done:**
1. "Quiero saber que mi vehículo está seguro aunque yo no esté presente."
2. "Si me lo roban, quiero poder rastrearlo o bloquearlo de inmediato."
3. "Quiero que alguien lo instale sin que se note y que yo solo use el app."
4. "Necesito saber el precio antes de decidir; quiero cotizar sin compromiso."

**Objeciones comunes a resolver en el sitio:**
- ¿Funciona bien la app? ¿Qué pasa si falla el soporte?
- ¿Me cobran por el equipo GPS? _(diferenciador clave: sin pago de equipo)_
- ¿La instalación queda oculta para que un ladrón no la encuentre?

### 2.2 Empresa B2B — Gestor de flotas

**Perfil:** Gerente de operaciones, jefe de logística o dueño de empresa con 2–50 vehículos. Prioriza control operativo, trazabilidad y reducción de costos. Toma decisiones racionales basadas en ROI.

**Jobs-to-be-done:**
1. "Necesito saber la ubicación de todas mis unidades en tiempo real desde un solo panel."
2. "Quiero alertas si un conductor se desvía de ruta o usa el vehículo fuera de horario."
3. "Necesito reportes de kilometraje y tiempos para auditar operaciones."
4. "Si me roban una unidad, necesito respuesta y apoyo inmediato para recuperarla."

---

## 3. Mapa del Sitio

```
/                                   → Home
/servicios/gps-vehicular            → GPS Vehicular Particular
/servicios/gps-flotas               → GPS para Flotas
/servicios/unidos-liberty           → Unidos Liberty (GPS portátil)
/servicios/dashcam-ia               → Dashcam con IA
/nosotros                           → Quiénes somos
/cotizar                            → Formulario de cotización + contacto
/politica-de-privacidad             → Política de privacidad
```

Todas las páginas deben ser indexables (no `noindex`) excepto las que se defina explícitamente.

---

## 4. Requerimientos Funcionales

### 4.1 Formulario de Cotización

**Campos:**
- Nombre completo (texto, requerido)
- Teléfono / WhatsApp (texto, requerido, validación de formato peruano +51 o 9 dígitos)
- Email (email, opcional)
- Tipo de servicio (select: GPS Vehicular, GPS Flotas, Unidos Liberty, Dashcam con IA, No sé / Necesito asesoría)
- Número de vehículos (número, requerido)
- Mensaje adicional (textarea, opcional, max 500 caracteres)

**Comportamiento:**
- Validación en cliente (HTML5 + JavaScript) con mensajes de error en línea, en español.
- Al enviar: POST a `/api/leads` (server-side).
- En caso de éxito: mensaje de confirmación inline ("¡Gracias! Te contactaremos en menos de 24 horas.") + opción de ir a WhatsApp para consulta inmediata.
- En caso de error de servidor: mensaje genérico, sin exponer detalles técnicos.
- Anti-duplicado: bloquear reenvío si mismo teléfono/email en los últimos 60 segundos (validación en API route).
- Accesible: `<label>` explícito por campo, errores asociados con `aria-describedby`, focus management tras envío.

### 4.2 Botón Flotante WhatsApp

- Presente en **todas** las páginas.
- Posición: esquina inferior derecha, `position: fixed`.
- Link: `https://wa.me/51933452214?text=Hola%2C%20quiero%20cotizar%20un%20GPS`
- `target="_blank" rel="noopener noreferrer"`.
- Icono decorativo con `aria-hidden="true"`; botón con `aria-label="Chatear por WhatsApp"`.
- En móvil: no debe cubrir navegación inferior ni botones de acción principales.
- Animación sutil de entrada al cargar la página.

### 4.3 Click-to-Call Emergencia 24/7

- Teléfono clicable en header (desktop: texto + ícono; móvil: solo ícono con tooltip).
- Link: `tel:+51933452214`.
- Disponible también en footer y en la página `/cotizar`.
- El número debe ser siempre visible o accesible con un toque en cualquier página.

### 4.4 Prueba Social

> **Política de datos:** PROHIBIDO inventar cifras, testimonios o logos de clientes. Usar solo información real proporcionada por el cliente. Donde falten datos, usar `[DATO REAL PENDIENTE]` visible en el código y en placeholder UI.

**Sección de cifras (stats confirmadas en el sitio actual):**
- "+10 años de experiencia"
- "Monitoreo 24/7"
- "App propia"
- "Sin pago de equipo"
- Cifras adicionales (ej. vehículos protegidos, ciudades): `[DATO REAL PENDIENTE — confirmar con cliente]`

**Testimonios:**
- Sección con cards de clientes reales: nombre, tipo de cliente, testimonio.
- Contenido: `[DATO REAL PENDIENTE — requiere testimonios reales del cliente]`
- Placeholder en diseño debe verse como contenido real para la aprobación visual en T06.

**Logos de clientes B2B:**
- Banda de logos de empresas clientes.
- Contenido: `[DATO REAL PENDIENTE — requiere logos de clientes B2B autorizados]`

---

## 5. Contenido a Preservar del Sitio Actual

Los siguientes contenidos del sitio en Odoo deben rescatarse y elevarse en la nueva web:

### 5.1 Hero
- Headline: "Protección inteligente para tu vehículo"
- Sub-headline: a definir/mejorar en copywriting (puede mejorar el copy actual)
- CTA principal: "Escríbenos por WhatsApp" → wa.me/51933452214

### 5.2 Banda de Stats (4 ítems confirmados)
| Stat | Valor confirmado |
|---|---|
| Experiencia | +10 años de experiencia |
| Monitoreo | 24/7 |
| App | App propia (iOS y Android) |
| Costo de equipo | Sin pago de equipo |

### 5.3 Sección Pain Point — "¿Qué pasa si te roban el vehículo?"
Sección de contraste emocional (fondo oscuro) con los siguientes bullet points:
- No cobras si trabajas con él
- Pierdes tu herramienta de trabajo
- Debes responder a tiempo

Seguida de la sección de solución: "Así protegemos tu vehículo":
- Ubicación en tiempo real
- Navegación remota
- Alertas inteligentes
- Control total desde app

### 5.4 Servicios (4 productos)

**GPS Vehicular Particular**
- Rastreo GPS en tiempo real
- Alertas de movimiento y zona
- Apagado remoto del motor
- App iOS y Android
- Instalación gratuita y oculta

**GPS para Flotas**
- Control de flota empresarial en tiempo real
- Reportes de recorrido y kilometraje
- Alertas de zona y horario
- Gestión de múltiples vehículos desde un panel
- Soporte empresarial dedicado

**Unidos Liberty (GPS Portátil)**
- Dispositivo GPS portátil, sin necesidad de vehículo
- Para personas, niños, adultos mayores, paquetes y entregas
- Rastreo en tiempo real desde la app
- Sin instalación requerida

**Dashcam con IA**
- Cámara de seguridad vehicular con grabación continua
- Inteligencia artificial para detección de incidentes
- Grabación ante impactos o movimiento brusco
- [DATO REAL PENDIENTE — verificar features exactas con el cliente]

### 5.5 Stepper "¿Cómo funciona?" (4 pasos)
| Paso | Título | Descripción |
|---|---|---|
| 1 | Agenda la instalación | Agendamos la cita y nuestros técnicos instalan el GPS en tu vehículo de forma oculta |
| 2 | Descarga la app | Accede a nuestra plataforma desde iOS o Android en minutos |
| 3 | Monitorea tu vehículo | Observa la ubicación en tiempo real y recibe alertas 24/7 |
| 4 | Activa en caso de crisis | En caso de robo, apaga el motor remotamente y comunícate con nuestro equipo |

---

## 6. Requerimientos No Funcionales

### 6.1 Responsive y Mobile-First
- Diseño funcional desde **360px** de ancho.
- Tráfico mayoritariamente móvil → prioridad absoluta en experiencia móvil.
- Sin scroll horizontal en ningún breakpoint.
- Touch targets ≥ 44×44px.
- Breakpoints: 360px (móvil base), 768px (tablet), 1280px (desktop).

### 6.2 Performance
- Lighthouse Performance ≥ 95 en producción (medido en Vercel, no localhost).
- LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Imágenes en formato WebP/AVIF con `next/image`, lazy loading automático, srcset.
- Hero image: preload (`priority` en `next/image`).
- Fuentes Google con `font-display: swap` y preload de variante critical path.
- Sin bloqueo de render en recursos no críticos.
- Bundle JS mínimo: code splitting por ruta automático (Next.js App Router).

### 6.3 SEO Técnico
- `<title>` y `<meta description>` únicos y optimizados por página (Metadata API de Next.js).
- Open Graph (`og:title`, `og:description`, `og:image`) en todas las páginas.
- Twitter Card en todas las páginas.
- `sitemap.xml` generado automáticamente con `app/sitemap.ts`.
- `robots.txt` permitiendo indexación general.
- URLs limpias y semánticas según el mapa del sitio de §3.
- Canonical tags en páginas que puedan tener contenido similar.
- Schema.org `LocalBusiness` en la home (nombre, dirección, teléfono, horarios).
- Schema.org `Service` en cada página de servicio.

### 6.4 Accesibilidad (WCAG 2.1 Nivel AA)
- Contraste de color: ≥ 4.5:1 en texto normal (< 18px), ≥ 3:1 en texto grande (≥ 18px) y componentes UI.
- Navegación completa por teclado; focus visible en todos los elementos interactivos.
- `alt` descriptivo en imágenes informativas; `alt=""` en imágenes puramente decorativas.
- Landmarks semánticos: `<header>`, `<nav>`, `<main>`, `<footer>` en cada página.
- Formularios con `<label>` explícito asociado a cada input y mensajes de error asociados con `aria-describedby`.
- Animaciones respetan `prefers-reduced-motion`: reducir o eliminar si el usuario lo prefiere.
- Página navegable sin JavaScript activado (content y estructura deben ser legibles).

### 6.5 Seguridad
- Supabase service key: solo en variables de entorno del servidor (`process.env`), nunca expuesta al cliente.
- RLS (Row Level Security) activado en Supabase: solo la API route puede insertar en `leads`.
- Security headers en `next.config.ts`: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, Content Security Policy básico.
- Validación de inputs en servidor (API route): sanitización de campos de texto, validación de tipos y longitud.
- Sin datos personales de leads en logs de cliente o en URL params.
- Variables sensibles en `.env.local` (no en repositorio). Archivo `.env.example` en repo con keys vacías como documentación.
