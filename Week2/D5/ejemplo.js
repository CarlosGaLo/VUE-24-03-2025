// Procedemos a rellenar la tabla

//1º Traerme los datos
//2º Saber dónde los voy a poner
//3º Procesar los datos
//4º Poner los datos

/* Normal */
async function cargarArchivoJSON() {
  try {
    // 1º Cargamos (nos traemos) el archivo JSON
    const response = await fetch("./mitologia.json");

    if (!response) {
      throw new Error("Error al cargar el JSON");
    }

    const personajesMitologicos = await response.json();
    const personajes = personajesMitologicos.personajes;
    //Hasta aquí la carga del JSON.

    //2º ¿Dónde vamos a insertar los datos?
    const tablaPersonajes = document.getElementById("tablaPersonajes");

    //3º
    personajes.forEach((elPerson) => {
      const row = document.createElement("tr");

      row.innerHTML = `
            <td class="center text-red">${elPerson.nombre}</td>
            <td class="center">${elPerson.mitologia}</td>
            <td>${elPerson.descripcion}</td>
            <td>${elPerson.primera_aparicion}</td>
        `;
      //4º
      tablaPersonajes.appendChild(row);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}
cargarArchivoJSON();

/* Destructuring */
async function cargarArchivoJSONDestructurado() {
  try {
    // 1º Cargamos (nos traemos) el archivo JSON
    const response = await fetch("./mitologia.json");

    if (!response) {
      throw new Error("Error al cargar el JSON");
    }

    //El único cambio es que recibo los datos usando destructuring.
    const { personajes } = await response.json();

    const tablaPersonajes = document.getElementById(
      "tablaPersonajesDestructurada"
    );

    personajes.forEach((elPerson) => {
      const row = document.createElement("tr");

      row.innerHTML = `
              <td class="center text-red">${elPerson.nombre}</td>
              <td class="center">${elPerson.mitologia}</td>
              <td>${elPerson.descripcion}</td>
              <td>${elPerson.primera_aparicion}</td>
          `;

      tablaPersonajes.appendChild(row);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}
cargarArchivoJSONDestructurado();

/* URL */
async function cargarArchivoURL() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");

    if (!response) {
      throw new Error("Error al cargar el JSON");
    }

    const personajes = await response.json();

    const tablaPersonajes = document.getElementById("tablaPersonajesURL");

    personajes.forEach((elPerson) => {
      const row = document.createElement("tr");

      row.innerHTML = `
              <td class="center text-red">${elPerson.name}</td>
              <td class="center">${elPerson.content}</td>
              <td>${elPerson.description}</td>
              <td>${elPerson.completed_on}</td>    
              <img src=${elPerson.image}, alt="">
    
          `;

      tablaPersonajes.appendChild(row);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}
cargarArchivoURL();
