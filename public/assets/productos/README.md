# Fotos de las páginas de producto

Cada producto tiene su carpeta acá adentro, con el mismo slug que figura en `src/data/productos.js`.

## Cómo subir las fotos

Por cada producto, dentro de su carpeta (por ejemplo `resistencias-blindadas/`), colocá las fotos numeradas en formato **.avif**:

- `1.avif`
- `2.avif`
- `3.avif`
- `4.avif`

No hay cantidad fija: la página de producto levanta en el build todas las fotos numeradas que haya en la carpeta, en orden (la de `imagen` en `productos.js` va siempre primera). Podés arrancar con una sola foto y agregar el resto cuando las tengas.

## Recomendaciones

- **Formato:** `.avif` (el sitio está estandarizado en avif). Convertí tus `.jpg`/`.png` con `sharp` o squoosh.app antes de subirlas, manteniendo el nombre numerado (`1.avif`, `2.avif`, ...).
- **Resolución sugerida:** lado largo entre 1200 y 1600 px. Más grande es desperdicio; más chico se ve borroso.
- **Aspecto:** el carrusel usa proporción 4:3 con `object-fit: cover`, así que si la foto es cuadrada o vertical va a quedar recortada. Si querés evitarlo, usá fotos horizontales 4:3 ó 16:9.
- **Peso:** apuntá a menos de 250 KB por foto. La gente las va a abrir desde el celular.

## Si querés agregar más fotos por producto

Subí `7.avif`, `8.avif`, etc. en la carpeta del producto correspondiente: no hace falta tocar código. Las miniaturas se acomodan solas en filas parejas.
