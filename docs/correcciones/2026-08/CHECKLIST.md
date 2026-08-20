# Correcciones del jefe — TAREWA web (2026-08)

Inventario de las correcciones marcadas en `CORRECCIONES/*.png` (una imagen por
diapositiva). Cada entrada indica archivo(s)/componente(s) exactos, el cambio
concreto y el estado (**APLICABLE** / **AMBIGUA**).

Leyenda de imágenes:
- `Web Tarewa 2026-1.png` → Home / hero
- `Web Tarewa 2026-2.png` → Home / sección `#productos`
- `Web Tarewa 2026-3.png` → Home / sección `#contacto`
- `Web Tarewa 2026-4.png` → Página producto BL-001 (Blindadas)
- `Web Tarewa 2026-5.png` → Página producto SCM-003 (Zuncho)
- `Web Tarewa 2026-6.png` → Página producto PC-007 (Pantallas Infrarrojas)
- `Web Tarewa 2026-7.png` → Página producto PLA-008 (Planas)
- `Web Tarewa 2026-10.png` → Home / sección resumen "¿Por qué elegir TAREWA?"

---

## C01 — Menú siempre fijo en el encabezado
- **Imagen:** `Web Tarewa 2026-1.png`
- **Pide el jefe (textual):** "dejar fijo el menú siempre en el encabezado (no solo al scrollear)"
- **Archivos/componentes:** `src/pages/index.astro` (`<BaseLayout navReveal>`),
  `src/pages/nosotros.astro` (`navReveal`). El nav (`#navbar`) ya es
  `position: fixed` en `src/styles/global.css`; el efecto de ocultarlo lo
  produce la prop `navReveal` (clase `.nav-reveal` + IntersectionObserver del
  hero en `BaseLayout.astro`).
- **Cambio concreto:** quitar la prop `navReveal` en las páginas que la usan para
  que el nav quede visible/fijo desde la carga y no aparezca recién al pasar el
  hero. Se aplica también en `/nosotros` porque comparte exactamente el mismo
  mecanismo de reveal y la instrucción es general ("siempre").
- **Estado:** APLICABLE

## C02 — Acortar la descripción de las fichas de producto a 3 líneas
- **Imagen:** `Web Tarewa 2026-2.png`
- **Pide el jefe (textual):** "acortar a 3 líneas la descripción para que las
  fichas de abajo suban y reducir el scrolling."
- **Archivos/componentes:** `src/pages/index.astro`, sección `#productos`
  (bloque `<style>` scopeado). El párrafo es `.producto-body p`.
- **Cambio concreto:** clamp visual a 3 líneas con `-webkit-line-clamp: 3` sobre
  `#productos .producto-body p` (sin tocar el copy, sin propagar a `/productos`).
- **Estado:** APLICABLE

## C03 — Reordenar los productos por prioridad
- **Imagen:** `Web Tarewa 2026-2.png`
- **Pide el jefe (textual):** "Re ordenar los productos según los que queremos
  potenciar: Blindadas, Bridas, cartuchos, pantallas, bancos de carga, etc..."
- **Archivos/componentes:** `src/data/productos.js` y el orden hardcodeado de las
  cards en `src/pages/index.astro`.
- **Cambio concreto:** reordenar el catálogo. **No se puede resolver sin
  ambigüedad:** el orden pedido menciona productos que hoy no existen en el
  catálogo ("Bridas", "cartuchos") y termina en "etc...", dejando sin definir el
  orden del resto (Tubulares, Sensores, Accesorios, Especiales, Suspendidas).
- **Estado:** AMBIGUA

## C04 — Subir el botón "Escribinos por WhatsApp" arriba de todo (contacto)
- **Imagen:** `Web Tarewa 2026-3.png`
- **Pide el jefe (textual):** "subir el cartel este arriba de todo" (la flecha
  apunta al botón verde "Escribinos por WhatsApp").
- **Archivos/componentes:** `src/pages/index.astro`, sección `#contacto`
  (`<a class="contacto-wa">`, hoy al final de `.contacto-info`). CSS en
  `src/styles/global.css` (`.contacto-grid`, `.contacto-wa`).
- **Cambio concreto:** mover el enlace `.contacto-wa` desde el fondo de la
  columna de info a la parte superior del `#contacto` (después del header), como
  banner a todo el ancho arriba de las columnas info/formulario.
- **Estado:** APLICABLE

## C05 — Agregar "Tu cotización en menos de 24 hs" (contacto)
- **Imagen:** `Web Tarewa 2026-3.png`
- **Pide el jefe (textual):** "tu cotización en menos de 24hs" (anotación pegada
  al subtítulo del header de contacto).
- **Archivos/componentes:** `src/pages/index.astro`, header de `#contacto`.
- **Cambio concreto:** agregar el texto como microcopy destacado (badge) debajo
  del subtítulo "Contanos qué necesitás…".
- **Estado:** APLICABLE

## C06 — Botón "Conseguí modelos standard en stock acá" (MercadoLibre)
- **Imágenes:** `Web Tarewa 2026-4.png`, `-5.png`, `-6.png`, `-7.png` (repetido en
  4 páginas de producto distintas con la misma URL).
