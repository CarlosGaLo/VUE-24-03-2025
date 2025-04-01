# Funciones

Vamos a ver qué son las funciones, pero antes un pequeño aviso. Aunque todo lo que vamos a ver tenga ejemplos en JavaScript, estos conceptos son comunes a cualquier lenguaje.
La forma en la que escribirás las funciones puede variar, pero los conceptos sobre los que se fundamenta todo, no.

---

## 1. Introducción a las Funciones

Las funciones en JavaScript son bloques de código diseñados para realizar una tarea específica. Se utilizan para organizar el código, reutilizar lógica y mejorar la legibilidad.

### Sintaxis Básica

```js
function nombreFuncion(param1, param2) {
  // Cuerpo de la función
  return resultado;
}
```

### Ejemplo

```js
function sumar(a, b) {
  return a + b;
}

console.log(sumar(3, 4)); // Output: 7
```

---

## 2. Funciones Anónimas

Son funciones sin nombre y suelen asignarse a una variable.

### Ejemplo

```js
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

console.log(saludar("Juan")); // Output: Hola, Juan
```

---

## 3. Funciones Flecha (Arrow Functions)

Introducidas en ES6, tienen una sintaxis más corta y no tienen su propio `this`.

### Sintaxis

```js
const nombreFuncion = (param1, param2) => {
  // Cuerpo de la función
  return resultado;
};
```

### Ejemplo

```js
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 5)); // Output: 10
```

---

## 4. Parámetros y Argumentos

### Parámetros por Defecto

```js
const saludar = (nombre = "Invitado") => `Hola, ${nombre}`;
console.log(saludar()); // Output: Hola, Invitado
```

### Parámetros Rest

Permiten agrupar múltiples argumentos en un solo parámetro.

```js
const sumarTodo = (...numeros) => numeros.reduce((acum, num) => acum + num, 0);
console.log(sumarTodo(1, 2, 3, 4)); // Output: 10
```

### Spread Operator

Se utiliza para expandir elementos iterables.

```js
const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4, 5];
console.log(nuevosNumeros); // Output: [1, 2, 3, 4, 5]
```

---

## 5. Funciones como Ciudadanos de Primera Clase

En JavaScript, las funciones se tratan como ciudadanos de primera clase, lo que significa que pueden:

- Asignarse a variables
- Pasarse como argumentos a otras funciones
- Devolverse como valor de otras funciones

### Ejemplo: Función como Argumento

```js
const operacion = (a, b, callback) => callback(a, b);

const sumar = (x, y) => x + y;
const restar = (x, y) => x - y;

console.log(operacion(5, 3, sumar)); // Output: 8
console.log(operacion(5, 3, restar)); // Output: 2
```

---

## 6. Funciones de Orden Superior (Higher-Order Functions)

Son funciones que reciben otras funciones como argumentos o devuelven una función como resultado.

### Ejemplo

```js
const aplicarOperacion = (operacion) => (a, b) => operacion(a, b);

const suma = aplicarOperacion((x, y) => x + y);
console.log(suma(10, 5)); // Output: 15
```

---

## 7. Closures (Clausuras)

Esto no lo vamos a usar en el curso, pero te lo dejo escrito para que no te extrañe si lo ves en algún sitio.

Un closure ocurre cuando una función interna recuerda el estado de su ámbito externo.

### Ejemplo

```js
const crearContador = () => {
  let contador = 0;
  return () => {
    contador++;
    return contador;
  };
};

const contador1 = crearContador();
console.log(contador1()); // Output: 1
console.log(contador1()); // Output: 2
```

---

## 8. Recursividad

Una función es recursiva cuando se llama a sí misma.

#### Acertijo de los Monjes de Ojos Azules

<details>
<summary>El acertijo de los monjes</summary>

En una isla remota, habitan **N monjes**, todos ellos **perfectamente lógicos** y conocedores de las reglas que rigen su vida en la isla. Estos monjes tienen una característica peculiar: algunos de ellos tienen **ojos azules**, mientras que otros tienen **ojos de otro color**. Se sabe que:

- Cada monje **puede ver el color de ojos de todos los demás monjes**, pero **no puede ver su propio color de ojos**.
- No hay espejos, agua clara ni ninguna otra superficie reflectante en la isla.
- **No está permitido hablar** sobre el color de ojos de ningún monje.
- Si un monje **descubre** que tiene los ojos azules, **debe abandonar la isla a medianoche** del día en que lo descubra.
- Todos los monjes se **ven entre sí diariamente** en la plaza central.
- Todos los monjes **conocen estas reglas** y **saben** que todos son perfectamente lógicos.
- Se sabe que **al menos un monje** en la isla tiene **ojos azules**.

Un día, un **gurú sabio** llega a la isla y declara públicamente:

- **"Al menos uno de ustedes tiene los ojos azules."**

El gurú no dice nada más, pero esta declaración da inicio a una cadena de razonamientos lógicos entre los monjes.

**Pregunta:**

- ¿Cuántos monjes se marchan y cuánto tiempo tardan en irse?

</details>

### Ejemplo: Factorial

```js
const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5)); // Output: 120
```

---

## 9. Funciones Asíncronas

JavaScript utiliza el modelo asíncrono basado en eventos, y las funciones asíncronas permiten manejar operaciones no bloqueantes.

Por lo pronto vamos a ver que estas funciones existen, pero hoy no las vamos a trabajar más allá del ejemplo.

### Promesas

```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hecho!"), 1000);
});

promesa.then((result) => console.log(result)); // Output: Hecho!
```

### Async/Await

