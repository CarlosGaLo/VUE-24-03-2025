# Media Queries en CSS

Las **Media Queries** permiten aplicar estilos CSS de forma condicional, en función de características del dispositivo o del navegador (como el ancho de pantalla, resolución, orientación, etc.).

Son fundamentales para construir diseños **responsive**, adaptables a diferentes tamaños de pantalla (móvil, tablet, escritorio).

---

## Sintaxis básica

```css
@media media-type and (condition) {
  /* CSS styles */
}
```

Ejemplo:

```css
@media screen and (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

---

## Media Queries más usadas

- `@media (max-width: 600px)` – Dispositivos móviles pequeños
- `@media (min-width: 601px) and (max-width: 768px)` – Tablets en vertical
- `@media (min-width: 769px) and (max-width: 1024px)` – Tablets en horizontal
- `@media (min-width: 1025px) and (max-width: 1440px)` – Escritorio estándar
- `@media (min-width: 1441px)` – Pantallas grandes
- `@media (orientation: landscape)` – Aplica si el dispositivo está en horizontal
- `@media (orientation: portrait)` – Aplica si el dispositivo está en vertical
- `@media (prefers-color-scheme: dark)` – Aplica si el usuario prefiere modo oscuro
- `@media (hover: none)` – Dispositivos que no soportan hover (ej. móviles)
- `@media (pointer: coarse)` – Dispositivos con puntero grueso (ej. touch)

---

## Parámetros disponibles para Media Queries

| Parámetro                        | Descripción                                                            |
| -------------------------------- | ---------------------------------------------------------------------- |
| `width` / `height`               | Ancho/alto del viewport                                                |
| `device-width` / `device-height` | Ancho/alto de la pantalla del dispositivo (deprecated en muchos casos) |
| `orientation`                    | `portrait` o `landscape`                                               |
| `resolution`                     | Resolución en dpi o dppx                                               |
| `aspect-ratio`                   | Relación entre ancho y alto del viewport                               |
| `device-aspect-ratio`            | Relación del dispositivo (deprecated)                                  |
| `prefers-color-scheme`           | Preferencia de tema (`light` o `dark`)                                 |
| `hover`                          | Si el dispositivo soporta el evento hover                              |
| `pointer`                        | Precisión del puntero (`none`, `coarse`, `fine`)                       |
| `prefers-reduced-motion`         | Si el usuario prefiere animaciones reducidas                           |
| `color-gamut`                    | Precisión de color del dispositivo (`srgb`, `p3`, `rec2020`)           |

---

## Enlace

[https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
