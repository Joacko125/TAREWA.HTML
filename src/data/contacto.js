// Datos de contacto centralizados, importables desde cualquier .astro o .js.
// Si cambia el número, el mail o el horario, se modifica acá y se actualiza
// automáticamente en toda la web.

export const contacto = {
  telefonoDisplay: '11 4193-7728',
  telefonoLink: '+5491141937728',
  whatsappNumero: '5491141937728',
  email: 'ventas@tarewa.com',
  direccion: 'Huaura 235, Morón, Buenos Aires',
  horario: 'Lunes a viernes · 8:00 a 16:30 hs',
};

// Devuelve el link wa.me con texto pre-cargado correctamente URL-encoded.
export function whatsappLink(texto = 'Hola TAREWA, quería consultar.') {
  return `https://wa.me/${contacto.whatsappNumero}?text=${encodeURIComponent(texto)}`;
}
