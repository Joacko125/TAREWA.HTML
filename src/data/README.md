# Cómo agregar un catálogo PDF a la web

Los catálogos se muestran en la página `/catalogos` y los clientes los descargan con un click.

## Paso a paso

1. **Copiar el PDF** a la carpeta `public/assets/catalogos/`
   Ejemplo: `public/assets/catalogos/catalogo-general-2025.pdf`
   Usá un nombre de archivo en kebab-case (sin tildes, sin espacios, sin mayúsculas).

2. **Editar `src/data/catalogos.js`** y agregar una entrada al array `catalogos` con la siguiente forma:

   ```js
   {
     id: 'catalogo-general-2025',          // slug único, igual al nombre del archivo sin ".pdf"
     titulo: 'Catálogo General 2025',      // título visible en la card
     descripcion: 'Línea completa de resistencias eléctricas industriales TAREWA.',
     archivo: '/assets/catalogos/catalogo-general-2025.pdf',
     fecha: '2025-01-15',                  // fecha de publicación (YYYY-MM-DD)
     tamano: '2.4 MB',                     // ver tamaño en Windows: click derecho > Propiedades
     categoria: 'General',                 // opcional
   },
   ```

3. **Commitear y pushear** los cambios:

   ```powershell
   git add public/assets/catalogos/ src/data/catalogos.js
   git commit -m "Agregar catálogo General 2025"
   git push
   ```

4. **Netlify** detecta el push y hace deploy automático en ~1 minuto. El nuevo catálogo aparece en `https://tarewa.com/catalogos`.

## Notas

- El orden visible es el del array. Lo más nuevo primero.
- Si el array queda vacío, la página muestra un mensaje "Próximamente publicaremos catálogos".
- Si querés sacar un catálogo, comentá o eliminá la entrada del array (el archivo PDF podés dejarlo o borrarlo, no rompe nada).
- El botón "Descargar PDF" usa el atributo HTML `download`, así que se descarga directo en vez de abrirse en el navegador.
