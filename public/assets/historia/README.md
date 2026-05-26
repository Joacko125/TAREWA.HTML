# Fotos de la historia de TAREWA

Acá van las imágenes del carrusel "60 años de TAREWA" que aparece en `/nosotros`.

## Convención de nombres

Una foto por hito, nombrada con el año del hito:

- `1965.jpg`
- `1978.jpg`
- `1990.jpg`
- `2002.jpg`
- `2015.jpg`
- `2025.jpg`

Si en `src/data/historia.js` cambiás el campo `anio` de un hito, acordate de renombrar el archivo o de cambiar el campo `imagen` apuntando al nombre nuevo.

## Recomendaciones

- **Formato:** JPG. Si las querés optimizar, podés convertirlas a `.webp` y editar `historia.js` para que apunte a esa extensión.
- **Aspecto:** la imagen ocupa el lado izquierdo del carrusel (en desktop) con `object-fit: cover`. Funciona bien con fotos horizontales 4:3 ó 16:9.
- **Si te faltan fotos antiguas:** la página muestra un placeholder elegante con el año en grande sobre fondo oscuro, así que podés arrancar con solo algunos hitos ilustrados.
