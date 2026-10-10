// Favicon de respaldo: .ico con 16, 32 y 48 px. Lo piden solos los navegadores
// viejos y los buscadores en /favicon.ico (Google usa el de 48 px).
import { logoCuadrado, ico } from '../lib/imagenes.js';

export async function GET() {
  const pngs = await Promise.all([16, 32, 48].map(async (lado) => ({ lado, png: await logoCuadrado(lado) })));
  return new Response(ico(pngs), { headers: { 'Content-Type': 'image/x-icon' } });
}