```js
const obtenerDatos = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const datos = await respuesta.json();
  console.log(datos);
};

obtenerDatos();
```

---

## 10. Funciones Generadoras (Generators)

Son funciones que pueden pausar su ejecución y reanudarla posteriormente.

No las vamos a usar durante el bootcamp, pero que sepas que existen.

Te dejo un archivo con una breve ampliación de la teoría, por si te interesa.

### Sintaxis

```js
function* generador() {
  yield 1;
  yield 2;
  yield 3;
}

const iterador = generador();
console.log(iterador.next().value); // Output: 1
console.log(iterador.next().value); // Output: 2
```

---

## 11. IIFE (Immediately Invoked Function Expressions)

Son funciones que se ejecutan inmediatamente después de ser definidas.

Nuevamente, no las vamos a usar, pero que sepas que existen :)

### Ejemplo

```js
(() => {
  console.log("Esto se ejecuta de inmediato");
})();
```

---

# Apéndice: Consejos y Teoría Avanzada para Programadores Seniors

Como algunos de vosotros tenéis conocimientos más avanzados, os dejo por aquí un regalito. Al final os propongo unos pequeños ejercicios, sólo por si os apetece.

### 1. Composición de Funciones

Utiliza la composición para crear funciones complejas a partir de funciones simples y reutilizables.

Gracias a esto la reutilización de nuestro código aumenta mucho, aunque hay que tener cuidado, porque puede afectar a la legibilidad.

```js
const sumar = (x) => (y) => x + y; //Aquí aplicamos Currying también
const duplicar = (x) => x * 2;

const sumarYDuplicar = (x) => duplicar(sumar(2)(x));
console.log(sumarYDuplicar(3)); // Output: 10
```

### 2. Currying

Transforma una función que toma múltiples argumentos en una secuencia de funciones que toman un solo argumento.

#### ¿Para qué sirve el Currying?

1. **Reutilización de funciones**:

   - Permite **crear funciones más específicas** a partir de funciones generales.
   - Esto se logra **preconfigurando** algunos parámetros.

2. **Composición de funciones**:

   - Facilita la **composición** de funciones en programación funcional.

3. **Código más legible y modular**:
   - Ayuda a **dividir** funciones complejas en funciones más **simples y reutilizables**.

```js
const multiplicar = (x) => (y) => x * y;
const duplicarNumero = multiplicar(2);
console.log(duplicarNumero(5)); // Output: 10
```

### Por si quieres seguir investigando: Programación Funcional

Adopta un enfoque funcional usando funciones puras, inmutabilidad y evitando efectos secundarios.

- **Funciones Puras**: Siempre devuelven el mismo resultado para los mismos argumentos.
- **Inmutabilidad**: No modifican el estado o datos existentes.
- **Funciones de Orden Superior**: Utiliza `.map()`, `.filter()`, y `.reduce()` para manipular colecciones.

### 4. Performance y Optimización

- **Memoización**: Almacena resultados de funciones para mejorar el rendimiento.
- **Tail Call Optimization**: Aprovecha la optimización de llamadas recursivas en cola.

### 5. Patrones Avanzados

- **Funciones Decoradoras**: Añaden funcionalidad a otras funciones.
- **Funciones Parciales**: Preconfiguran argumentos para crear funciones más específicas.
- **Patrón Middleware**: Para componer funciones en cadena (ej. en Express.js).


# Ejercicios de JavaScript: Buenas Prácticas y Optimización de Código

---

## Ejercicio 1: Borrar Elementos de un Array con un Bucle `for`.

#### Enunciado

Crea una función llamada `borrarNegativos` que reciba un array de números y **elimine todos los números negativos**. 

- Debes usar un **bucle `for`** para recorrer el array.
- No utilices métodos como `.filter()` o `.splice()` fuera del bucle.
- Modifica el array **in-place** (sin crear un nuevo array).

---

### Ejemplo

```js
const numeros = [3, -1, 2, -4, 5, -6];
borrarNegativos(numeros);
console.log(numeros); // Output esperado: [3, 2, 5]
```

---


## Ejercicio 2: Optimización de Búsqueda en un Array Ordenado

Este ejercicio es divertido y es todo un clásico dentro de bucles :) 

#### Enunciado

Crea una función llamada `buscarElemento` que reciba un **array ordenado** de números y un número `objetivo`. La función debe devolver el **índice** del número objetivo en el array o `-1` si no se encuentra.

- Debes utilizar el **algoritmo de búsqueda binaria** para lograr una **complejidad O(log n)**.
- No uses `.indexOf()` ni `.findIndex()`.

---

### Ejemplo

```js
const numeros = [1, 3, 5, 7, 9, 11];
console.log(buscarElemento(numeros, 7));  // Output esperado: 3
console.log(buscarElemento(numeros, 4));  // Output esperado: -1
```

---


## Ejercicio 3: Uso Eficiente de Memoria con `map()`

#### Enunciado

Crea una función llamada `duplicarPositivos` que reciba un array de números y devuelva un **nuevo array** donde **solo** los números positivos estén **duplicados** (no que aparezcan dos veces, sino que se multipliquen por 2. Es decir, un 3 pasará a ser un 6).

Usa un operador ternario.

- Debes usar el método `.map()` para crear el nuevo array.
- Evita crear variables innecesarias.
- La solución debe ser **concisa** y **eficiente en memoria**.

---

### Ejemplo

```js
const numeros = [-2, 3, -1, 4, 0];
const resultado = duplicarPositivos(numeros);
console.log(resultado); // Output esperado: [-2, 6, -1, 8, 0]
```

---