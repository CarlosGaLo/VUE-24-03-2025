// Accedemos y mostramos por consola h1
let h1 = document.getElementsByTagName("h1");
console.log(h1);
h1[0].innerText = "Back to the future II";

// Accedemos a todos los p
let p = document.getElementsByTagName("p");
console.log(p);
// Recuerda que estás recibiendo una colección HTML, no un array. Por eso no puedes usar el forEach.
for (let i = 0; i < p.length; i++) {
  p[i].style.color = "red";
}


// Creamos una función que nos genere colores aleatorios.
function generateRandomColor() {
  //Devolvemos un número de hasta 6 cifras (de ahí el *1000000) y en hexadecimal (de ahí el .toString(16)) con una almohadilla delante.
  return "#" + Math.floor(Math.random() * 100000).toString(16);
}
// Accedemos a todos los elementos que tengan el class "cuadrado"
let cuadrado = document.getElementsByClassName("cuadrado");
// Aunque solo tengamos un elemento, debemos usar el for. Ya que hemos recibido una colección.
function cambiarColor() {
  for (i = 0; i < cuadrado.length; i++) {
    cuadrado[i].style.backgroundColor = generateRandomColor();
  }
}
// Llamamos a la función CambiarColor cada 500ms
setInterval(cambiarColor, 500);

// Seleccionar el elemento con el id "title"
let titleElement = document.getElementById("title");

// Hacer algo con el elemento, por ejemplo, cambiar su color de fondo
titleElement.style.backgroundColor = "lightblue";

// Seleccionar todos los elementos con la clase "text"
let elementsWithTextClass = document.querySelectorAll(".text");

// Iterar sobre los elementos y añadir el texto al final de su contenido
elementsWithTextClass.forEach(function (element) {
  // Obtener el contenido actual del elemento
  let currentText = element.innerText;
  // Añadir el nuevo texto al final del contenido
  element.innerText = currentText + " He seleccionado el elemento mediante JS";
});

// Seleccionar el elemento <title> usando querySelector
// Como ves, usando QuerySelector podemos entrar en conflicto entre los nombres de las tag, clases e ids.
let titleElementQuery = document.querySelector("title");
console.log(titleElementQuery);

// Añadir "I" al final del innerText del elemento
titleElementQuery.innerText += "I";

// Seleccionar el elemento con la ID "title" usando querySelector
// Usamos la misma notación que en CSS
let titleElement2 = document.querySelector("#title");

// Añadir "I" al final del innerText del elemento
titleElement2.innerText += "I";

/*****************************************************/
/* Veamos cómo añadir una tabla desde código */
// Array con los datos de los actores y sus personajes en Regreso al Futuro III
const actores = [
  { personaje: "Marty McFly", actor: "Michael J. Fox" },
  { personaje: "Doc Emmett Brown", actor: "Christopher Lloyd" },
  { personaje: "Clara Clayton", actor: "Mary Steenburgen" },
  { personaje: "Buford 'Mad Dog' Tannen", actor: "Thomas F. Wilson" },
  { personaje: "Maggie McFly / Lorraine McFly", actor: "Lea Thompson" },
];

// Crear el HTML para la tabla utilizando backticks para permitir saltos de línea
let tablaHTML = `
    <table>
        <tr>
            <th>Personaje</th>
            <th>Actor</th>
        </tr>`;

// Iterar sobre los datos de los actores y crear filas para cada uno
actores.forEach(function (actor) {
  // Agregar el HTML para cada fila
  tablaHTML += `
        <tr>
            <td>${actor.personaje}</td>
            <td>${actor.actor}</td>
        </tr>`;
});

// Cerrar el HTML de la tabla
tablaHTML += `
    </table>`;

// Seleccionar el elemento con el ID "crear-tabla" y asignarle el HTML de la tabla
document.getElementById("crear-tabla").innerHTML = tablaHTML;

// Seleccionaremos el div con id "futuro-cuadrado" para añadirle la class "cuadrado".
let futuroCuadrado = document.querySelector("#futuro-cuadrado");
futuroCuadrado.classList = "cuadrado";
