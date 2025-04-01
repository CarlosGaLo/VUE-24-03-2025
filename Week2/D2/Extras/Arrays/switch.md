# Estructura de Control: `switch`

El `switch` es una estructura de control que permite evaluar una expresión y ejecutar diferentes bloques de código según el valor de dicha expresión. Es útil cuando se tienen múltiples condiciones que dependen de un mismo valor.

---

## Sintaxis

```js
switch (expresión) {
  case valor1:
    // Código a ejecutar si expresión === valor1
    break;
  case valor2:
    // Código a ejecutar si expresión === valor2
    break;
  default:
  // Código a ejecutar si ninguno de los casos anteriores se cumple
}
```

---

## Funcionamiento

1. La expresión se evalúa una vez.
2. Se compara con cada `case`.
3. Si encuentra un `case` coincidente, ejecuta el bloque de código correspondiente.
4. Utiliza `break` para salir del `switch` una vez ejecutado el código.
5. Si no hay coincidencias, se ejecuta el bloque `default`.

---

## Ejemplo

```js
const fruta = "manzana";

switch (fruta) {
  case "manzana":
    console.log("Es una manzana.");
    break;
  case "plátano":
    console.log("Es un plátano.");
    break;
  case "pera":
    console.log("Es una pera.");
    break;
  default:
    console.log("Fruta desconocida.");
}
```

**Salida:**
Es una manzana.

---

## Consideraciones

- Si se omite el `break`, el programa continuará ejecutando los casos siguientes (comportamiento conocido como _fall through_).
- Se puede utilizar `default` en cualquier posición, pero normalmente se coloca al final.
- El `switch` compara estrictamente (`===`), por lo que el tipo de datos importa.

---

## Ejemplo con _fall through_

```js
const color = "rojo";

switch (color) {
  case "rojo":
  case "rosa":
    console.log("El color es cálido.");
    break;
  case "azul":
  case "verde":
    console.log("El color es frío.");
    break;
  default:
    console.log("Color no identificado.");
}
```

**Salida:**
El color es cálido.

En este ejemplo, tanto `rojo` como `rosa` ejecutan el mismo bloque de código, aprovechando el *fall through*.

---

## Buenas Prácticas

- Utilizar `break` en cada `case` para evitar comportamientos inesperados.
- Ordenar los casos del más específico al más genérico.
- Emplear `default` para manejar valores no previstos.

---

## Cuándo Usar `switch`

- Cuando se tienen múltiples condiciones basadas en un único valor.
- Para hacer el código más legible en lugar de múltiples `if-else`.
- Al comparar constantes o valores conocidos (números, strings, enums).

---

## Alternativas

- `if-else` cuando las condiciones son más complejas o involucran rangos.
- `Object Literals` para obtener un valor específico según una clave.

