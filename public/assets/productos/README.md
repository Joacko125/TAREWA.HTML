# Fotos de las páginas de producto

Cada producto tiene su carpeta acá adentro, con el mismo slug que figura en `src/data/productos.js`.

## Cómo subir las fotos

Por cada producto, dentro de su carpeta (por ejemplo `resistencias-blindadas/`), colocá las fotos numeradas:

- `1.jpg`
- `2.jpg`
- `3.jpg`
- `4.jpg`

La cantidad esperada por defecto es **4 fotos**, pero la página de producto está preparada para mostrar un placeholder elegante en los lugares donde falte una. O sea: podés arrancar con una sola foto y agregar el resto cuando las tengas.

## Recomendaciones

- **Formato:** JPG estándar. Si querés optimizar después, podés convertirlas a `.webp` o `.avif` con el mismo nombre (1.webp, 1.avif) y editar la página `[producto].astro` para que las prefiera.
- **Resolución sugerida:** lado largo entre 1200 y 1600 px. Más grande es desperdicio; más chico se ve borroso.
- **Aspecto:** el carrusel usa proporción 4:3 con `object-fit: cover`, así que si la foto es cuadrada o vertical va a quedar recortada. Si querés evitarlo, usá fotos horizontales 4:3 ó 16:9.
- **Peso:** apuntá a menos de 250 KB por foto. La gente las va a abrir desde el celular.

## Si querés agregar más fotos por producto

Editá el archivo `src/pages/catalogos/[producto].astro` y modificá la constante `fotos = [1, 2, 3, 4]` agregando más números. Después subí `5.jpg`, `6.jpg`, etc. en la carpeta del producto correspondiente.
