// Favicon principal: WebP 32×32 (~1 KB), el formato más liviano para la pestaña
// (16 px en pantallas 2x). El respaldo es /favicon.ico. Ver src/lib/imagenes.js.
import sharp from 'sharp';
import { logoCuadrado } from '../lib/imagenes.js';

export async function GET() {
  const webp = await sharp(await logoCuadrado(32)).webp({ lossless: true, effort: 6 }).toBuffer();
  return new Response(webp, { headers: { 'Content-Type': 'image/webp' } });
}
