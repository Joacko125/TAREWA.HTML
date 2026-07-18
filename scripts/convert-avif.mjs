// Convierte a .avif las imágenes .jpg/.jpeg/.png/.webp de public/assets
// (recursivo), usando el sharp que ya trae Astro. El sitio está estandarizado
// en avif (ver public/assets/LEEME.txt): copiá las fotos nuevas en public/assets
// con su nombre final (p. ej. nosotros-1.jpg) y corré:
//
//   npm run img:avif
//
// Genera el .avif al lado del original (no lo pisa si ya existe) y deja el
// original en su lugar por si hace falta reconvertir. Los favicons se saltean.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const raiz = path.resolve(process.argv[2] ?? 'public/assets');
const extensiones = /\.(jpe?g|png|webp)$/i;
const saltear = /^favicon\./i;

function* archivos(dir) {
  for (const entrada of fs.readdirSync(dir, { withFileTypes: true })) {
    const ruta = path.join(dir, entrada.name);
    if (entrada.isDirectory()) yield* archivos(ruta);
    else if (extensiones.test(entrada.name) && !saltear.test(entrada.name)) yield ruta;
  }
}

let convertidas = 0;
let salteadas = 0;

for (const origen of archivos(raiz)) {
  const destino = origen.replace(extensiones, '.avif');
  if (fs.existsSync(destino)) {
    salteadas++;
    continue;
  }
  await sharp(origen).avif({ quality: 60 }).toFile(destino);
  const kb = (n) => `${(fs.statSync(n).size / 1024).toFixed(0)} KB`;
  console.log(`✔ ${path.relative(raiz, origen)} → ${path.basename(destino)} (${kb(origen)} → ${kb(destino)})`);
  convertidas++;
}

console.log(`Listo: ${convertidas} convertida(s), ${salteadas} ya tenían .avif.`);
