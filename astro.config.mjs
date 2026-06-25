// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tarewa.com',
  // /servicios se unificó dentro del index como sección #servicios.
  // Astro normaliza el trailing slash, así que una sola entrada cubre
  // /servicios y /servicios/. El 301 real lo hace netlify.toml (edge).
  redirects: {
    '/servicios': '/#servicios',
  },
});
