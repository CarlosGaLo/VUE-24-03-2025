// Función tradicional
function funcionTradicional(x) {
  return x;
}

// Funciones modernas
const funcionModerna = (x) => {
  return x;
};

console.log("Función tradicional: " + funcionTradicional(2));
console.log("Función moderna: " + funcionModerna(2));

// Sin usar filter
function uniquifyArray(words) {
  let uniqueArray = [];
  for (let i = 0; i < words.length; i++) {
    if (uniqueArray.indexOf(words[i]) === -1) {
      uniqueArray.push(words[i]);
    }
  }
  return uniqueArray;
}

let wordsArray = ["manzana", "platano", "naranja", "manzana", "uva", "platano"];
let uniqueWordsArray = uniquifyArray(wordsArray);
console.log(uniqueWordsArray); // Resultado: ["apple", "banana", "orange", "grape"]

// Usando filter
function uniquifyArrayFilter(words) {
  return words.filter((word, index) => words.indexOf(word) === index);
}

let uniqueWordsArrayFilter = uniquifyArrayFilter(wordsArray);
console.log(uniqueWordsArray); // Resultado: ["apple", "banana", "orange", "grape"]

/******* MAP *******/
let arrayOriginal = [1, 2, 3, 4];

let arrayPar = arrayOriginal.map((elemento) => {
  let result = elemento * 2;
  return result;
});

console.log(arrayPar);

/******* reduce *******/

let elementosSumados = arrayOriginal.reduce((acumulador, elemento) => {
  acumulador += elemento;
  return acumulador;
});

let elementosConcatenados = arrayOriginal.reduce((acumulador, elemento) => {
  return acumulador + elemento;
}, "");

console.log(elementosSumados);
console.log(elementosConcatenados);

/******* Ejemplo de reduce sobre objetos *******/
let peliculas = [
  {
    nombre: "El padrino",
    nota: 9,
  },
  {
    nombre: "El padrino 2",
    nota: 10,
  },
  {
    nombre: "El padrino 3",
    nota: 7,
  },
];

let sumaDeNotas = peliculas.reduce((acumulador, pelicula) => {
  return acumulador + pelicula.nota;
}, 0);

console.log(sumaDeNotas);

/******* Sort *******/

let array = [1, 11, 2, 222, 3, 8];

// Función de comparación para ordenar numéricamente
function compararNumeros(a, b) {
  return a - b;
}

// Ordenar el array numéricamente
let arrayTradicional = array.sort(compararNumeros);

//es lo mismo que decir
let arrayModerno = array.sort((a, b) => {
  return a - b;
});

//que es lo mismo que decir
let arrayCompactado = array.sort((a, b) => a - b);

// Primero hacemos console log para ver que el array original no se ha modificado.
console.log("Array original: " + array);

// Luego comprobamos que los otros dos arrays están igual de bien ordenados.
console.log(arrayTradicional); // Resultado: [1, 2, 3, 8, 11, 222]

console.log(arrayModerno); // Resultado: [1, 2, 3, 8, 11, 222]

console.log(arrayCompactado);
