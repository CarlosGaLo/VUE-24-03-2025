// Cómo imprimir en pantalla
// console.log("Hola Caracola");
// console.log(1);
// console.log("1");
// console.log(typeof 1);
// console.log(typeof "1");

// Tipos de variables primitivas
/*
    Una variable primitiva es aquella que se "entiende de forma directa" por parte de JavaScript.
*/
/*
    Número -> Number -> -1, 0, 1, 2562, 2.32698... Infinite y NaN = Not A Number
    Cadena de caracteres -> String -> "Esta frase es solo una variable".
    Booleano -> Boolean -> True or False.
    Nulo -> Null
    Indefinido -> Undefined
    Símbolo -> Symbol
*/
/*
    Qué es una variable
    Es una palabra en la que almacenamos algo que puede cambiar.

    Qué es una constante
    Es una palabra en la que almacenamos algo que no va a cambiar.
*/

// Cómo declarar una variable
// let x = 2;
// console.log(x);
// console.log(typeof x);

// x = "Acabo de cambiar el valor 0 por este String";
// console.log(x);
// console.log(typeof x);

// x = null;
// console.log(x);
// console.log(typeof x);

// Cómo declarar una constante
// const y = 5;
// console.log("Esta es la constante y: " + y);

//Esto no se puede hacer -> y = "otra cosa";
// let z = 2;

// console.log(y + z);

// If statement
// let edad = 25;

// if (edad >= 25) {
//   console.log("Estás más cerca de los 50 que de los 0");
// } else {
//   console.log("Eres muy joven, que envidia!");
// }

// True significa sí
// False significa no
// Principio de tercero excluido.
let quieresPostre = true; // ¿Estás registrado en la página?
let quieresNatillas = false;
let quieresChocolate = false;

// if (quieresPostre) {
//   console.log("¿Qué quieres de postre?");
//   if (quieresNatillas) {
//     console.log("Hay natillas");
//   } else {
//     console.log("Hay chocolate");
//   }
// } else {
//   console.log("Otro día será");
// }

// if (quieresNatillas) {
//   console.log("Toma natillas");
// } else if (quieresChocolate) {
//   console.log("Toma chocolate");
// } else {
//   console.log("No tengo nada más para darte");
// }

// let isLogged = true;
// let hasWatchList = false;

// if (isLogged) {
//   if (hasWatchList) {
//     console.log("Mostrar lista de favoritos");
//   }
// } else {
//   console.log("Le pido que se autentifique");
// }
/*
    Cómo se lee:
    if -> si se cumple
    () -> la condición
    {} -> ejecuta esto
    log -> muéstrame por pantalla
    else if -> si se cumple esto otro
    else -> en cualquier otro caso
*/

// let queQuieresHacerHoy = "playa";

// if (queQuieresHacerHoy === "playa") {
//   console.log("nos vamos a la playa");
// } else if (queQuieresHacerHoy === "montaña") {
//   console.log("nos vamos a la montaña");
// } else {
//   console.log("a mí no me apetece ir a " + queQuieresHacerHoy);
// }

// switch (queQuieresHacerHoy) {
//   case "playa":
//     console.log("Vamos a la playa");
//     break;
//   case "montaña":
//     console.log("vamos a la montaña");
//     break;
//   default:
//     console.log("a mí no me apetece ir a " + queQuieresHacerHoy);
// }

// ¡Cuidado con el orden!
// let year = 2005;

// if (year >= 2000) {
//   console.log("mas de 2000");
// } else if (year >= 2010) {
//   console.log("mas de 2010");
// } else {
//   console.log("Cualquier otro año");
// }

// if (year >= 2000) {
//   console.log("mas de 2000");
// }
// if (year >= 2010) {
//   console.log("mas de 2010");
// }

// if (year >= 2000 && year <= 2010) {
//   console.log("Estoy entre el 2000 y el 2010");
// }

/*
    Truthy y los Falsey
    true -> Hay algo:
    ------------------------
    numero distinto de 0
    cadena de texto distinta a la vacía
    objeto con propiedades
    array con elementos

    false -> No hay nada:
    cualquier cosa que no sea true

*/

// if ("") {
//   console.log("Números!");
// }

/* Bucles */
/*
    Un bucle es una lógica que se repite.
*/
// let age = 0;

// while (age <= 25) {
//   console.log("Enhorabuena por haber cumplido " + age + " años");
//   age++; //age = age + 1;
// }

// do {
//   console.log("Enhorabuena por haber cumplido " + age + " años");
//   age++; //age = age + 1;
// } while (age <= 25);

// for (let i = 0; i < 5; i++) {
//   console.log("Mostrar la película número " + i);
// }

/*
    for(let i = 0; -> para cada elemento i
    i < 5 -> y mientras i sea menor que 5
    {} -> ejecuta este código
    ; i++) -> y al final, añade 1 al elemento i. Vuelvo a empezar.   
*/

/* Funciones */
let hasEntrado = false;
let age = 12;

function preguntarEdad(preguntarPorEdad) {
  if (preguntarPorEdad >= 18) {
    console.log("Puedes entrar.");
    hasEntrado = true;
  } else {
    console.log("No puedes entrar.");
  }
}

// preguntarEdad(12);
// preguntarEdad(50); // Si descomentas esta línea el while de abajo no funcionará
// preguntarEdad(20); // Si descomentas esta línea el while de abajo no funcionará

// ! es lo mismo que leer "no" o "negar"
while (!hasEntrado) {
  preguntarEdad(age);
  age++;
}
