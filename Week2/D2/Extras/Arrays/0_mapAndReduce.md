# Uso de `map` y `reduce` en JavaScript

En JavaScript, los métodos `map` y `reduce` son herramientas poderosas para manipular y transformar arrays. Vamos a explorar cómo funcionan y cómo se pueden usar en conjunto para realizar operaciones complejas en los datos de un array.

## 1. Método `map`

El método `map` se utiliza para iterar sobre cada elemento de un array y aplicar una función a cada elemento, devolviendo un nuevo array con los resultados de aplicar la función a cada elemento.

Por ejemplo, si tienes un array que es [1,2,3,4] y quieres multiplicar todos los números del array por 2 deberías usar un map.

En esencia map se puede leer como "hazle X a todos los elementos del array" donde X es la función que tú le pasas al map como callback.

### Sintaxis:

```javascript
let nuevoArray = arrayOriginal.map((elemento, indice, array) => {
  // Código para transformar el elemento
  return nuevoElemento;
});

let arrayPar = arrayOriginal.map((elemento) => {
  let result = elemento * 2;
  return result;
});
```

## 1. Método `reduce`

El método reduce se utiliza para reducir los elementos de un array a un solo valor, aplicando una función acumuladora que se ejecuta en cada elemento del array.

Es decir, que va combinando todos los elementos de un array de la forma en la que tú le digas que hay que combinarlo.

Voy a ponerte dos ejemplos, en el primero vamos a combinar un array sumando sus elementos y en el siguiente vamos a concatenar sus elementos.

### Sintaxis:

```javascript
let valorFinal = arrayOriginal.reduce((acumulador, elemento, indice, array) => {
  // Código para combinar el acumulador con el elemento actual
  return nuevoAcumulador;
}, valorInicial);

let elementosSumados = arrayOriginal.reduce((acumulador, elemento) => {
  acumulador += elemento;
  return acumulador;
});

let elementosConcatenados = arrayOriginal.reduce((acumulador, elemento) => {
  return acumulador + elemento;
}, "");
```
Como puedes ver, a la hora de concatenar, hay que pasar un último parámetro. ¡No olvides que puedes haber más parámetros además de la función! En este caso debemos hacerlo para que javascript sepa que queremos que los números sean interpretados como texto.

Si tuviesemos directamente textos, no tendríamos que añadir ese valor.

También podemos hacerlo con objetos.