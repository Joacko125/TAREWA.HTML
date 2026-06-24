# CLAUDE.md — TAREWA web

Sitio de **TAREWA**, fabricante argentino de resistencias eléctricas industriales (+60 años).
Comprador técnico (ingeniería de planta, mantenimiento, compras). La web vende
**credibilidad técnica + facilidad para pedir cotización**.

## Stack
- **Astro** (`astro@^6`) puro, **CSS plano** (sin Tailwind). Salida estática.
- Fuentes **self-hosted** vía `@fontsource-variable/*` (importadas en `BaseLayout.astro`).
- Deploy en Netlify (`netlify.toml`). No mergear a `master` ni deployar sin pedirlo.
- `npm run dev` / `npm run build` / `npm run preview`.

## Estructura
- `src/layouts/BaseLayout.astro` — `<head>` (SEO/OG/JSON-LD), nav, footer, scripts globales.
- `src/components/` — `Header`, `Footer`, `WhatsAppButton`, `CarruselHistoria`.
- `src/pages/` — home (`index.astro`), `productos/` (índice + `[producto]`), `nosotros`,
  `servicios`, `catalogos`, `blog/` (índice + `[...slug]`).
- `src/data/` — `productos.js`, `catalogos.js`, `historia.js`, `contacto.js` (fuente única
  de datos; ver `src/data/README.md`).
- `src/content/blog/*.md` — content collection (schema en `src/content.config.ts`).
- `public/assets/` — imágenes (`.avif`/`.webp`/`.jpg`) y catálogos PDF.

## Diseño
**Leé [`DESIGN.md`](DESIGN.md) antes de tocar estilos.** Resumen:
- Tokens centralizados en `src/styles/global.css` (`:root`). **Cero hex de paleta
  hardcodeados** en componentes — usar `var(--token)`.
- Paleta clara 60-30-10: `--papel`/`--lino` (60%), `--grafito`/`--acero` (30%),
  `--rojo` `#ED3237` + `--amarillo` `#FFCC29` de marca (≤10%, valores EXACTOS del logo).
- Firma: **filamento incandescente** (`--filamento`, único degradé rojo→amarillo).
- Tipografía: Space Grotesk (display), Inter (cuerpo), JetBrains Mono (datos/specs).
- Accesibilidad AA; respetar `prefers-reduced-motion`.

## Reglas
- No cambiar contenido/copy salvo microcopy de UI. No cambiar rutas/URLs.
- No romper content collections, CTAs de WhatsApp ni descargas de PDF.
- Preservar meta tags, títulos y OG. `alt` en imágenes.
