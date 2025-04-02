# Ejercicio de Manipulación del DOM con Películas

En este ejercicio crearemos una pequeña aplicación web que muestre una lista de películas y nos permita agregar nuevas películas mediante un formulario simple. Practicaremos la manipulación básica del DOM y la asociación de eventos en JavaScript.

> **Objetivo**:
>
> - Mostrar una lista de películas inicial en el DOM.
> - Agregar nuevas películas a la lista a través de un formulario.
> - Opcionalmente, podrías agregar funciones extra (por ejemplo, eliminar películas o marcar como vistas).

---

## Instrucciones

1. **Crea los tres archivos**: `index.html`, `styles.css` y `script.js`.
2. **En `index.html`**:
   - Estructura básica de un documento HTML.
   - Un contenedor para la lista de películas existentes.
   - Un formulario (o elementos de entrada) para agregar nuevas películas.
   - Enlaza el archivo `styles.css` y el archivo `script.js`.
3. **En `styles.css`**:
   - Aplica un estilo sencillo para que la lista de películas se vea ordenada.
4. **En `script.js`**:
   - Crea un array de películas inicial y muéstralas en el DOM.
   - Escucha el evento `submit` o `click` del formulario/botón para agregar la nueva película al array y actualizar la lista en el DOM.
   - Asegúrate de limpiar el campo de entrada después de agregar la película.

---

## Archivos del ejercicio

### `index.html`

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lista de Películas</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Mis Películas Favoritas</h1>

    <ul id="movie-list">
      <!-- Aquí se mostrarán las películas -->
    </ul>

    <div id="add-movie-section">
      <input type="text" id="movie-input" placeholder="Ingresa una película" />
      <button id="add-movie-btn">Agregar Película</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

---

### `styles.css`

```css
/* Un CSS práctico y estético para la página de películas */

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: #f2f2f2;
}

h1 {
  text-align: center;
  margin-top: 20px;
  color: #333;
}

#movie-list {
  max-width: 500px;
  margin: 20px auto;
  list-style-type: none;
  padding: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

#movie-list li {
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  color: #333;
}

#movie-list li:last-child {
  border-bottom: none;
}

#add-movie-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  max-width: 500px;
  gap: 10px;
}

#movie-input {
  flex: 1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 16px;
}

#add-movie-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #008cff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
}

#add-movie-btn:hover {
  background-color: #0076d1;
}
```

---

### `script.js`

```js
// 1. Crear un array con algunas películas iniciales
const movies = ["El Padrino", "Matrix", "Interestelar", "Inception"];

// 2. Seleccionar elementos del DOM
const movieList = document.getElementById("movie-list");
const movieInput = document.getElementById("movie-input");
const addMovieBtn = document.getElementById("add-movie-btn");

// 3. Función para mostrar películas en la lista
function renderMovies() {
  // Limpiamos la lista antes de volver a llenar
  movieList.innerHTML = "";

  // Recorremos el array de películas y creamos elementos <li>
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie;
    movieList.appendChild(li);
  });
}

// 4. Función para agregar una película al array y actualizar la vista
function addMovie() {
  const newMovie = movieInput.value.trim();
  if (newMovie !== "") {
    movies.push(newMovie);
    renderMovies();
    movieInput.value = "";
  }
}

// 5. Agregar evento al botón para agregar película
addMovieBtn.addEventListener("click", addMovie);

// 6. Mostrar la lista inicial de películas al cargar la página
renderMovies();
```

---

## Solución

A continuación, se muestra una posible solución completa en caso de que necesites revisar tu trabajo. **¡Intenta resolverlo primero por tu cuenta!**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lista de Películas</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Mis Películas Favoritas</h1>

    <ul id="movie-list"></ul>

    <div id="add-movie-section">
      <input type="text" id="movie-input" placeholder="Ingresa una película" />
      <button id="add-movie-btn">Agregar Película</button>
    </div>

    <script>
      const movies = ["El Padrino", "Matrix", "Interestelar", "Inception"];

      const movieList = document.getElementById("movie-list");
      const movieInput = document.getElementById("movie-input");
      const addMovieBtn = document.getElementById("add-movie-btn");

      function renderMovies() {
        movieList.innerHTML = "";
        movies.forEach((movie) => {
          const li = document.createElement("li");
          li.textContent = movie;
          movieList.appendChild(li);
        });
      }

      function addMovie() {
        const newMovie = movieInput.value.trim();
        if (newMovie !== "") {
          movies.push(newMovie);
          renderMovies();
          movieInput.value = "";
        }
      }

      addMovieBtn.addEventListener("click", addMovie);

      renderMovies();
    </script>
  </body>
</html>
```
