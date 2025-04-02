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