let miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let exito = false;
    if (exito) {
      resolve("La operación asíncrona se completó con éxito");
    } else {
      reject("La operación asíncrona ha fallado");
    }
  }, 2000);
});

miPromesa
  .then((mensaje) => {
    console.log("Éxito: ", mensaje);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
