// Hitos de la historia de TAREWA — alimentan el carrusel "60 años" en /nosotros.
// Para agregar o editar uno, leé src/data/README.md (sección 4).
//
// Cada hito:
//   anio    — string (puede ser "1965" o "1978-1990" si abarca un período)
//   titulo  — frase corta que titula el hito
//   texto   — 2-4 oraciones contando el hito
//   imagen  — ruta absoluta a /assets/historia/... (opcional, si falta se muestra placeholder)

export const historia = [
  {
    anio: '1964',
    titulo: 'Los inicios en el fondo de casa',
    texto: 'Todarello y Cía. S.R.L. nace en el año 1964 cuando su fundador, don Nazareno Todarello, con la visión y tenacidad propia de los inmigrantes comienza, en forma totalmente artesanal, el armado y montaje de bandas calefactores.',
    imagen: '/assets/historia/1965.avif',
  },
  {
    anio: '1975',
    titulo: 'Mudanza al primer galpón propio',
    texto: 'La producción supera al taller original y Nazareno decide invertir en su primer galpón propio ampliando el taller original. Llegan las primeras máquinas semi-industriales y arrancan los pedidos de clientes industriales medianos: imprentas, fábricas de plástico y talleres metalúrgicos del oeste.',
    imagen: '/assets/historia/1978.avif',
  },
  {
    anio: '1984',
    titulo: 'Llega la segunda generación',
    texto: 'Con el tiempo, y el incesante incremento en la demanda de sus productos de alta calidad, se ve en la necesidad de conformar una sociedad familiar incorporando a sus hijos, Genaro y Antonio, dividiéndose entre estos, las tareas administrativas y de venta.',
    imagen: '/assets/historia/1990.avif',
  },
  {
    anio: '2002',
    titulo: 'Resistir y crecer en la crisis',
    texto: 'En medio del derrumbe del 2001, mientras muchas pymes industriales cerraban, TAREWA sostuvo los puestos de trabajo y se reconviertió para abastecer la demanda local que ya no podía importar. La empresa se fortalece finalmente, formando alianzas comerciales que la siguen acompañando hasta hoy.',
    imagen: '/assets/historia/2002.avif',
  },
  {
    anio: '2015',
    titulo: 'Consolidación y madurez',
    texto: 'Para este momento la empresa se conforma por un grupo de 50 empleados altamente capacitados y respaldados por la experiencia y trayectoria de su socio fundador en todas las etapas que hacen a la fabricación de sus productos. La fábrica empieza a trabajar con planos digitales y trazabilidad por lote.',
    imagen: '/assets/historia/2015.avif',
  },
  {
    anio: '2026',
    titulo: 'Actualidad',
    texto: 'A mas de 60 años de su fundación, la compañía cuenta con una importante trayectoria en la industria nacional, la cual marca la distinción en la calidad y rendimiento de su amplio espectro de productos de calefacción y control, certificados por normas IRAM y fabricados bajo normas internacionales de estandarización ISO9001, abarcando todas las necesidades del mercado actual.',
    imagen: '/assets/historia/2025.avif',
    // Foto chica (150×150): se muestra a tamaño natural (sin agrandar), centrada.
    ajuste: 'scale-down',
  },
];
