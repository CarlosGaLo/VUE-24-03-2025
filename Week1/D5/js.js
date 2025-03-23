// Cómo imprimir en pantalla
// Usaremos console log. Primero imprimiremos el número 1. Luego el número 0. Luego el resultado de dividir 1 entre 0. Luego el tipo de dato que es 1/0
console.log(1);
console.log(0);
console.log(1 / 0);
console.log(typeof 1 / 0);

// Sentencia simple
let x = 10;

// Sentencia compuesta
let y = 20;
// Recuerda que la X ya la has declarado en la línea 1. Quizás tú sepas que esto es "otro ejemplo", pero como permanecemos en el mismo archivo, JS ya tiene la letra x reservada como nombre de variable.
let z = x + y;

// Probemos a hacer un bloque if que vea si la variable "edad" es mayor a 18 y reaccione a ello.
let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else if (edad < 0) {
  console.log("¡No puedes ser menor a 0 años!");
} else {
  console.log("Eres menor de edad");
}

// Probemos un switch que nos diga el nombre del día
let dia = 3;
let nombreDia;

switch (dia) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  // más casos... si quieres, acaba tú la tabla del switch :)
  // Por defecto (default) el Día no es válido. Es decir, que si la variable día no es 1, 2, 3... entonces nos mostrará en pantalla que "día no válido".
  default:
    nombreDia = "Día no válido";
}

console.log("Hoy es " + nombreDia);

// Probemos un switch que recibe un texto y nos devuelve un número. Así aprovechamos y adelantamos qué es una función.
function obtenerNumero(texto) {
  let numero;

  switch (texto.toLowerCase()) {
    case "uno":
      numero = 1;
      break;
    case "dos":
      numero = 2;
      break;
    case "tres":
      numero = 3;
      break;
    case "cuatro":
      numero = 4;
      break;
    case "cinco":
      numero = 5;
      break;
    default:
      numero = -1; // Valor por defecto para casos no contemplados
  }

  return numero;
}

// Ejemplos de uso
console.log(obtenerNumero("uno")); // Devuelve 1
console.log(obtenerNumero("dos")); // Devuelve 2
console.log(obtenerNumero("seis")); // Devuelve -1 (no está contemplado en el switch)

// Veamos un while. Usaremos while cuando queremos que algo se repita aunque no sabemos cuántas veces exactamente queremos que se repita.
let contador = 0;

while (contador < 5) {
  console.log("El contador es: " + contador);
  console.log("Estamos en el while");
  contador++;
}

// Veamos un Do While. Usaremos do while cuando queremos que algo se realice al menos una vez y, tras eso, no sabemos cuántas veces más queremos que se repita.
let contador2 = 0;

do {
  console.log("Iteración do while número " + contador2);
  contador2++;
} while (contador2 < 5);

// Veamos un for. Usaremos for cuando sabemos la cantidad de veces que queremos que se ejecute una determinada lógica.
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}
