// Ícono de iOS (acceso directo en pantalla de inicio): 180×180 con fondo
// blanco, porque iOS rellena de negro las transparencias.
import { logoCuadrado } from '../lib/imagenes.js';

export async function GET() {
  const png = await logoCuadrado(180, { fondo: '#ffffff', margen: 0.08 });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
}
