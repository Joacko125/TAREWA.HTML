// Genera un PDF mínimo válido para testear la descarga en /catalogos.
// Una vez generado el archivo en public/assets/catalogos/catalogo-ejemplo.pdf,
// este script puede eliminarse (es de uso único).
import { writeFileSync, mkdirSync } from 'node:fs';

const lines = [
  'BT',
  '/F1 22 Tf',
  '50 760 Td',
  '(Catalogo de ejemplo TAREWA) Tj',
  '/F1 12 Tf',
  '0 -40 Td',
  '(Reemplazar este archivo por el catalogo real en formato PDF.) Tj',
  '0 -20 Td',
  '(Mas info en src/data/README.md) Tj',
  'ET',
];
const stream = lines.join('\n');

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>',
  `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
];

// Header con bytes binarios para que los lectores reconozcan el archivo como binario.
const headerStr = '%PDF-1.4\n';
const binaryMarker = Buffer.from([0x25, 0xE2, 0xE3, 0xCF, 0xD3, 0x0A]); // %âãÏÓ\n

let body = '';
const offsets = [];
let cursor = headerStr.length + binaryMarker.length;
for (let i = 0; i < objects.length; i++) {
  offsets.push(cursor);
  const obj = `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  body += obj;
  cursor += Buffer.byteLength(obj, 'latin1');
}

const xrefStart = cursor;
let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const off of offsets) {
  xref += String(off).padStart(10, '0') + ' 00000 n \n';
}
const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

const pdfBuffer = Buffer.concat([
  Buffer.from(headerStr, 'latin1'),
  binaryMarker,
  Buffer.from(body, 'latin1'),
  Buffer.from(xref, 'latin1'),
  Buffer.from(trailer, 'latin1'),
]);

mkdirSync('public/assets/catalogos', { recursive: true });
const outPath = 'public/assets/catalogos/catalogo-ejemplo.pdf';
writeFileSync(outPath, pdfBuffer);
console.log(`PDF generado: ${outPath} (${pdfBuffer.length} bytes)`);
