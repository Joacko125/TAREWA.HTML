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
    id: 'catalogo-ejemplo',
    titulo: 'Catálogo de ejemplo TAREWA',
    descripcion: 'PDF de prueba para verificar que la descarga funciona. Reemplazar por el catálogo real cuando esté listo.',
    archivo: '/assets/catalogos/catalogo-ejemplo.pdf',
    fecha: '2025-01-15',
    tamano: '1 KB',
    categoria: 'Ejemplo',
  },
];
