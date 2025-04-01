# `yield` en JavaScript

---

## ¿Qué es `yield`?

- `yield` es una **palabra clave** utilizada en **funciones generadoras** en JavaScript.
- **Pausa** la ejecución de la función y **devuelve** un valor.
- La ejecución de la función **puede reanudarse** más tarde desde el punto donde se pausó.

---

## ¿Dónde se utiliza?

Se utiliza **exclusivamente** en **funciones generadoras**, que se declaran con el **asterisco (`*`)**.

### Sintaxis de una Función Generadora

```js
function* nombreGenerador() {
    yield valor1;
    yield valor2;
}
```

---

## ¿Cómo funciona?

1. Cuando se llama a una **función generadora**, **no se ejecuta de inmediato**. En su lugar, devuelve un **iterador**.
2. Cada vez que se llama al método `.next()` en el iterador:
    - La función **se ejecuta hasta el siguiente `yield`**.
    - Se **pausa** y devuelve un **objeto** con:
      - `value`: El valor `yield` producido.
      - `done`: `false` si hay más código por ejecutar, `true` si ha terminado.
3. La ejecución **se reanuda** desde el punto donde se pausó.

---

## Ejemplo Básico

```js
function* generadorEjemplo() {
    yield 1;
    yield 2;
    yield 3;
}

const iterador = generadorEjemplo();

console.log(iterador.next()); // Output: { value: 1, done: false }
console.log(iterador.next()); // Output: { value: 2, done: false }
console.log(iterador.next()); // Output: { value: 3, done: false }
console.log(iterador.next()); // Output: { value: undefined, done: true }
```

- En este ejemplo, cada `yield` **pausa** la ejecución de la función generadora.
- El método `.next()` **reanuda** la ejecución **desde donde se pausó**.

---

## Ejemplo con Iteración

Los generadores son **iterables**, por lo que puedes usar `for...of` para iterar sobre ellos.

```js
function* contarHastaTres() {
    yield 1;
    yield 2;
    yield 3;
}

for (let numero of contarHastaTres()) {
    console.log(numero);
}
// Output:
// 1
// 2
// 3
```

---

## Comunicación Bidireccional con `yield`

Puedes **enviar datos al generador** usando `.next(valor)`.

```js
function* generadorInteractivo() {
    const nombre = yield '¿Cuál es tu nombre?';
    yield `Hola, ${nombre}`;
}

const iterador = generadorInteractivo();

console.log(iterador.next().value); // Output: ¿Cuál es tu nombre?
console.log(iterador.next('Juan').value); // Output: Hola, Juan
```

---

## Diferencia con `return`

- `yield` **pausa** la función y puede reanudarse más tarde.
- `return` **termina** la función y no puede reanudarse.

### Ejemplo Comparativo

```js
function* conYield() {
    yield 1;
    yield 2;
    yield 3;
}

function conReturn() {
    return 1;
    return 2;
    return 3;
}

const iteradorYield = conYield();
console.log(iteradorYield.next()); // Output: { value: 1, done: false }
console.log(iteradorYield.next()); // Output: { value: 2, done: false }
console.log(iteradorYield.next()); // Output: { value: 3, done: false }
console.log(iteradorYield.next()); // Output: { value: undefined, done: true }

console.log(conReturn()); // Output: 1
```

- La función con `return` **devuelve el valor** y termina **de inmediato**.
- La función con `yield` **pausa y reanuda** su ejecución.

---

## Uso Avanzado: Generadores Infinitos

Los generadores pueden crear **secuencias infinitas** debido a su naturaleza de pausa y reanudación.

### Ejemplo: Secuencia Infinita

```js
function* secuenciaInfinita() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const iterador = secuenciaInfinita();
console.log(iterador.next().value); // Output: 0
console.log(iterador.next().value); // Output: 1
console.log(iterador.next().value); // Output: 2
// ... y así sucesivamente
```

---

## Resumen

- `yield` **pausa** una función generadora y **devuelve** un valor.
- La función generadora puede **reanudar** su ejecución con `.next()`.
- Se utiliza en **funciones generadoras** declaradas con `function*`.
- Permite **iteración perezosa** (lazy iteration), útil para secuencias grandes o infinitas.
- Es **bidireccional**, ya que permite enviar y recibir datos.

---

## Cuándo usar `yield`

- Para **crear iteradores personalizados**.
- Cuando necesitas **generar secuencias grandes o infinitas** de manera eficiente.
- Para **pausar** la ejecución de una función y **reanudarla** más tarde.
- En **flujos asíncronos**, combinándolos con `async` y `await`.

