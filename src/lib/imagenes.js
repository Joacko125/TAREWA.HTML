// Imágenes derivadas que se generan en build (favicons y og:image), con el
// sharp que ya trae Astro. Fuente única: el logo PNG de public/assets.
// Las usan los endpoints src/pages/favicon*.js, apple-touch-icon.png.js y
// og/[nombre].jpg.js.
import fs from 'node:fs';
import sharp from 'sharp';

// Logo completo en PNG sin pérdida (mismo arte que logo.avif). También es el
// logo del JSON-LD de BaseLayout (Google no acepta AVIF para el logo).
export const LOGO = 'public/assets/logo.png';

// Medida estándar de og:image (Facebook, WhatsApp, LinkedIn, X).
export const OG_ANCHO = 1200;
export const OG_ALTO = 630;

const TRANSPARENTE = { r: 0, g: 0, b: 0, alpha: 0 };

// Color de un token de la paleta, leído de global.css (fuente única de los hex).
export function token(nombre) {
  const css = fs.readFileSync('src/styles/global.css', 'utf8');
  const m = css.match(new RegExp(`--${nombre}:\\s*(#[0-9a-f]{6})`, 'i'));
  if (!m) throw new Error(`Token --${nombre} no encontrado en global.css`);
  return m[1];
}

// Logo centrado en un lienzo cuadrado (como el ícono que usaba el WordPress).
// `margen` es la fracción libre en cada borde; sin `fondo` queda transparente.
export async function logoCuadrado(lado, { fondo, margen = 0 } = {}) {
  const interior = Math.round(lado * (1 - 2 * margen));
  const logo = await sharp(LOGO)
    .resize({ width: interior, height: interior, fit: 'contain', background: TRANSPARENTE })
    .toBuffer();
  return sharp({ create: { width: lado, height: lado, channels: 4, background: fondo ?? TRANSPARENTE } })
    .composite([{ input: logo, gravity: 'center' }])
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();
}

// Empaqueta PNGs en un .ico (formato PNG-en-ICO, soportado desde Windows Vista).
export function ico(pngs) {
  const cabecera = Buffer.alloc(6);
  cabecera.writeUInt16LE(0, 0); // reservado
  cabecera.writeUInt16LE(1, 2); // tipo: ícono
  cabecera.writeUInt16LE(pngs.length, 4);
  let offset = 6 + 16 * pngs.length;
  const entradas = pngs.map(({ lado, png }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(lado >= 256 ? 0 : lado, 0);
    e.writeUInt8(lado >= 256 ? 0 : lado, 1);
    e.writeUInt16LE(1, 4); // planos de color
    e.writeUInt16LE(32, 6); // bits por píxel
    e.writeUInt32LE(png.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += png.length;
    return e;
  });
  return Buffer.concat([cabecera, ...entradas, ...pngs.map((p) => p.png)]);
}

// og:image 1200×630 en JPG (AVIF no se muestra en las vistas previas de
// WhatsApp/Facebook/LinkedIn). Logo: centrado a 600 px de ancho, así entra
// también en el recorte cuadrado que hace WhatsApp. Foto: entera (contain),
// sin recortar el producto, sobre --papel.
export async function ogImagen(origen, { logo = false } = {}) {
  const papel = token('papel');
  const capa = logo
    ? await sharp(origen).resize({ width: 600 }).toBuffer()
    : await sharp(origen).resize({ width: OG_ANCHO, height: OG_ALTO, fit: 'contain', background: papel }).toBuffer();
  return sharp({ create: { width: OG_ANCHO, height: OG_ALTO, channels: 3, background: papel } })
    .composite([{ input: capa, gravity: 'center' }])
    .jpeg({ quality: 84, mozjpeg: true })
    .toBuffer();
}
