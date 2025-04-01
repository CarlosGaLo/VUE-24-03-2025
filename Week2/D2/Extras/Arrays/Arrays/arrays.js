/*
[1, 2, 3]

[1, 2, 3, 4]
[Posición 0, Posición 1, Posición 2, Posición 3]
*/
// let array = [1, 2, 3, 4];
// console.log(array);

// // Push añade un elemento al final.
// array.push(5);
// console.log(array);

// // Unshift añade un elemento al inicio.
// array.unshift(0);
// console.log(array);

// // Shift elimina el primer elemento. Es decir, el elemento en la posición [0]
// array.shift();
// console.log(array);

// // Pop elimina el último elemento.
// array.pop();
// console.log(array);

// // Splice elimina el elemento n.
// array.splice(2);
// console.log(array);

/* FOR EACH */
// let array2 = [1, 2, 3, 4];

// array2.forEach((el) => {
//   el = el * 2;
//   console.log(el);
// });

// array2.forEach((el, index) => {
//   console.log(
//     "Soy el elemento con índice: " + index + " y tengo el valor de: " + el
//   );
// });

// let arrayInvertido = array2.reverse();
// console.log(arrayInvertido);

/* SORT */
// let arraySort = [1, 11, 2, 222, 3, 8, 22];
// console.log(arraySort);

// // Orden alfabético (Todo se lee como string)
// arraySort.sort();
// console.log(arraySort);

// // Orden Ascendente
// arraySort.sort((a, b) => {
//   return a - b;
// });
// console.log(arraySort);

// // Orden Descendente
// arraySort.sort((a, b) => {
//   return b - a;
// });
// console.log(arraySort);

// TypeScript. -> Como JS, pero estructurado. Se parece más a Java o a C#

// NODE -> Es JS para servidores.

/* MAP */
// let array3 = [1, 2, 3, 4];

// array3.forEach((el) => {
//   el = el * 2;
//   console.log(el);
// });

// array3.forEach((el, index) => {
//   console.log(
//     "Soy el elemento con índice: " + index + " y tengo el valor de: " + el
//   );
// });

// // ¿Qué hace el map?
// // Crea un nuevo Array con uno viejo al que le aplicamos una regla.

// // Quiero que arrayMapeado sea el doble que el array original.
// let arrayMapeado = array3.map((el) => el * 2);

// console.log(arrayMapeado);
// console.log(array3);

/* REDUCE */
let array4 = [1, 2, 3, 4];

// ¿Qué hace REDUCE?
// Combina, de la forma que le digamos, todos los elementos de un array.

let arraySumado = array4.reduce((acc, el) => {
  acc = acc + el;
  return acc;
});

console.log(arraySumado);

let arrayTexto = array4.reduce((acc, el) => {
  return acc + el;
}, "");
console.log(arrayTexto);
/*
Recordemos
function nombreDeLaFuncion() {} -> Esto es una función

Como es anónima, le quito el nombre.
function () {}

Como escribir función, es un peñazo, lo sustituyo por un símbolo y lo cambio de sitio.
() => {}

() => {}   -----> Esto es una función anónima (porque no tiene nombre).
() -> Aquí van los parámetros
=> -> Esto significa que es una función
{} -> Aquí va la lógica
*/

/* FILTER */

// ¿Qué hace el filter?
// Crea un nuevo array donde solo están los elementos que cumplen una condición.
let array5 = [1, 2, 3, 4];

let arrayFiltrado = array5.filter((el) => el > 2);

console.log(arrayFiltrado);

// Ejemplo con un array de objetos
let peliculas = [
  {
    nombre: "La comunidad del anillo",
    nota: 9.5,
  },
  {
    nombre: "Las dos Torres",
    nota: 9,
  },
  { nombre: "El retorno del rey", nota: 10 },
];

let peliculasNota = peliculas.filter((el) => el.nota > 9);
console.log(peliculasNota);

let peliculasTitulo = peliculas.filter((el) => el.nombre.includes("La"));
console.log(peliculasTitulo);
