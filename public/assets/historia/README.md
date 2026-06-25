# Fotos de la historia de TAREWA

Acá van las imágenes del carrusel "60 años de TAREWA" que aparece en `/nosotros`.

## Convención de nombres

Una foto por hito, nombrada con el año del hito, en formato **.avif**:

- `1965.avif`
- `1978.avif`
- `1990.avif`
- `2002.avif`
- `2015.avif`
- `2025.avif`

Si en `src/data/historia.js` cambiás el campo `anio` de un hito, acordate de renombrar el archivo o de cambiar el campo `imagen` apuntando al nombre nuevo.

## Recomendaciones

- **Formato:** `.avif` (el sitio está estandarizado en avif). Convertí tus `.jpg`/`.png` con `sharp` o squoosh.app antes de subirlas.
- **Aspecto:** la imagen ocupa el lado izquierdo del carrusel (en desktop) con `object-fit: cover`. Funciona bien con fotos horizontales 4:3 ó 16:9.
- **Si te faltan fotos antiguas:** la página muestra un placeholder elegante con el año en grande sobre fondo oscuro, así que podés arrancar con solo algunos hitos ilustrados.
