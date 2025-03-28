# Funciones y Callbacks

## ¿Cómo se puede declarar una función?

Hasta ahora hemos visto la forma tradicional, pero no es la única. También se pueden declarar funciones usando otras anotaciones. A continuación un ejemplo:

```javascript
function nombreFuncion() {
  // Código de la función
}

const nombreFuncion = () => {
  // También nos sirven let y var. Esta forma es muy común, por lo que te recomiendo familiarizarte con ella.
  // Código de la función
};

const nombreFuncion = function () {
  // También nos sirven let y var
  // Código de la función
};
```

Hay más maneras, pero con las dos primeras que te he señalado arriba tienes de sobra ya que son las dos más comunes.

Si usamos la segunda forma nos daremos cuenta de que la función se declara en tres partes. Unos paréntesis, una flecha y unas llaves.

() => {}

Dentro de los paréntesis van las variables, la flecha nos indica que vamos a declarar una función y dentro de las llaves va la lógica.

Si solo declaras una variable, puedes obviar los paréntesis y si la lógica que declaras la expresas en una única línea puedes evitar las llaves y el return.

```javascript
(word) => {
  return word > 6;
};

(word) => word > 6;
```

Pero fíjate que hay un problema... ¿Y si queremos volver a llamar a esta función? ¡No podemos! Estas funciones no tienen nombre, por lo que no se pueden reutilizar. Por eso se llaman funciones anónimas.

Este tipo de funciones se suelen utilizar para ser usadas como parámetro dentro de otra función, a este hecho de usar una función como parámetro dentro de otra lo llamamos callback.

Por ejemplo, el filter:

```javascript
let words = ["manzana", "platano", "naranja", "manzana", "uva", "platano"];

words.filter((word, index) => words.indexOf(word) === index);
```

La función de arriba se lee de la siguiente manera:

Al array WORDS aplícale un FILTRO.
Este filtro tiene dos parámetros, el parámetro WORD representará la palabra, el parámetro INDEX representará la posición de dicha palabra.
Si la posición de WORD dentro del array coincide con el índice, hemos superado el filtro.

Hasta ahora nosotros hemos llamado a funciones, como filter(), usando variables. Por ejemplo, filter(x). O como a console.log() usando directamente un valor. Como console.log("Hola").

Ahora podemos pasar también funciones en la forma filter( () => {} )

### Un ejemplo con sort

Tienes el siguiente ejemplo montado en un playground, pero te lo extraigo en los apuntes para que puedas verlo.

```javascript
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
```
