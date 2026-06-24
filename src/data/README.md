# `src/data/` — Datos editables del sitio

Acá viven los archivos que el equipo de TAREWA va a tener que editar más seguido: catálogos PDF para descargar, productos del catálogo online, y datos de contacto. Todo está separado del código de las páginas para que sumar o cambiar contenido no implique tocar componentes Astro.

## 📄 1. Agregar / sacar un catálogo PDF (`catalogos.js`)

Los catálogos PDF se muestran en la página [`/catalogos`](https://tarewa.com/catalogos) y se descargan con un click.

1. Copiá el PDF a `public/assets/catalogos/`. Ejemplo: `public/assets/catalogos/catalogo-general-2025.pdf`. Usá nombre en kebab-case (sin tildes, sin espacios).

2. Editá `src/data/catalogos.js` y agregá una entrada al array `catalogos`:

   ```js
   {
     id: 'catalogo-general-2025',
     titulo: 'Catálogo General 2025',
     descripcion: 'Línea completa de resistencias eléctricas industriales TAREWA.',
     archivo: '/assets/catalogos/catalogo-general-2025.pdf',
     fecha: '2025-01-15',
     tamano: '2.4 MB',
     categoria: 'General',
   },
   ```

3. Commiteá y pusheá:

   ```powershell
   git add public/assets/catalogos/ src/data/catalogos.js
   git commit -m "Agregar catálogo General 2025"
   git push
   ```

4. Netlify hace deploy en ~1 minuto.

**Notas**
- El orden visible es el del array. Lo más nuevo primero.
- Si el array queda vacío, la página muestra "Próximamente publicaremos catálogos".
- Para sacar un catálogo, comentá o eliminá la entrada del array.

---

## 🔧 2. Agregar / editar un producto del catálogo online (`productos.js`)

Cada entrada de `productos.js` genera automáticamente:
- Una página propia en `/productos/[slug]` (layout apaisado con carrusel horizontal de fotos, descripción y CTA de WhatsApp).
- Una card en el listado `/productos`.
- Un ítem en el menú desplegable que aparece al pasar el mouse por **PRODUCTOS** en el header.

> Las páginas viejas `/catalogos/[slug]` quedan redirigidas a `/productos/[slug]` (ver `netlify.toml`).

### Pasos para agregar un producto nuevo

1. **Editar `src/data/productos.js`** y agregar una entrada al array `productos`:

   ```js
   {
     slug: 'mi-producto-nuevo',
     nombre: 'Mi Producto Nuevo',
     codigo: 'XX-099',
     imagen: '/assets/producto-mi-producto.avif',
     badge: 'Por pedido',
     resumen: 'Descripción corta para la card del listado.',
     descripcion: [
       'Primer párrafo descriptivo (técnico-comercial, 3-5 líneas).',
       'Segundo párrafo (materiales, aplicaciones).',
       'Tercer párrafo (proceso, asesoramiento, contacto).',
     ],
     whatsappTexto: 'Hola TAREWA, quería consultar por Mi Producto Nuevo.',
   },
   ```

   - `slug`: kebab-case, sin tildes ni espacios. Será la URL.
   - `nombre`: el título visible (en `<h1>`, en el listado y en el menú desplegable).
   - `codigo`: opcional pero usado en la página y en SEO.
   - `imagen`: ruta a la foto principal (primera del carrusel y card del listado).
   - `badge`: etiqueta flotante sobre la imagen (ej: "Por pedido", "A medida").
   - `descripcion`: array de párrafos. Se renderizan uno abajo del otro.
   - `whatsappTexto`: el mensaje pre-cargado cuando el cliente clickea el botón.

2. **Fotos del carrusel.** La primera foto es la del campo `imagen`. Para sumar más, creá la carpeta `public/assets/productos/mi-producto-nuevo/` y subí `1.jpg`, `2.jpg`, … (hasta `6.jpg`); aparecen automáticamente en el carrusel. Las que no existan se ocultan solas.

3. **(Opcional) Destacarlo en el home.** El producto ya aparece solo en `/productos` y en el menú desplegable. Si además querés mostrarlo en la sección de la portada, copiá una `.producto-card` existente en `src/pages/index.astro` y apuntá el `<h3>` a `<a class="producto-link" href="/productos/mi-producto-nuevo">`.

4. **Commitear y pushear:**

   ```powershell
   git add src/data/productos.js public/assets/productos/mi-producto-nuevo/ src/pages/index.astro
   git commit -m "Agregar producto Mi Producto Nuevo"
   git push
   ```

### Para editar un producto existente

Solo modificá la entrada en `productos.js`. El cambio se refleja automáticamente en la página de detalle, en el SEO y en los textos pre-cargados de WhatsApp. Para cambiar las fotos, reemplazá los archivos en la carpeta del producto.

### Para sacar un producto

Borrá su entrada del array (la página se deja de generar automáticamente) y sacá la `.producto-card` correspondiente del index.

---

## 📞 3. Cambiar el teléfono, email, dirección o horario (`contacto.js`)

`src/data/contacto.js` centraliza los datos de contacto. Editar el objeto `contacto` actualiza:

- El bloque de información de la sección Contacto del index.
- El número de WhatsApp en el botón flotante y en los CTA de las páginas de producto.
- El teléfono en las páginas de producto.

```js
export const contacto = {
  telefonoDisplay: '11 4193-7728',
  telefonoLink: '+5491141937728',
  whatsappNumero: '5491141937728',
  email: 'ventas@tarewa.com',
  direccion: 'Huaura 235, Morón, Buenos Aires',
  horario: 'Lunes a viernes · 8:00 a 16:30 hs',
};
```

> **Nota**: hoy varias secciones (header, footer, sección de contacto del index) tienen el número y el mail hardcodeados por motivos históricos. Si cambia el número y querés migrar todo a `contacto.js`, hablá con el responsable técnico.

---

## 📜 4. Historia de la empresa (`historia.js`)

Editá `src/data/historia.js` para sumar o modificar hitos del carrusel "60 años de TAREWA" que aparece en la página `/nosotros`. Cada entrada lleva un año, un título, un texto y una imagen opcional en `public/assets/historia/`.

```js
{
  anio: '1965',
  titulo: 'Los inicios',
  texto: 'Texto del hito, 3-5 líneas.',
  imagen: '/assets/historia/1965.jpg',  // opcional
},
```
