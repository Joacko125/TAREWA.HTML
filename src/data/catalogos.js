// Lista de catálogos PDF disponibles para descarga en /catalogos.
// Para agregar uno nuevo, leé src/data/README.md.
//
// Cada entrada del array debe tener:
//   id           — slug único (kebab-case)
//   titulo       — título visible en la card
//   descripcion  — bajada corta (2-3 líneas)
//   archivo      — ruta absoluta al PDF en /public/assets/catalogos/...
//   fecha        — fecha de publicación (YYYY-MM-DD)
//   tamano       — peso del archivo (string, ej: "2.4 MB")
//   categoria    — opcional, para futura agrupación

export const catalogos = [
  {
    id: 'catalogo-blindadas',
    titulo: 'Catálogo de Resistencias Blindadas',
    descripcion: 'Resistencias blindadas tubulares para inmersión y calentamiento de aire. Materiales de vaina, potencias, geometrías y aplicaciones industriales.',
    archivo: '/assets/catalogos/catalogo-blindadas-tarewa.pdf',
    fecha: '2026-06-24',
    tamano: '19.3 MB',
    categoria: 'Blindadas',
  },
  {
    id: 'catalogo-zunchos',
    titulo: 'Catálogo de Resistencias tipo Zuncho',
    descripcion: 'Resistencias de banda y abrazadera, de mica y cerámicas, para calentamiento perimetral de cilindros, caños, extrusoras e inyectoras.',
    archivo: '/assets/catalogos/catalogo-zunchos-tarewa.pdf',
    fecha: '2026-06-24',
    tamano: '15.3 MB',
    categoria: 'Zunchos',
  },
  {
    id: 'catalogo-cartuchos',
    titulo: 'Catálogo de Resistencias tipo Cartucho',
    descripcion: 'Resistencias cartucho de alta densidad de carga para moldes, matrices y maquinaria. Diámetros, potencias, tolerancias y conexiones.',
    archivo: '/assets/catalogos/catalogo-cartuchos-tarewa.pdf',
    fecha: '2026-06-24',
    tamano: '2.9 MB',
    categoria: 'Cartuchos',
  },
  {
    id: 'catalogo-infrarrojos',
    titulo: 'Catálogo de Emisores Infrarrojos',
    descripcion: 'Emisores y pantallas infrarrojas cerámicas y de cuarzo para secado, barnizado y calentamiento superficial sin contacto.',
    archivo: '/assets/catalogos/catalogo-infrarrojos-tarewa.pdf',
    fecha: '2026-06-24',
    tamano: '1.7 MB',
    categoria: 'Infrarrojos',
  },
  {
    id: 'catalogo-sensores',
    titulo: 'Catálogo de Sensores de Temperatura',
    descripcion: 'Termocuplas tipo J y K, termoresistencias Pt100, pirómetros y termostatos. Rangos de medición, vainas y conexiones para control de procesos.',
    archivo: '/assets/catalogos/catalogo-sensores-tarewa.pdf',
    fecha: '2026-06-24',
    tamano: '4.5 MB',
    categoria: 'Sensores',
  },
  {
    id: 'catalogo-bridas',
    titulo: 'Catálogo de Resistencias con Brida',
    descripcion: 'Resistencias de inmersión con brida para calderas, tanques y calentamiento de líquidos. Medidas, conexiones y especificaciones técnicas.',
    archivo: '/assets/catalogos/catalogo-bridas-tarewa.pdf',
    fecha: '2026-06-24',
    tamano: '224 KB',
    categoria: 'Bridas',
  },
];
