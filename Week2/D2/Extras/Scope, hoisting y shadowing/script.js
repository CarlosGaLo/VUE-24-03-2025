function prueba(x) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  console.log("Esto es por el var " + i);
  for (let i = 0; i < x; i++) {
    console.log("Bucle for secundario ", i);
  }
  console.log("Esto es por el var " + i);
}

prueba(10);
