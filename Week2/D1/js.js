// const coche = {
//   puertas: 5,
//   modelo: "clio",
//   matricula: "000000fff",
//   color: "rojo",
//   kmRecorridos: 10000,
// };

// // console.log(coche);

// // console.log("Mi coche es de color " + coche.color);

// /*
// DRY -> Don't Repeat Yourself!!!.

// KISS -> Keep it simple, stupid.
// */

// // coche.puertas = 3;

// // console.log(Object.keys(coche));

// const user = {
//   nombreDeUsuario: "Paco",
//   password: "1234",
// };

// console.log(user);

// delete user.password;

// console.log(user);

// const personas = [1, "María", 3, 4];

// const ejemploComplejo = [1, "María", coche];

// const ejemploComplejo2 = [coche, user];

// console.log(personas);
// console.log(ejemploComplejo);
// console.log(ejemploComplejo2);

// let palabra = "Ejemplo";
// console.log(palabra.split(""));

// const puerta = {
//   color: "marron",
//   dimensiones: "21x22",
// };

// const puerta2 = {
//   color: "rojo",
//   dimensiones: "21x22",
// };

// const puerta3 = {
//   color: "verde",
//   dimensiones: "21x22",
// };

// const casa = {
//   puertas: [puerta, puerta2, puerta3],
//   habitacion1: {
//     dimensiones: 200,
//   },
//   color: "blanco",
// };

// console.log(casa.color);

// for (let i = 0; i < 5; i++) {
//   let patata = "patata";
//   console.log(patata);
// }

// for (let i = 0; i < 5; i++) {
//   let patata = "patata";
//   console.log(patata);
// }

// let numero = 1600;

function dividir(n) {
  let index = 0;
  while (n > 1) {
    n = n / 2;
    index++;
  }
  console.log(n);
  console.log(index);
}

// dividir(1600);
// dividir(numero);

// console.log(5);

function porteroDeDiscoteca(mayorDeEdad) {
  let result = false;

  if (mayorDeEdad >= 18) {
    console.log("Puedes pasar");
    result = true;
  } else {
    console.log("No puedes pasar");
  }

  return result;
}

function porteroDeDiscotecaAlternativa(mayorDeEdad) {
  let result = "No puedes pasar";

  if (mayorDeEdad >= 18) {
    result = "Puedes pasar";
  }

  return result;
}

porteroDeDiscoteca(18);

console.log(porteroDeDiscotecaAlternativa(18));

let puedoPasar = porteroDeDiscotecaAlternativa(20);

let ejemploVariosValores = "Aquí un ejemplo";

console.log(ejemploVariosValores.split(""))
