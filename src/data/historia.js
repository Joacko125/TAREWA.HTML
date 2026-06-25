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
    anio: '1965',
    titulo: 'Los inicios en el fondo de casa',
    texto: 'TAREWA nace en un taller improvisado en el fondo de una casa familiar. Con herramientas básicas y mucho oficio, el fundador empieza a fabricar las primeras resistencias por encargo para talleres y pequeñas industrias del oeste del conurbano. El boca a boca empieza a correr.',
    imagen: '/assets/historia/1965.avif',
  },
  {
    anio: '1978',
    titulo: 'Mudanza al primer galpón propio',
    texto: 'La producción supera al taller original y la familia decide invertir en su primer galpón propio en Morón. Llegan las primeras máquinas semi-industriales y arrancan los pedidos de clientes industriales medianos: imprentas, fábricas de plástico y talleres metalúrgicos del oeste.',
    imagen: '/assets/historia/1978.avif',
  },
  {
    anio: '1990',
    titulo: 'Llega la segunda generación',
    texto: 'Los hijos del fundador entran a la operación con formación técnica y ganas de profesionalizar el negocio. Se moderniza el taller, se amplía la línea de productos con sensores y termocuplas, y se sistematizan los procesos de calidad. TAREWA pasa de ser un taller a ser una pequeña fábrica formal.',
    imagen: '/assets/historia/1990.avif',
  },
  {
    anio: '2002',
    titulo: 'Resistir y crecer en la crisis',
    texto: 'En medio del derrumbe del 2001, mientras muchas pymes industriales cerraban, TAREWA sostiene los puestos de trabajo y se reconvierte para abastecer la demanda local que ya no podía importar. La empresa sale fortalecida y con clientes nuevos que la siguen acompañando hasta hoy.',
    imagen: '/assets/historia/2002.avif',
  },
  {
    anio: '2015',
    titulo: 'Tecnología y precisión',
    texto: 'Incorporación de maquinaria CNC, control de calidad propio y desarrollo de resistencias blindadas con vainas de AISI 316 para clientes exigentes (petroquímica, farma, alimentación). La fábrica empieza a trabajar con planos digitales y trazabilidad por lote.',
    imagen: '/assets/historia/2015.avif',
  },
  {
    anio: '2025',
    titulo: 'La tercera generación toma la posta',
    texto: 'A 60 años del primer taller, la tercera generación lidera la transformación digital: web institucional, catálogos online, presencia en redes y foco en clientes industriales que valoran la fabricación argentina con calidad técnica. La historia continúa.',
    imagen: '/assets/historia/2025.avif',
  },
];
