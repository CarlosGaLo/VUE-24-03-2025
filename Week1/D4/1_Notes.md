# Responsive Design

El diseño responsive es aquel que nos permite que nuestra página web se vea bien en todos los dispositivos.

[Antes no hacía falta el responsive.](https://www.databot.es/blog/historia-diseno-web), pero ahora sí.

Ten en cuenta que no es lo mismo una pantalla de PC (apaisada y más grande) que la de un móvil (vertical y más pequeña).

Acuérdate de añadir la meta-tag viewport, aunque si creas el HTML usando ! se añadirá automáticamente de forma correcta.

`<meta name="viewport" content="width=device-width, initial-scale=1" />`

¿Qué hace esta línea de HTML?
`<meta>: Esta es una etiqueta de metadatos en HTML que proporciona información sobre el documento HTML. En este caso, se utiliza para configurar la vista en dispositivos móviles.`

`name="viewport": Este atributo especifica el nombre del metadato. En este contexto, "viewport" se refiere a la ventana visible del navegador en un dispositivo móvil.`

`content="width=device-width, initial-scale=1": Este es el contenido asociado con el metadato. Tiene dos partes:`

`width=device-width: Establece el ancho de la ventana de visualización en el ancho del dispositivo. Esto significa que el ancho de la página se ajustará automáticamente al ancho de la pantalla del dispositivo, lo que garantiza que ningún contenido se muestre fuera de la pantalla horizontalmente.`

`initial-scale=1: Esto establece el nivel de escala inicial de la página. Un valor de 1 indica que la página se mostrará inicialmente a su tamaño original sin ninguna escala aplicada. Es decir, la página se mostrará a un tamaño 1:1 sin zoom inicial.`

¿Cómo podemos hacer esto?

## Responsive

1. Utiliza unidades relativas.
   1. vw o vh, como vimos en los apuntes de ayer.
   2. em o rem
   3. %
   4. vmin y vmax -> Hacen referencia a la dimensión más grande y más pequeña del dispositivo, sin distinguir si es la altura o la anchura.
2. Procura que el diseño (si es que depende de ti) sea fácilmente exportable.
3. Mobile first!

## Flex & Grid

### Responsive Design

- Utiliza unidades relativas como porcentajes o ems en lugar de unidades fijas (px) para hacer que tu diseño se adapte a diferentes tamaños de pantalla.

- Usa el atributo `max-width` en contenedores para limitar el ancho máximo y evitar que el contenido se expanda demasiado en pantallas grandes.

### Flexbox

- Flexbox es ideal para diseñar diseños flexibles y alineación de elementos en una sola dimensión (fila o columna).

- Utiliza `display: flex;` en el contenedor padre y aplica propiedades como `justify-content` y `align-items` para controlar la alineación y distribución de los elementos hijos.

- Puedes controlar el orden de los elementos utilizando la propiedad `order`.

- Acuérdate del ejemplo. Flex es como querer darle un caramelo a un niño, no se lo puedes dar al niño directamente, el caramelo tienes que dárselo al padre y ya que él se encargue. Flex siempre se aplica sobre el padre que contiene todos los elementos que quieres convertir en flex.

### Grid

- Grid es perfecto para diseñar diseños bidimensionales más complejos.

- Utiliza `display: grid;` en el contenedor padre y define las columnas y filas utilizando propiedades como `grid-template-columns` y `grid-template-rows`. Esto te generará la cuadrícula.

- Puedes controlar el espaciado entre las celdas utilizando `grid-gap` y alinear los elementos con `justify-items` y `align-items`. Si te lías, acuérdate de usar el inspector con las herramientas que Google Chrome te da, son muy útiles.

- Grid también te permite controlar el diseño en diferentes áreas de la página utilizando `grid-template-areas`.

- Experimenta con las funciones de repetición y fracciones para crear diseños más dinámicos y escalables.

- Acuérdate del ejemplo. Grid es como flex, siempre hay que dárselo al padre que contiene todos los elementos que quieres convertir en grid.

- Practica mucho! Hasta familiarizarte tanto con flex (el más usado) como con grid (el más potente).

## Transiciones y animaciones

# Consejos para Trabajar con CSS: Animaciones y Transiciones

## Animaciones

- Utiliza la regla `@keyframes` para definir las etapas de una animación. Puedes especificar diferentes estilos en diferentes puntos clave de la animación.

- Asigna la animación a un elemento utilizando la propiedad `animation`, donde especificas el nombre de la animación, la duración y si se repetirá o no.

- Experimenta con diferentes propiedades de animación como `transform`, `opacity`, `color`, etc., para crear una variedad de efectos visuales.

- Practica mucho! Es la única forma de familiarizarse con todo esto.

## Transiciones

- Las transiciones en CSS te permiten cambiar gradualmente los valores de las propiedades CSS de un estado a otro.

- Especifica la propiedad que deseas animar con la propiedad `transition` en el estado inicial, luego define cómo deseas que cambie en el estado final.

- Puedes definir la duración, el retraso y la función de temporización de la transición para controlar cómo se realiza la animación.

- Las transiciones son ideales para efectos de interacción como el cambio de color al pasar el ratón sobre un elemento o la suavización de cambios de tamaño y posición.
