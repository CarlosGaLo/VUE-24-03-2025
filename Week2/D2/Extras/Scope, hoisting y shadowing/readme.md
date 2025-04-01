# Hoisting, Shadowing y Scope en JavaScript

## 1. Hoisting

Hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones se **elevan** al tope de su contexto de ejecución durante la fase de compilación. Esto significa que una variable o función puede ser utilizada antes de haber sido declarada en el código fuente.

### Ejemplo:

```js
console.log(miVariable); // undefined
var miVariable = 10;
console.log(miVariable); // 10
```

En este caso, la declaración `var miVariable` es elevada al tope del contexto, pero su inicialización no. Internamente, el código se comporta así:

```js
var miVariable;
console.log(miVariable); // undefined
miVariable = 10;
console.log(miVariable); // 10
```

### Notas importantes:

- Sólo las declaraciones son "hoisted", no las inicializaciones.
- `let` y `const` también son hoisted, pero quedan en **Temporal Dead Zone** (TDZ) hasta que se ejecuta su inicialización.

### Ejemplo con `let`:

```js
console.log(miLet); // ReferenceError: Cannot access 'miLet' before initialization
let miLet = 20;
```

## 2. Shadowing

El **shadowing** ocurre cuando una variable en un ámbito interno (local) tiene el mismo nombre que una variable en un ámbito externo (global), lo cual **oculta** la variable externa en ese contexto.

### Ejemplo:

```js
let x = 10;
function ejemploShadowing() {
  let x = 20; // Esta x sombreará a la x global
  console.log(x); // 20
}
ejemploShadowing();
console.log(x); // 10
```

### Notas importantes:

- Se debe tener cuidado con el shadowing para evitar errores de lógica o confusión en el alcance de las variables.
- En JavaScript, el shadowing puede ocurrir con `var`, `let` y `const`.

## 3. Scope

El **scope** (alcance) se refiere al contexto en el cual las variables y funciones son accesibles. En JavaScript, existen varios tipos de scope:

- **Scope Global:** Accesible desde cualquier parte del código.
- **Scope Local:** Definido dentro de funciones o bloques (`if`, `for`, etc.).
- **Scope de Bloque:** Introducido con `let` y `const`, limita la visibilidad a un bloque específico.

### Ejemplo de Scope Global y Local:

```js
let globalVar = "Soy global";
function ejemploScope() {
  let localVar = "Soy local";
  console.log(globalVar); // Soy global
  console.log(localVar); // Soy local
}
ejemploScope();
console.log(globalVar); // Soy global
console.log(localVar); // ReferenceError
```

## 4. Closure (Ampliación - Sólo programación avanzada :) )

Un **closure** ocurre cuando una función interna recuerda el entorno léxico en el cual fue creada, incluso después de que esa función externa haya terminado su ejecución. Esto permite **retener el estado** entre ejecuciones y es fundamental para la creación de **funciones privadas** en JavaScript.

### Ejemplo 1: Contador Privado

Este es un ejemplo clásico de closure, donde se retiene el valor de `contador` entre llamadas.

```js
function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}
const contador1 = crearContador();
console.log(contador1()); // 1
console.log(contador1()); // 2
const contador2 = crearContador();
console.log(contador2()); // 1
```

Aquí, `contador` es una variable privada, inaccesible desde el exterior.

### Ejemplo 2: Configuración Persistente

Los closures también se utilizan para configurar una función una vez y utilizarla múltiples veces con esa configuración.

```js
function configurarPrefijo(prefijo) {
    return function(texto) {
        return `${prefijo} ${texto}`;
    };
}
const saludar = configurarPrefijo('Hola');
console.log(saludar('Mundo')); // Hola Mundo
console.log(saludar('Juan')); // Hola Juan
```

La función `configurarPrefijo` crea un entorno léxico donde `prefijo` se recuerda en cada llamada de la función interna.

### Ejemplo 3: Temporizadores con Estado

Los closures permiten crear temporizadores con estado, ideales para aplicaciones de **animación** o **juegos**.

```js
function crearTemporizador(intervalo) {
    let tiempo = 0;
    setInterval(() => {
        tiempo += intervalo;
        console.log(`Tiempo transcurrido: ${tiempo} ms`);
    }, intervalo);
}
crearTemporizador(1000);
```

En este ejemplo, la variable `tiempo` se actualiza en cada intervalo, manteniendo su valor entre ejecuciones.

### Notas Importantes:

- Los closures son útiles para **funciones privadas**, **configuraciones persistentes** y **retención de estado**.
- Pueden llevar a problemas de **memoria** si no se manejan correctamente, ya que las variables en el entorno léxico no se liberan hasta que no haya más referencias a la función interna. (Immediately Invoked Function Expression)
  Una **IIFE** es una función que se define y se ejecuta inmediatamente. Esto se logra envolviendo la función en paréntesis y agregando `()` al final.

## 5. IIFE (Immediately Invoked Function Expression)

Una **IIFE** es una función que se define y se ejecuta inmediatamente. Esto se logra envolviendo la función en paréntesis y agregando `()` al final.

### Ejemplo de IIFE:

```js
(function () {
  console.log("Esto se ejecuta inmediatamente");
})();
```

## 6. let, const y var

En JavaScript, existen tres maneras principales de declarar variables: `var`, `let` y `const`. Aunque puedan parecer similares, presentan diferencias significativas en términos de **scope**, **hoisting**, y **manejo de memoria**.

### Similitudes y Diferencias

| Característica | var                              | let      | const    |
| -------------- | -------------------------------- | -------- | -------- |
| Scope          | Función                          | Bloque   | Bloque   |
| Hoisting       | Sí (inicializa como `undefined`) | Sí (TDZ) | Sí (TDZ) |
| Reasignación   | Sí                               | Sí       | No       |
| Redeclaración  | Sí                               | No       | No       |

### Hoisting y TDZ (Temporal Dead Zone)

- `var` es **hoisted** y se inicializa como `undefined`, lo que puede llevar a comportamientos inesperados.
- `let` y `const` también son hoisted pero no se inicializan hasta su declaración, quedando en TDZ.

### Ejemplos:

```js
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;

console.log(c); // ReferenceError
const c = 30;
```

### Optimización de Memoria

- `var` se asigna al contexto de ejecución global o de función, ocupando memoria hasta que dicho contexto finaliza.
- `let` y `const` tienen un scope de bloque, liberando memoria al salir del bloque correspondiente, mejorando la **gestión de memoria**.

### Consejos de Uso

- **Usa `const`** por defecto para declarar variables inmutables.
- **Usa `let`** cuando necesites reasignar un valor.
- **Evita `var`** debido a su comportamiento de hoisting y scope de función, que puede llevar a errores difíciles de depurar.

### Estado Actual en la Industria

En el desarrollo moderno con JavaScript (ES6+), el uso de `var` ha quedado prácticamente obsoleto, siendo `let` y `const` las opciones preferidas debido a su comportamiento más predecible y seguro.
