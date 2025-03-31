// const coche = {
//   puerta: 5,
//   matricula: "000000fffff",
//   color: "rojo",
//   kmRecorridos: 10000,
// };
// const coche1 = {
//   puerta: 3,
//   matricula: "2222",
//   color: "azul",
//   kmRecorridos: 50000,
// };
// // coche = coche1;
// // const -> 10,11,12,13,14,15,16,17,18...
// // 10,11,13 -> apuntan a la caja 60000 puertas
// // 14,15,16 -> apuntan a la caja 80000 matricula
// // 17 -> apunta a la caja 5375 almacena color
// // 18 -> apunta a la caja 100 almacena kmRecorridos

// console.log(coche);
// console.log(coche.color);

// coche.color = "verde";
// // coche.setColor("verde");
// // coche.getColor();

// console.log(coche.color);

// coche.marca = "Toyota";
// console.log(coche.marca);

// delete coche.marca;

// console.log(coche);

// const peliculas = ["El señor de los anillos", "Matrix", "Forrest Gump"];

// const peliculasObj = [
//   {
//     name: "El señor de los anillos",
//     year: 2001,
//   },
//   {
//     name: "Regreso al futuro",
//     year: 1984,
//   },
//   {
//     name: "Matrix",
//     year: 1999,
//   },
//   "Una frase",
//   1989,
//   {
//     puerta: 5,
//     matricula: "000000fffff",
//     color: "rojo",
//     kmRecorridos: 10000,
//     concesionario: {
//       name: "Málaga Car",
//       year: 1990,
//     },
//   },
// ];

// console.log(peliculasObj);
// console.log(peliculasObj[0]);
// console.log(peliculasObj[0].name);

// // Arrays -> Están ordenados
// // Objetos -> No están ordenados

// const repetido = [0, 1, 2, 3, 0, 1, 2, 3];
// const repetidoObj = {
//   primer: 1,
//   segun: 2,
//   tercer: 3,
//   primer: 4,
// };

// const peliculaArray = {
//   name: "Matrix",
//   year: 1999,
//   cast: [{
//     id: 1,
//     name: "Keanu Reeves",
//     year: 1650,
//     rol: "main character"
//   }]
// }

// console.log(repetidoObj)

const peliculasObj = [
  {
    name: "El señor de los anillos",
    year: 2001,
  },
  {
    name: "Regreso al futuro",
    year: 1984,
  },
  {
    name: "Matrix",
    year: 1999,
  },
];

for (let i = 0; i < peliculasObj.length; i++) {
  console.log(i + 1 + " - " + peliculasObj[i].name);
}

const peliculas = "Un conjunto de películas";
console.log(peliculas);

function pelis(peliculas) {
  console.log(peliculas);
  // Va a recorrer todas las pelis, mostrando su nombre.

  if (!peliculas.length) return;

  peliculas.forEach((pelicula, index) =>
    console.log(index + 1 + " - " + pelicula.name)
  );
}
console.log(peliculas);

pelis(peliculasObj);
console.log(peliculas);
