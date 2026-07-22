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
    fecha: '2026-07-22',
    tamano: '1.7 MB',
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
  {
    id: 'catalogo-suspendidas',
    titulo: 'Catálogo de Resistencias Suspendidas',
    descripcion: 'Resistencias de hilo expuesto sobre soportes cerámicos para hornos y cámaras de calentamiento. Distribución del calor por radiación y armado por zonas.',
    archivo: '/assets/catalogos/catalogo-suspendidas-tarewa.pdf',
    fecha: '2026-07-22',
    tamano: '1.3 MB',
    categoria: 'Suspendidas',
  },
  {
    id: 'catalogo-productos-especiales',
    titulo: 'Catálogo de Productos Especiales',
    descripcion: 'Resistencias y desarrollos a medida para procesos industriales específicos: geometrías, potencias y configuraciones fuera de estándar.',
    archivo: '/assets/catalogos/catalogo-productos-especiales-tarewa.pdf',
    fecha: '2026-07-22',
    tamano: '1.6 MB',
    categoria: 'Especiales',
  },
  {
    id: 'catalogo-accesorios',
    titulo: 'Catálogo de Accesorios',
    descripcion: 'Terminales, aisladores cerámicos, prensa-cables, fundas siliconadas, cubre-bornes y cajas de conexión para resistencias, sensores y tableros.',
    archivo: '/assets/catalogos/catalogo-accesorios-tarewa.pdf',
    fecha: '2026-07-22',
    tamano: '1.8 MB',
    categoria: 'Accesorios',
  },
  {
    id: 'catalogo-aislantes',
    titulo: 'Catálogo de Aislantes',
    descripcion: 'Materiales aislantes eléctricos y térmicos: mica, cerámicos, fibras y aislaciones de alta temperatura para la fabricación de resistencias.',
    archivo: '/assets/catalogos/catalogo-aislantes-tarewa.pdf',
    fecha: '2026-07-22',
    tamano: '957 KB',
    categoria: 'Aislantes',
  },
  {
    id: 'catalogo-controladores',
    titulo: 'Catálogo de Controladores',
    descripcion: 'Controladores e instrumentos para el control de temperatura de procesos industriales. Modelos, entradas de sensor y salidas de control disponibles.',
    archivo: '/assets/catalogos/catalogo-controladores-tarewa.pdf',
    fecha: '2026-07-22',
    tamano: '3.0 MB',
    categoria: 'Controladores',
  },
  {
    id: 'ficha-pirometro-twm-401',
    titulo: 'Pirómetro TWM-401 — Características técnicas',
    descripcion: 'Especificaciones del pirómetro digital TWM-401: rangos de medición, entradas, salidas de control y datos de conexión.',
    archivo: '/assets/catalogos/ficha-pirometro-twm-401.pdf',
    fecha: '2026-07-22',
    tamano: '204 KB',
    categoria: 'Pirómetros',
  },
  {
    id: 'manual-programacion-twm-401',
    titulo: 'Manual de Programación TWM-401 (v2.0)',
    descripcion: 'Guía de programación y parámetros del pirómetro digital TWM-401: configuración de setpoints, alarmas y funciones de control.',
    archivo: '/assets/catalogos/manual-programacion-twm-401.pdf',
    fecha: '2026-07-22',
    tamano: '790 KB',
    categoria: 'Pirómetros',
  },
  {
    id: 'manual-pirometros-twr-101',
    titulo: 'Manual de Pirómetros TWR-101',
    descripcion: 'Manual de uso y conexión del pirómetro TWR-101: instalación, configuración y puesta en marcha para el control de temperatura.',
    archivo: '/assets/catalogos/manual-pirometros-twr-101.pdf',
    fecha: '2026-07-22',
    tamano: '534 KB',
    categoria: 'Pirómetros',
  },
  {
    id: 'datos-de-ingenieria',
    titulo: 'Datos de Ingeniería',
    descripcion: 'Tablas y datos técnicos de referencia para el cálculo y selección de resistencias: cargas superficiales, materiales, potencias y conversiones.',
    archivo: '/assets/catalogos/datos-de-ingenieria-tarewa.pdf',
    fecha: '2026-07-22',
    tamano: '1.8 MB',
    categoria: 'Referencia',
  },
];
