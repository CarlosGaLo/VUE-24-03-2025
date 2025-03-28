// Ejemplo de setInterval() y clearInterval()
let count = 0;

function updateCount() {
  count++;
  console.log("Contador: " + count);
}

// Se ejecutará la función updateCount() cada 1000 milisegundos (1 segundo)
let intervalId = setInterval(updateCount, 1000);

// Detener la ejecución de updateCount() después de 5 segundos
setTimeout(() => {
  clearInterval(intervalId);
  console.log("¡Fin del conteo!");
}, 5000);

// Ejemplo de setTimeout() y clearTimeout()
function myFunction() {
  console.log("¡Hola después de 2 segundos!");
}

// Se ejecutará la función myFunction() después de 2000 milisegundos (2 segundos)
let timeoutId = setTimeout(myFunction, 2000);

// Cancelar la ejecución de myFunction() antes de que se cumplan los 2 segundos
clearTimeout(timeoutId);
