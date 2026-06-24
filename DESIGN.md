# Sistema de diseño · TAREWA

Guía viva del cambio de imagen integral del sitio. **Todos los tokens viven en
[`src/styles/global.css`](src/styles/global.css)** (custom properties en `:root`).
Regla de oro: **cero hex de paleta hardcodeados en componentes** — siempre `var(--token)`.

> North star: profesionalismo serio + minimalismo de vanguardia. Llamativo desde la
> precisión (espaciado, tipografía con carácter, color disciplinado), no desde la
> saturación. El origen de lo distintivo es el producto: calor, ingeniería, 60 años de fábrica.

---

## 1. Paleta y regla 60-30-10

El impacto se gana con la proporción, no con color de más.

| Token | Hex | Rol | Proporción |
|---|---|---|---|
| `--papel` | `#F4F3F0` | Fondo dominante (off-white cálido, **nunca** blanco puro) | **60%** |
| `--lino` | `#FAF8F4` | Superficie de tarjetas / elevación leve | (parte del 60%) |
| `--grafito` | `#1B1D21` | Texto principal + secciones oscuras de contraste | **30%** |
| `--grafito-2` | `#24272D` | Superficie elevada dentro de zonas oscuras | (parte del 30%) |
| `--acero` | `#5B6670` | Texto secundario sobre claro (AA 5.3:1) | (parte del 30%) |
| `--acero-claro` | `#A7AEB6` | Texto secundario sobre oscuro (AA 7.5:1) | — |
| `--linea` | `#DAD8D2` | Bordes / divisores hairline (0.5–1px) sobre claro | — |
| `--linea-dark` | `rgba(244,243,240,.14)` | Hairline sobre oscuro | — |
| `--rojo` | `#ED3237` | **Marca · acción/foco** (valor EXACTO del logo) | parte del **10%** |
| `--amarillo` | `#FFCC29` | **Marca · energía/destacado** (valor EXACTO del logo) | parte del **10%** |
| `--rojo-tinta` | `#C2292D` | Derivado accesible: CTA y texto rojo sobre papel (AA) | parte del 10% |
| `--rojo-hover` | `#A8211F` | Hover del CTA primario | — |
| `--whatsapp` | `#0F7D41` | Verde profundo para botones WhatsApp (blanco AA 5.2:1) | funcional |

**Rojo y amarillo son de marca, no negociables.** Se extrajeron por muestreo de píxeles
del logo (`public/assets/logo.png`): rojo `#ED3237`, amarillo `#FFCC29`. Como el rojo de
marca puro no llega a AA para texto fino/botones sobre papel, se usa el derivado
`--rojo-tinta` en esos casos y se reserva `--rojo` para acentos grandes, el punto de marca
y el filamento.

### Roles del color (para que rojo y amarillo NO compitan)
- **Rojo** = acción y foco: CTA primario ("Pedí tu cotización"), estado/links activos,
  punto de marca, códigos de producto en mono, inicio del filamento. Escaso → pega.
- **Amarillo** = energía y señalización secundaria: acentos sobre secciones oscuras
  (números, palabras destacadas), punto de features, fin del filamento. **Nunca como
  texto fino sobre papel** (no llega a AA); texto sobre amarillo siempre en `--grafito`.
- **Regla dura:** rojo + amarillo sumados **≤ 10%** de la superficie. Si una sección "se
  pone roja", está mal.

---

## 2. Elemento de firma — "filamento incandescente"

Una línea fina con degradé **rojo → amarillo**, nacida de una resistencia que se calienta.
Es el **único** degradé permitido en todo el sitio; el resto es plano.

```css
--filamento: linear-gradient(90deg, var(--rojo) 0%, var(--amarillo) 100%);
```

Usos disciplinados (clase utilitaria `.filamento`, 2px):
- Borde superior del hero, divisor del footer y borde superior del mapa.
- Tick decorativo bajo el nav al scrollear (`nav.scrolled::after`).
- Subrayado que "se enciende" en hover de links del nav y bordes de tarjetas
  (producto, servicio, catálogo, blog).

---

## 3. Tipografía (self-hosted, Fontsource · `font-display: swap`)

| Token | Familia | Uso |
|---|---|---|
| `--font-display` | **Space Grotesk Variable** | Títulos / display (peso 600) |
| `--font-body` | **Inter Variable** | Cuerpo (400) y énfasis (500/600) |
| `--font-mono` | **JetBrains Mono Variable** | Datos, specs, códigos, fechas, eyebrows, fichas técnicas |

Se instalan vía `@fontsource-variable/*` e importan en
[`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro). Quedan empaquetadas en el
build (woff2 en `dist/_astro/`), sin CDNs externos.

La **mono en fichas técnicas y números** es clave: grita "ingeniería" y se ve intencional.

### Escala (12 / 14 / 16 / 20 / 28 / 40 / 56, fluida)
`--fs-xs .75rem` · `--fs-sm .875` · `--fs-base 1` · `--fs-md 1.25` · `--fs-lg ~28` ·
`--fs-xl ~40` · `--fs-2xl ~56`. Pesos: 400 cuerpo, 500 énfasis, 600 display. Sentence case en toda la UI.

---

## 4. Composición y ritmo

- **60-30-10 estricto.** Off-white sobre blanco puro, siempre.
- Ancho de contenido máx. `--maxw: 1280px`; gutter fluido `--gutter`; ritmo vertical
  `--space-section`.
- Whitespace generoso; se permite **asimetría** (ver hero) para romper la monotonía.
- **Alternar superficies** para dar ritmo y **una sección `--grafito` de contraste por
  página**:
  - Home → bloque oscuro "60 años" (`.index-summary`).
  - Nosotros → caja de stats (`.nosotros-box`).
  - Inner pages → footer grafito como ancla de contraste.
- Toda cifra/dato técnico va en **mono**.

---

## 5. Movimiento

Reveal on-scroll suave (`.reveal` + IntersectionObserver), filamento que se enciende en
hover, nav transparente→sólido al scrollear. Todo se desactiva con
`@media (prefers-reduced-motion: reduce)`.

---

## 6. Accesibilidad (AA)

- Contraste mínimo AA verificado para texto (acero 5.3:1, acero-claro 7.5:1, blanco sobre
  rojo-tinta 5.75:1, sobre whatsapp 5.2:1, amarillo sobre grafito 11:1).
- Amarillo solo como área/acento sobre oscuro; **nunca** texto fino sobre papel.
- `:focus-visible` global (outline rojo-tinta 2px). Jerarquía de headings correcta.
  `alt` preservados.

---

## 7. Qué NO hacer

- ❌ Look genérico "crema + display serif + terracota" (cliché de IA). Acá: display
  grotesca técnica + acentos rojo/amarillo de marca.
- ❌ Blanco puro como fondo dominante. ❌ Sobreusar el rojo (>10%).
- ❌ Degradés por todos lados: el único es el filamento. ❌ Neón. ❌ Fotos stock de relleno.
- ❌ Romper build, rutas, content collections, CTAs de WhatsApp ni descargas de PDF.
