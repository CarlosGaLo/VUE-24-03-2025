// Ejemplo de Promesa para simular una operación asíncrona
let miPromesa = new Promise((resolve, reject) => {
  // Simulamos una operación asíncrona que toma 2 segundos
  setTimeout(() => {
    let exito = true; // Cambiar a false para simular un fallo
    if (exito) {
      // Si la operación fue exitosa, resolvemos la promesa con un mensaje
      resolve("La operación asíncrona se completó con éxito.");
    } else {
      // Si la operación falló, rechazamos la promesa con un mensaje de error
      reject("La operación asíncrona ha fallado.");
    }
  }, 2000);
});

// Utilizando la Promesa
miPromesa
  .then((mensaje) => {
    // Se ejecuta si la promesa se resuelve exitosamente
    console.log("Éxito:", mensaje);
  })
  .catch((error) => {
    // Se ejecuta si la promesa es rechazada (falla)
    console.error("Error:", error);
  });
