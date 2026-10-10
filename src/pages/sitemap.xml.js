// /sitemap.xml generado en build desde los mismos datos que arman las páginas
// (productos.js y la colección del blog). Si se agrega una página fija nueva,
// sumarla a `fijas`. /gracias/ y la 404 quedan afuera a propósito (noindex).
import { getCollection } from 'astro:content';
import { productos } from '../data/productos.js';

export async function GET({ site }) {
  const fijas = ['/', '/productos', '/nosotros', '/catalogos', '/blog'];
  const fichas = productos.filter((p) => !p.urlExterna).map((p) => `/productos/${p.slug}`);
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const urls = [
    ...[...fijas, ...fichas].map((ruta) => ({ loc: new URL(ruta, site).href })),
    ...posts.map((post) => ({
      loc: new URL(`/blog/${post.id}`, site).href,
      lastmod: post.data.publishDate.toISOString().slice(0, 10),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(({ loc, lastmod }) => `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`)
  .join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
