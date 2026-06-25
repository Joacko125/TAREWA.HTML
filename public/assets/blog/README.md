# Imágenes de portada del blog

Acá van las imágenes que ilustran los posts del blog.

## Convención de nombres

El archivo de imagen debe tener el **mismo nombre que el slug del post** (sin la extensión .md).

Por ejemplo, para el post `src/content/blog/como-elegir-potencia-resistencia-industrial.md`, la imagen va en:

```
public/assets/blog/como-elegir-potencia-resistencia-industrial.avif
```

En cada post, el campo `image:` del frontmatter ya apunta a esa ruta. Cuando subas la foto, se usa automáticamente como **og:image** para redes sociales (link previews de WhatsApp, Twitter, LinkedIn, etc.).

## Recomendaciones

- **Formato:** `.avif` (el sitio está estandarizado en avif). Convertí tus `.jpg`/`.png` con `sharp` o squoosh.app.
- **Tamaño sugerido:** 1200 × 630 px (formato Open Graph estándar para redes sociales).
- **Peso:** apuntá a menos de 200 KB para no penalizar el tiempo de carga.
- **Contenido:** una foto del producto o del proceso al que se refiere el post. Evitá imágenes de stock genéricas si podés.