- **Pide el jefe (textual):** "Agregar botón de: Consegui modelos standard en
  stock acá: www.mercadolibre.com.ar/pagina/tarewacalefactoresindustriales"
- **Archivos/componentes:** `src/pages/productos/[producto].astro` (card CTA
  `.producto-cta-card`).
- **Cambio concreto:** agregar un enlace/botón con ese texto apuntando a
  `https://www.mercadolibre.com.ar/pagina/tarewacalefactoresindustriales`
  (target `_blank`) en la card CTA de la plantilla de producto. Al ser una URL de
  tienda genérica marcada en 4 productos distintos, se aplica a todas las páginas
  de producto.
- **Estado:** APLICABLE

## C07 — Texto + loguito ISO 9001
- **Imágenes:** `Web Tarewa 2026-1.png` y `Web Tarewa 2026-10.png`
- **Pide el jefe (textual):** "agregar en alguna parte del texto que contamos con
  normas ISO 9001 (y poner el loguito)"
- **Archivos/componentes:** indefinido (hero del index y/o sección resumen).
- **Cambio concreto:** requiere (a) el archivo del logo ISO 9001 —no está en
  `public/assets` ni en la carpeta de correcciones—, (b) la redacción exacta y
  (c) la ubicación precisa. Además es una afirmación de certificación (cambio de
  contenido, no microcopy).
- **Estado:** AMBIGUA

## C08 — BL-001: agregar "fundida en aluminio" en fotos y texto
- **Imagen:** `Web Tarewa 2026-4.png`
- **Pide el jefe (textual):** "Agregar alguna fundida en aluminio en las fotos y
  en el texto."
- **Archivos/componentes:** `src/data/productos.js` (`resistencias-blindadas`) y
  `public/assets/productos/resistencias-blindadas/`.
- **Cambio concreto:** requiere foto(s) nueva(s) de resistencia fundida en
  aluminio (no provistas) y redacción nueva del texto.
- **Estado:** AMBIGUA

## C09 — SCM-003: agregar foto de Zuncho Cerámico
- **Imagen:** `Web Tarewa 2026-5.png`
- **Pide el jefe (textual):** "Agregar alguna foto de Zuncho Cerámico."
- **Archivos/componentes:** `public/assets/productos/resistencias-zuncho/`.
- **Cambio concreto:** requiere una foto nueva no provista.
- **Estado:** AMBIGUA

## C10 — SCM-003: limpiar las fotos donde se ve la mesa (2, 3 y 4)
- **Imagen:** `Web Tarewa 2026-5.png`
- **Pide el jefe (textual):** "Limpiar las fotos que se ve la mesa (la 2, 3 y 4)"
- **Archivos/componentes:** `public/assets/productos/resistencias-zuncho/2.avif`,
  `3.avif`, `4.avif`.
- **Cambio concreto:** es retoque/edición de imágenes (quitar la mesa del fondo),
  no una tarea de código; requiere reemplazar los assets.
- **Estado:** AMBIGUA

## C11 — PC-007: agregar fotos de las pantallas colocadas en el producto final
- **Imagen:** `Web Tarewa 2026-6.png`
- **Pide el jefe (textual):** "Agregar fotos de las pantallas colocadas en el
  producto final: Pasaplato, estufa, horno, etc (las que tengamos)."
- **Archivos/componentes:** `public/assets/productos/pantallas-infrarrojas/`.
- **Cambio concreto:** requiere fotos nuevas no provistas.
- **Estado:** AMBIGUA

## C12 — PLA-008: homogeneizar los fondos de las fotos
- **Imagen:** `Web Tarewa 2026-7.png`
- **Pide el jefe (textual):** "Fijate si se pueden homogeneizar los fondos de las
  fotos (todos blancos, todos negros, o todos transparentes)"
- **Archivos/componentes:** `public/assets/productos/resistencias-planas/`.
- **Cambio concreto:** es retoque/edición de imágenes (unificar fondos); además el
  criterio queda abierto (blanco / negro / transparente) y requiere reemplazar
  los assets.
- **Estado:** AMBIGUA

---

## Resumen

| ID  | Estado    | Imagen(es)        |
|-----|-----------|-------------------|
| C01 | APLICABLE | 1                 |
| C02 | APLICABLE | 2                 |
| C03 | AMBIGUA   | 2                 |
| C04 | APLICABLE | 3                 |
| C05 | APLICABLE | 3                 |
| C06 | APLICABLE | 4, 5, 6, 7        |
| C07 | AMBIGUA   | 1, 10             |
| C08 | AMBIGUA   | 4                 |
| C09 | AMBIGUA   | 5                 |
| C10 | AMBIGUA   | 5                 |
| C11 | AMBIGUA   | 6                 |
| C12 | AMBIGUA   | 7                 |

**APLICABLE (5):** C01, C02, C04, C05, C06
**AMBIGUA (7):** C03, C07, C08, C09, C10, C11, C12
