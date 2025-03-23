# Introducción a JavaScript

JavaScript es un lenguaje de programación utilizado principalmente para crear interactividad en páginas web. Con JavaScript, puedes controlar el comportamiento de los elementos HTML, realizar cálculos, manipular datos y mucho más.

## ¿Qué es JavaScript?

JavaScript es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. Fue creado originalmente para agregar interactividad a las páginas web.

## ¿Cómo se ejecuta JavaScript?

JavaScript se ejecuta en el navegador web del usuario. Cada vez que visitas una página web que contiene código JavaScript, el navegador interpreta y ejecuta ese código en tu dispositivo.

¿Y cómo sabe JavaScript cómo debe ejecutarse? Esto es gracias a ECMA Script, que, en esencia, es el convenio que dice cómo debe ser ejecutado JavaScript.

## Sintaxis básica

### El naming
Para ponerle nombre a las cosas en javascript debemos seguir cierto criterio. 

Usaremos camelCase para las variables. Es decir, si tenemos una palabra será todo en minúscula, si tenemos más de una palabra escribiremos el inicio de cada palabra después de la primera en mayúscula. porEjemplo. estoEsUnaVariable.

Usaremos UPPERCASE para las constantes. Por ejemplo, el número PI se declarará así, en mayúsculas.

Las variables booleanas empezarán con is o has. Por ejemplo isActive o hasLogged.

### Tipos de valores

#### Primitivos
Son aquellos valores que son procesados de forma directa por el lenguaje. En JS hay 6. 
1. Número (Number) -> Comprende todo el espacio de los números racionales. Los números irracionales son aproximados a números racionales. Salvo que hagamos programación para fines de investigación matemática o física no nos dará problemas. Infinite y NaN son tipos de Number.
2. Cadena de caracteres (String) -> En otros lenguajes la base es el character (una letra), pero JS ya avanza para entender que un String (cadena de caracteres) es un tipo primitivo. 
3. Booleano (Boolean) -> Verdadero o Falso, en inglés, true or false.
4. Nulo (Null) -> Cuando el valor ha sido asignado a valor nulo o cuando no hay valores.
5. Indefinido (Undefined) -> Cuando el valor aún no ha sido definido. 
6. Símbolo (Symbol) -> Esta variable es de 2015, durante el bootcamp no la usaremos. Su uso aún no está extendido y en general se considera su uso para programación avanzada.

### Los símbolos y palabras

En JavaScript hay símbolos y palabras reservadas. Estos símbolos y palabras tienen significados específicos y solo se pueden utilizar para lo que han sido destinados.

- **'+'**: Suma.
- **'-'**: Resta.
- **'/'**: División.
- **'*'**: Multiplicación. Si pones dos seguidos, harás una exponenciación. 
- **%**: Resto o módulo. Por ejemplo 5%2 = 1, 10%7 = 3.
- **!**: Negación. Si lo que viene después es true, lo convierte en false. Si lo que viene después es false lo convierte en true.

- **=**: ¡No te fíes! El símbolo igual no es lo mismo en programación que en matemáticas. Te voy a decir cómo se lee en javaScript.
```javascript
x = y -> A la variable x asígnale el valor de y. Es decir, que x va a cambiar su valor mientras que y va a permanecer inalterado.
x == y -> Comprueba si x e y tienen el mismo valor. (Por ejemplo, x = 1 e y = "1") -> Esto devolvería "Verdadero"
x === y -> Comprueba si x e y tienen el mismo valor y tipo. (Por ejemplo, x = 1 e y = "1") -> Esto devolvería "Falso", ya que x e y valen lo mismo, pero x es un number e y es un string.
```

- **let**: declara una variable, que por definición, puede cambiar a lo largo del tiempo. Por ejemplo, tu edad.

```javascript
let edad = 0;
```

- **const**: -> declara una constante, que por definición, no cambiará durante el código. Por ejemplo, el número pi.

```javascript
let PI = 3.14;
```

- **[]**: -> Se usa para indicar un array (vectores o arreglos). Por ejemplo, una lista de objetos de la compra.

```javascript
let compra = ["patatas", "lechugas", "tomate"];
```

- **{}**: -> Se usa para indicar un objeto. Por ejemplo, un coche

```javascript
let coche = {
  matricula: "0000AA",
  color: "rojo",
  propietario: "Mónica de la Torre",
};
```

- **Comentarios**: Puedes añadir comentarios en tu código usando `//` para comentarios de una línea o `/* */` para comentarios de múltiples líneas.

```javascript
// Este es un comentario de una línea
/*
Este es un comentario
de múltiples líneas
*/
```

- **Variables**: Las variables se utilizan para almacenar datos. Se declaran usando var, let, o const.

```javascript
var nombre = "Juan";
let edad = 25;
const PI = 3.14;
```

- **Tipos de variables**: JavaScript tiene varios tipos de datos, incluyendo números, cadenas de texto, booleanos, objetos, arrays, y más. Aunque todos se pueden declarar de la misma manera.
  En otros lenguajes de programación tienes que indicar el tipo de dato que estás declarando (int, double, string...) aquí no. Aquí basta con declararlo todo usando let.

```javascript
let numero = 10;
let texto = "Hola";
let esVerdadero = true;
let persona = { nombre: "Juan", edad: 25 }; //Esto es un objeto, usamos {};
let colores = ["rojo", "verde", "azul"]; //Esto es un array, usamos [];
```

- **Funciones**: Las funciones son bloques de código reutilizables que realizan una tarea específica.

```javascript
function saludar(nombre) {
  // Crea la función saludar, que recibe un nombre como parámetro.
  console.log("Hola, " + nombre + "!"); // Imprime "Hola, (nombre)" en pantalla.
}

saludar("Juan"); // Ejecuta la función.
```

- **Condicionales**: Las estructuras condicionales se utilizan para tomar decisiones en el código en función a determinadas características. Por ejemplo, podemos crear un if que nos de un mensaje u otro en función a si una variable es mayor o menos a un número.

```javascript
let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else if (edad < 0) {
  console.log("¡No puedes ser menor a 0 años!");
} else {
  console.log("Eres menor de edad");
}

// Todos los if se leen igual. "Si sucede lo que hay entre paréntesis ejecuta este código."
// Todos los else if se leen igual. "Si sucede esto otro que hay entre paréntesis, ejecuta este código."
// Todos los else se leen igual. "Si nada de lo anterior se ha cumplido, entonces ejecuta esta última parte."
// A todo esto se le llama un bloque if o bloque if-else. Recuerda que en estos bloques solo se puede ejecutar una orden, la primera orden que sea cierta.
```

- **Bucles**: Los bucles se utilizan para ejecutar un bloque de código varias veces.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

let colores = ["rojo", "verde", "azul"];

for (let color of colores) {
  console.log(color);
}
```

### Vincular tu JavaScript a tu HTML

Basta con añadir esta línea de código en el head.

```html
<script src="script.js"></script>
```
