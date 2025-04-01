function numeroPar(x) {
  return x * 2;
}

console.log(numeroPar(50));

const numeroParModerna = function (x) {
  return x * 2;
};

console.log(numeroParModerna(50));

const numeroParActual = (x) => {
  return x * 2;
};

const numeroParReducida = (x) => x * 2;

/*

() => {}

(variables) => {lógica}

Si solo tengo una variable, puedo quitar los paréntesis.
Si la lógica es solo una línea, puedo quitar las llaves y el return.

(x) => {return x * 2}

x => x * 2

*/

console.log(() => {});

/*
1º Escribir la estructura: () => {}
2º Declarar las variables: (x) => {}
3º Si solo hay una variable, quitar paréntesis: x => {}
4º Implementar la lógica: x => {return x * 2}
5º Si la lógica solo tiene una sentencia, quitar llaves y return:
x => x * 2
*/

/* Iteración nº5 del 2º Lab de JS */
const words = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

/* Eliminar duplicados sin usar un filter */
function unificarArray(words) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (result.indexOf(words[i]) === -1) {
      result.push(words[i]);
    }
  }

  return result;
}

/* Usando Filter */
function unificarArrayFilter(words) {
  return words.filter((word, index) => words.indexOf(word) === index);
}
