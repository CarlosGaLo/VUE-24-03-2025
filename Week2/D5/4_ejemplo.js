// Función asíncrona para cargar el archivo JSON

async function cargarArchivoJSON() {
  try {
    // Hacer una solicitud para obtener el archivo JSON
    const response = await fetch("./0_db.json");
    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      // Si hay un error en la respuesta, lanzar una excepción
      throw new Error("Error al cargar el archivo JSON");
    }
    // Convertir la respuesta a un objeto JSON
    const personajesMitologicos = await response.json();
    console.log(personajesMitologicos.personajes);
    // Obtener el elemento de la tabla donde se mostrarán los datos
    const tablapersonajes = document.getElementById("tablapersonajes");

    // Iterar sobre los personajes del objeto JSON y crear filas en la tabla
    personajesMitologicos.personajes.forEach((lugar) => {
      // Crear una nueva fila
      const row = document.createElement("tr");
      // Llenar la fila con datos de cada lugar
      row.innerHTML = `
          <td>${lugar.nombre}</td>
          <td>${lugar.mitologia}</td>
          <td>${lugar.descripcion}</td>
          <td>${lugar.primera_aparicion}</td>
        `;
      // Agregar la fila a la tabla
      tablapersonajes.appendChild(row);
    });
  } catch (error) {
    // Capturar cualquier error que ocurra durante el proceso y mostrarlo en la consola
    console.error("Error:", error);
  }
}

// Llamar a la función para cargar el archivo JSON cuando la página se cargue
cargarArchivoJSON();

/* EJEMPLO DE DESTRUCTURING */
async function cargarArchivoJSONDestructuring() {
  try {
    const response = await fetch("./0_db.json");
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }
    const { personajes } = await response.json(); // Destructuring del objeto JSON
    const tablapersonajes = document.getElementById("tablapersonajesDestructuring");

    console.log(personajes);

    personajes.forEach(({ nombre, mitologia, descripcion, primera_aparicion }) => {
      // Destructuring de cada lugar
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${nombre}</td>
          <td>${mitologia}</td>
          <td>${descripcion}</td>
          <td>${primera_aparicion}</td>
        `;
      tablapersonajes.appendChild(row);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

cargarArchivoJSONDestructuring();

/* EJEMPLO DEL SERVIDOR */
async function cargarArchivoJSONServidor() {
  try {
    //Vamos a traernos, en lugar de todo el archivo, solamente la sección "personajes".
    const response = await fetch("http://localhost:8000/personajes");
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }
    const personajesMitologicos = await response.json();
    console.log(personajesMitologicos);
    const tablapersonajes = document.getElementById("tablapersonajesServidor");

    personajesMitologicos.forEach((lugar) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${lugar.nombre}</td>
          <td>${lugar.mitologia}</td>
          <td>${lugar.descripcion}</td>
          <td>${lugar.primera_aparicion}</td>
        `;
      tablapersonajes.appendChild(row);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
cargarArchivoJSONServidor();
