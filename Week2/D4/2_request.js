// Realizar una solicitud GET a una URL específica
// Vamos a pedirle un request a la pokemon API https://pokeapi.co/
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    // Parsear la respuesta JSON
    return response.json();
  })
  .then((data) => {
    // Hacer algo con los datos obtenidos
    console.log(data);
  })
  .catch((error) => {
    // Capturar y manejar errores
    console.error("Error:", error);
  });
