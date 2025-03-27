# Guía: Flexbox en CSS

Flexbox (Flexible Box Layout) es un modelo de diseño en CSS que permite distribuir elementos dentro de un contenedor y alinearlos de manera flexible, incluso cuando su tamaño es dinámico. Es una herramienta muy poderosa para crear diseños responsivos y alineaciones complejas.

## Conceptos básicos

El sistema Flexbox se basa en dos componentes principales:

1. **Contenedor Flex**: El elemento que contiene los elementos flexibles. Se define con la propiedad `display: flex;`.
2. **Elementos Flex**: Los elementos hijos directos del contenedor flex.

### Propiedades del contenedor Flex
- **`display: flex;`**: Activa el modelo flex en el contenedor.
- **`flex-direction`**: Define la dirección de los elementos flexibles. Valores comunes:
  - `row`: Dirección horizontal (por defecto).
  - `column`: Dirección vertical.
- **`justify-content`**: Alinea los elementos horizontalmente.
  - Valores: `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`.
- **`align-items`**: Alinea los elementos verticalmente.
  - Valores: `flex-start`, `center`, `flex-end`, `stretch`, `baseline`.
- **`flex-wrap`**: Permite que los elementos se envuelvan en múltiples líneas.
  - Valores: `nowrap` (por defecto), `wrap`, `wrap-reverse`.

### Propiedades de los elementos Flex
- **`flex-grow`**: Define cuánto puede crecer un elemento en relación con los demás.
- **`flex-shrink`**: Define cuánto puede reducirse un elemento si el espacio es limitado.
- **`flex-basis`**: Establece el tamaño inicial de un elemento antes de que se distribuyan los espacios.

## Ejemplo: Carátulas de películas con Flexbox
A continuación, un ejemplo práctico donde usamos Flexbox para alinear carátulas de películas en un diseño responsivo.

### Código HTML
```html
<section id="caratulas" class="section">
    <h2>Carátulas de Películas</h2>
    <div class="caratulas-container">
        <div class="caratula">
            <img src="https://i.3djuegos.com/juegos/17674/uncharted_la_pel__cula/fotos/ficha/uncharted_la_pel__cula-5579132.webp" alt="Película 1">
            <p>La Aventura del Cosmos</p>
        </div>
        <div class="caratula">
            <img src="https://i.3djuegos.com/juegos/17674/uncharted_la_pel__cula/fotos/ficha/uncharted_la_pel__cula-5579132.webp" alt="Película 2">
            <p>Sombras Eternas</p>
        </div>
        <div class="caratula">
            <img src="https://i.3djuegos.com/juegos/17674/uncharted_la_pel__cula/fotos/ficha/uncharted_la_pel__cula-5579132.webp" alt="Película 3">
            <p>El Sueño de Aquiles</p>
        </div>
    </div>
</section>
```

### Código CSS
```css
/* Contenedor Flex para las carátulas */
.caratulas-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

.caratula {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  width: 200px;
}

.caratula img {
  width: 100%;
  height: auto;
  display: block;
}

.caratula p {
  margin: 1rem 0;
  font-size: 1rem;
  color: #333;
}
```

## Explicación del ejemplo
1. **Estructura:**
    - El contenedor `.caratulas-container` utiliza `display: flex` para alinear los elementos de forma horizontal y permitir que se envuelvan con `flex-wrap: wrap`.
    - Los elementos `.caratula` tienen un tamaño fijo, con bordes redondeados y sombra para un diseño atractivo.

2. **Estilos:**
    - `justify-content: center` asegura que las carátulas estén centradas horizontalmente.
    - `gap: 2rem` introduce espacio uniforme entre las carátulas.

## Beneficios de Flexbox
- Facilita la creación de diseños responsivos.
- Permite una alineación precisa de los elementos.
- Reduce la necesidad de utilizar flotantes (`float`) o `inline-block`.


[¡Aprende jugando!](https://flexboxfroggy.com/#es)