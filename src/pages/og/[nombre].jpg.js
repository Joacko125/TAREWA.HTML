// og:image en JPG 1200×630 para las vistas previas (WhatsApp, Facebook,
// LinkedIn, X): /og/tarewa.jpg (logo, default del sitio) y /og/[slug].jpg por
// cada producto con ficha propia. Ver src/lib/imagenes.js.
import { productos } from '../../data/productos.js';
import { LOGO, ogImagen } from '../../lib/imagenes.js';

export function getStaticPaths() {
  return [
    { params: { nombre: 'tarewa' }, props: { origen: LOGO, logo: true } },
    // Mismo filtro que /productos/[producto]: los de `urlExterna` no tienen ficha.
    ...productos
      .filter((p) => !p.urlExterna)
      .map((p) => ({ params: { nombre: p.slug }, props: { origen: `public${p.imagen}`, logo: false } })),
  ];
}

export async function GET({ props }) {
  const jpg = await ogImagen(props.origen, { logo: props.logo });
  return new Response(jpg, { headers: { 'Content-Type': 'image/jpeg' } });
}
