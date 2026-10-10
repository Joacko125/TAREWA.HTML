// Catálogo de productos TAREWA.
// Cada entrada genera automáticamente una página en /productos/[slug]
// (salvo las que tienen `urlExterna`: esas enlazan directo a otro sitio).
// Para agregar un producto nuevo leé src/data/README.md.
//
// El orden del array es el orden de /productos y del menú desplegable, y
// replica el de la grilla del index: fila de arriba blindadas, cartuchos
// (tubulares), bridas (especiales), pantallas y caloventores; el resto abajo.

export const productos = [
  {
    slug: 'resistencias-blindadas',
    nombre: 'Resistencias Blindadas Industriales',
    codigo: 'BL-001',
    imagen: '/assets/producto-blindada.avif',
    badge: 'Por pedido',
    resumen: 'Blindadas de acero inoxidable o cobre para aire quieto, forzado, sumergidas en agua y aceite o aletadas. Alta durabilidad en ambientes industriales exigentes.',
    descripcion: [
      'Las resistencias blindadas son una de las soluciones más robustas para el calentamiento industrial. Están construidas con un hilo resistivo alojado dentro de una vaina metálica, aislado eléctricamente por óxido de magnesio (MgO) compactado a alta densidad. Esa construcción las hace aptas tanto para inmersión directa en líquidos como para calentamiento de aire o sólidos en contacto.',
      'En TAREWA las fabricamos en vainas de cobre (para calentamiento de agua y aceite), AISI 304 (uso industrial general) y AISI 316 (ambientes más agresivos, con cloruros y mayor exigencia química). La elección del material no es menor: una vaina mal especificada puede fallar en pocos meses por corrosión o por fatiga térmica, mientras que la correcta supera fácilmente las 10.000 horas de servicio continuo.',
      'Se utilizan en calderas, tanques de proceso, secadores, hornos de baja y media temperatura, equipos de calefacción industrial y maquinaria a medida. Diseñamos cada resistencia según tu potencia, tensión, geometría y tipo de conexión.',
    ],
    whatsappTexto: 'Hola TAREWA, quería consultar por Resistencias Blindadas Industriales (RB-001).',
  },
  {
    slug: 'resistencias-tubulares',
    nombre: 'Resistencias Tubulares Industriales',
    codigo: 'TUB-002',
    imagen: '/assets/producto-tubular.avif',
    badge: 'Por pedido',
    resumen: 'Diseñadas para aplicaciones compactas en fundiciones y maquinaria. Disponibles en distintos diámetros y longitudes, a medida y stock.',
    descripcion: [
      'Las resistencias tubulares son la base de muchos equipos industriales por su versatilidad. Las fabricamos en diámetros de 6,5 a 16 mm y largos a medida, con la geometría que necesite tu equipo: rectas, en U, en W, en espiral, formadas en frío para ingresar en alojamientos específicos.',
      'Trabajamos con potencias desde unos pocos cientos de watts hasta varios kilowatts por unidad, con cargas superficiales calculadas para no superar el límite de vida útil del aislante y de la vaina. Esto es lo que diferencia una resistencia fabricada con criterio de una resistencia "que entra y calienta": el cálculo previo de carga superficial es lo que determina si va a durar dos años o dos meses.',
      'Las usamos en fundiciones de aluminio, hornos de tratamiento térmico, equipos de inyección de plástico, máquinas envasadoras, prensas de vulcanización y todo proceso donde se necesite un emisor de calor compacto y confiable.',
    ],
    whatsappTexto: 'Hola TAREWA, quería consultar por Resistencias Tubulares Industriales (RT-002).',
  },
  {
    slug: 'resistencias-especiales',
    nombre: 'Resistencias Eléctricas Especiales a Medida',
    codigo: 'RE-006',
    imagen: '/assets/producto-especial.avif',
    badge: 'A medida',
    resumen: 'Desarrollamos las resistencias que nadie más hace. Para cualquier proceso industrial. Consulta por asesoramiento especial y resolvemos tu problema.',
    descripcion: [
      'Cuando una resistencia estándar no resuelve el problema, fabricamos a medida. Recibimos el plano del equipo, el dato de potencia y tensión, y desarrollamos una solución. Lo hicimos durante 60 años y por eso seguimos teniendo clientes que vienen con problemas que en otro lado les dijeron "no se puede".',
      'Algunos ejemplos reales que hemos fabricado: resistencias en forma de hoja para platos de prensa, espirales abiertas para hornos de tratamiento térmico de tubos, resistencias en herradura para máquinas envasadoras, conjuntos de tres resistencias trifásicas balanceadas en potencia para hornos de fundición, vainas extralargas (más de 3 metros) para tanques verticales.',
      'El proceso es simple: vos nos contás el problema o nos mandás el plano, nosotros te proponemos diseño y precio. Si querés mejorar un equipo existente, sumamos también el rediseño de la conexión y el sistema de fijación.',
    ],
    whatsappTexto: 'Hola TAREWA, quería desarrollar una resistencia especial a medida (RE-006).',
  },
  {
    slug: 'pantallas-infrarrojas',
    nombre: 'Pantallas Infrarrojas Industriales',
    codigo: 'PC-007',
    imagen: '/assets/producto-infrarroja.avif',
    badge: 'Stock',
    resumen: 'Pantallas resistivas fabricadas en ceramico refractario. Calor infrarrojo para calentamiento superficial sin contacto. Alta eficiencia energética y respuesta rápida.',
    descripcion: [
      'El calentamiento por infrarrojo es lejos el método más eficiente cuando hay que calentar una superficie sin contacto: secado de pinturas y barnices, termo-formado de plásticos, deshidratado, pre-calentamiento de moldes, curado de adhesivos. Calienta directo el producto, no el aire alrededor, así que el rendimiento energético es muy alto.',
      'Fabricamos pantallas infrarrojas con dos tipos de emisor: cerámicos (longitud de onda larga, ideales para materiales orgánicos y pinturas) y de cuarzo (longitud de onda corta a media, respuesta más rápida, mayor densidad de potencia). Las montamos en bastidores reflectantes de aluminio anodizado o acero inoxidable, con potencias balanceadas y conexión robusta.',
      'Diseñamos cada pantalla para tu túnel o cabina específica: medidas, potencia por m², distancia recomendada al producto y configuración de zonas para regular el perfil de calor a lo largo de la línea.',
    ],
    whatsappTexto: 'Hola TAREWA, quería consultar por Pantallas Infrarrojas Industriales (PI-007).',
  },
  {
    // Línea de la marca SCIROCCO (otra marca del grupo, ver Footer). Sin ficha
    // propia: `urlExterna` hace que la card, el listado y el menú lleven
    // directo al sitio de SCIROCCO (pestaña nueva) y que no se genere
    // /productos/[slug]. No lleva código interno ni badge: se muestra la marca.
    slug: 'caloventores-industriales',
    nombre: 'Caloventores industriales SCIROCCO',
    marca: 'SCIROCCO',
    urlExterna: 'https://scirocco.com.ar/',
    imagen: '/assets/producto-caloventor.avif',
    resumen: 'Calefacción eléctrica segura y eficiente para grandes espacios y procesos productivos. Equipos robustos, portátiles y customizables, sin necesidad de conexión a gas.',
    whatsappTexto: 'Hola TAREWA, quería consultar por Caloventores industriales SCIROCCO.',
  },
  {
    // Fusión de los ex "Resistencias tipo Zuncho" (SCM-003) y "Resistencias
    // Planas" (PLA-008): queda el código de zunchos. Las URLs viejas
    // /productos/resistencias-zuncho y /productos/resistencias-planas redirigen
    // acá (astro.config.mjs + netlify.toml).
    slug: 'bandas-calefactoras',
    nombre: 'Bandas calefactoras industriales',
    codigo: 'SCM-003',
    imagen: '/assets/producto-bandas.avif',
    badge: 'Por pedido',
    resumen: 'Zunchos y resistencias planas para calentamiento por contacto: perimetral en picos de inyección, moldes y cilindros, o uniforme en platos, prensas y selladores. De mica o cerámicas de alta potencia. Stock de modelos estándar.',
    descripcion: [
      'Las bandas calefactoras reúnen dos familias que fabricamos de manera muy similar. Los zunchos (también conocidos como resistencias de banda o de abrazadera) se ajustan al perímetro exterior de un cilindro: caños, cilindros de inyectoras, cuerpos de extrusoras, sopladores y bocas de descarga. Las planas son el formato a elegir cuando se necesita calentamiento uniforme sobre una superficie plana: platos de prensa, mesas de termo-sellado, planchas de vulcanización, moldes planos y calefactores de chapa. En los dos casos el calor se transfiere por contacto directo con la superficie metálica.',
      'La base constructiva es la misma: un elemento resistivo plano aislado entre láminas de mica de alta calidad, prensado y cubierto o enmarcado en chapa galvanizada, acero inoxidable o aluminio, con la distribución del hilo calculada para que la temperatura sea homogénea en toda la superficie, evitando puntos calientes que arruinan el producto o el equipo. En zunchos, la versión de mica trabaja hasta 350°C; para zonas más exigentes fabricamos zunchos cerámicos, con perlas de óxido de aluminio alta densidad, para temperaturas de hasta 700°C. Cada una para su rango: usar un zuncho de mica en una zona que opera a 450°C es la receta para quemarlo en semanas.',
      'Ajustamos diámetros, anchos, medidas, potencias y posición de la conexión. En planas trabajamos potencias desde 500 W hasta más de 10 kW por unidad, con cargas superficiales adaptadas a la temperatura de trabajo, y en zunchos también fabricamos variantes con termocupla integrada para control directo desde el tablero. Si la pieza original que tenés se quemó, podés mandarnos la dañada o el plano y la replicamos exactamente, con mejor calidad de aislantes que la original.',
    ],
    whatsappTexto: 'Hola TAREWA, quería consultar por Bandas calefactoras industriales (zunchos y planas, SCM-003).',
  },
  {
    slug: 'sensores-temperatura',
    nombre: 'Sensores de Temperatura Industriales',
    codigo: 'SEN-004',
    imagen: '/assets/producto-sensor.avif',
    badge: 'Stock',
    resumen: 'Termocuplas tipo J, K y sensores Pt100. Pirómetros, termostatos y fichas compensadas. Medición precisa para el control de tus procesos. Stock de modelos estándar.',
    descripcion: [
      'Una resistencia industrial sin un buen sensor es una bomba de tiempo: sin lectura confiable de temperatura no hay control, y sin control la pieza se quema o el producto sale fuera de especificación. Por eso fabricamos también la parte de sensado: termocuplas tipo J (Fe-Cu/Ni) y tipo K (NiCr-NiAl), termoresistencias Pt100 simples y dobles, y armamos pirómetros y termostatos sobre pedido.',
      'Cada sensor se hace a medida del proceso: vaina de protección en AISI 304 o AISI 316 según el medio, longitud de inmersión calculada para no leer la temperatura del cuerpo del equipo en vez de la del producto, conexión por bornera, cable compensado o ficha rápida tipo mini-jack según prefieras.',
      'Asesoramos sobre qué tipo de sensor conviene en cada caso. Para un horno de tratamiento térmico hasta 1000°C la opción suele ser termocupla K; para una mezcla pasteurizada a 70°C es una Pt100 que da menos del 0,3°C de error. La diferencia entre el sensor adecuado y uno mal elegido se mide en pérdidas operativas.',
    ],
    whatsappTexto: 'Hola TAREWA, quería consultar por Sensores de Temperatura Industriales (ST-004).',
  },
  {
    slug: 'accesorios',
    nombre: 'Accesorios para Resistencias Eléctricas',
    codigo: 'ACC-005',
    imagen: '/assets/producto-accesorios.avif',
    badge: 'Stock',
    resumen: 'Accesorios de conexión, aislamiento y protección eléctrica. Tu elemento ideal para un trabajo seguro.',
    descripcion: [
      'No alcanza con fabricar bien la resistencia: la conexión también define la vida útil. Por eso ofrecemos toda la línea de accesorios complementarios: terminales de bronce, cobre estañado y acero inoxidable, aisladores cerámicos, prensa-cables, fundas siliconadas para alta temperatura, cubre-bornes y cajas de conexión IP65.',
      'También fabricamos bornes especiales a medida para reemplazo en equipos donde no se consigue el repuesto original, y armamos kits completos de conexión cuando enviamos una resistencia para una zona donde el cliente no consigue fácilmente los accesorios.',
      'Si tu equipo tiene un punto recurrente de falla en la conexión (terminal quemado, cable derretido, aisladores rotos), traenos una muestra o foto y te armamos un kit que resuelva el problema de raíz.',
    ],
    whatsappTexto: 'Hola TAREWA, quería consultar por Accesorios para resistencias (PT-005).',
  },
  {
    slug: 'resistencias-suspendidas',
    nombre: 'Resistencias Suspendidas Industriales',
    codigo: 'SUS-009',
    imagen: '/assets/producto-suspendida.avif',
    badge: 'Por pedido',
    resumen: 'Resistencias de hilo expuesto suspendido en soportes cerámicos, pensadas para conductos y hornos industriales. Cámaras de calentamiento que requieran distribución uniforme del calor.',
    descripcion: [
      'En los hornos industriales de alta temperatura el calor se transmite principalmente por radiación, y para eso conviene el hilo expuesto: una espiral de aleación resistiva montada sobre soportes cerámicos, suspendida del techo o las paredes del horno.',
      'Las fabricamos con hilo de calibre adaptado a la potencia y a la temperatura de servicio. Los soportes cerámicos son pieza clave: la elección correcta del aislante evita contaminación y deformación a alta temperatura.',
      'Diseñamos el set completo del horno: distribución de las espirales en zonas (techo, paredes, piso), conexión externa con bornes robustos y plano de montaje. Si te quedaste sin proveedor del juego original, podemos copiarlo o mejorarlo según tu experiencia con el horno.',
    ],
    whatsappTexto: 'Hola TAREWA, quería consultar por Resistencias Suspendidas Industriales (RS-009).',
  },
  {
    slug: 'bancos-de-carga',
    nombre: 'Bancos de Carga Resistivos Industriales',
    codigo: 'BC-010',
    imagen: '/assets/producto-banco.avif',
    badge: 'Por pedido',
    resumen: 'Conjuntos de resistencias montadas en bastidor para pruebas de carga de generadores, UPS y transformadores. Potencia regulable y construcción robusta para uso continuo.',
    descripcion: [
      'Los bancos de carga resistivos sirven para algo que los manuales no resuelven: probar de verdad si un generador, un UPS o un transformador entrega lo que dice entregar. Los conectás a la salida del equipo, regulás los pasos de potencia y medís voltaje, corriente y comportamiento bajo carga real.',
      'Fabricamos bancos desde unos pocos kW (uso de mantenimiento eléctrico portátil) hasta varios cientos de kW (plantas, centros de datos, salas de UPS). Cada banco se diseña con resistencias blindadas o de hilo expuesto, ventiladores axiales para disipación forzada, contactores escalonados para regular potencia, y protecciones térmicas.',
      'Para uso continuo (test de larga duración) usamos chapa de acero pintada al horno y bornera industrial. Para uso portátil, bastidor con ruedas y conectores de potencia. Te asesoramos en la configuración eléctrica y el dimensionamiento según lo que necesités probar.',
    ],
    whatsappTexto: 'Hola TAREWA, quería consultar por Bancos de Carga Resistivos (BC-010).',
    // En lugar de MercadoLibre, el botón de tienda va al sitio propio de la marca.
    enlaceExterno: {
      href: 'https://www.bancosdecarga.com.ar/',
      texto: 'Conocé más en bancosdecarga.com.ar',
    },
  },
];

// Destino del producto: su ficha interna o, si tiene `urlExterna`, ese sitio.
export const hrefProducto = (p) => p.urlExterna ?? `/productos/${p.slug}`;
