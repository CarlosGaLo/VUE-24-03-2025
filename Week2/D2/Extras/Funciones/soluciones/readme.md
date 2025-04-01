# Soluciones a ejercicios propuestos en 0_Funciones.md


### Solución 1

```js
function borrarNegativos(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0) {
            arr.splice(i, 1);
        }
    }
}

const numeros = [3, -1, 2, -4, 5, -6];
borrarNegativos(numeros);
console.log(numeros); // Output: [3, 2, 5]
```

- El bucle recorre el array **de atrás hacia adelante**.
- Esto evita problemas de **desplazamiento de índices** al eliminar elementos.

---


### Solución 2

```js
function buscarElemento(arr, objetivo) {
    let inicio = 0;
    let fin = arr.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (arr[medio] === objetivo) {
            return medio;
        } else if (arr[medio] < objetivo) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return -1;
}

const numeros = [1, 3, 5, 7, 9, 11];
console.log(buscarElemento(numeros, 7));  // Output: 3
console.log(buscarElemento(numeros, 4));  // Output: -1
```

- La **búsqueda binaria** reduce el rango de búsqueda a la mitad en cada iteración.
- La **complejidad** es **O(log n)**, mucho más eficiente que un bucle lineal.

---


### Solución 3

```js
const duplicarPositivos = (arr) => arr.map(num => num > 0 ? num * 2 : num);

const numeros = [-2, 3, -1, 4, 0];
const resultado = duplicarPositivos(numeros);
console.log(resultado); // Output: [-2, 6, -1, 8, 0]
```

- La solución utiliza **.map()** para crear el nuevo array de manera **inmutable**.
- La **condición ternaria** optimiza la lógica sin crear variables adicionales.
- La **inmutabilidad** mejora la **eficiencia de memoria**.

---
