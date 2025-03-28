# Objetos y Arrays

## Objetos

Un objeto es un conjunto de datos que representa un concepto.

Los objetos no tienen un orden concreto. Si queremos representar un coche, no podemos decir que "la puerta va primero".

Para acceder a un elemento del objeto debemos accerder mediante .atributo.

Ejemplo.

const coche = {
matricula: "0000000FF",
fecha: "12-02-1990"
}

Si queremos añadir una propiedad, basta con usar la dot notation. Por ejemplo:

coche.color = "rojo" añadirá al objeto coche el color rojo.

Si queremos eliminar una propiedad, basta con poner delete delante de la misma, por ejemplo:

delete coche.color -> Elimina el color rojo de las propiedades.

Si queremos acceder a la lista de propiedades, bastará con poner coche.keys();

## Arrays

Un array, arreglo o vector es un conjunto de datos ordenados.

Para acceder a un elemento del array, debemos acceder mediante su posición.

¡Recuerda! El hecho de que una variable sea un objeto o un array te permite utilizar funciones especiales. Como por ejemplo el join(), una función propia de los arrays.
