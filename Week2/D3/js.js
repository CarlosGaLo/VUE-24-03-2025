//
// // ¿Cómo se llama a la pág web en JS? -> DOM = HTML + CSS
// // Mediante la palabra reservada "document"
// let h1 = document.getElementsByTagName("h1");
// console.log(h1);
// h1[0].innerText += " II";

// // Accedemos a todos los p
// let p = document.getElementsByTagName("p");
// console.log(p);
// for (let i = 0; i < p.length; i++) {
//   p[i].style.color = "red";
// }

// // Vamos a acceder mediante la clase al elemento div-prueba
// let div = document.getElementsByClassName("div-prueba");
// console.log(div);

// // Vamos a acceder mediante la ID al elemento crear table
// const actores = [
//   { personaje: "Marty McFly", actor: "Michael J. Fox" },
//   { personaje: "Doc Emmett Brown", actor: "Christopher Lloyd" },
//   { personaje: "Clara Clayton", actor: "Mary Steenburgen" },
//   { personaje: "Buford 'Mad Dog' Tannen", actor: "Thomas F. Wilson" },
//   { personaje: "Maggie McFly / Lorraine McFly", actor: "Lea Thompson" },
// ];

// let tablaPreHTML = `
//     <table>
//         <tr>
//             <th>Personaje</th>
//             <th>Actor</th>
//         </tr>
// `;

// /*
//     Las siguientes líneas de código se leen como:
//     Al HTML de tabla añádele este HTML que te paso entre backticks.
// */
// actores.forEach((el) => {
//   tablaPreHTML += `
//   <tr>
//       <td>${el.personaje}</td>
//       <td>${el.actor}</td>
//   </tr>`;
// });

// tablaPreHTML += `</table>`;

// let tabla = document.getElementById("crear-tabla");
// tabla.innerHTML = tablaPreHTML;

// let title = document.querySelector("#title");
// title.innerText += "I";

// let parrafo = document.querySelector("p");
// console.log(parrafo);

// let allP = document.querySelectorAll("p");
// console.log(allP);

// let secondP = document.querySelector("div p");
// console.log(secondP);
// secondP.style.color = "blue";

// function randomColor() {
//     /*
//     0º Los colores van desde el 0 hasta el ffffff
//         1º Genero un número aleatorio. P.ej -> 0.68952134654984531321
//         2º Multiplico por cien mil. P.ej -> 68952.134654984531321
//         3º Quito los decimales con el floor -> 68952
//         4º Lo paso a hexadecimal con el toString -> 10D58
//     */
//   return "#" + Math.floor(Math.random() * 100000).toString(16);
// }
// let cuadrado = document.getElementsByClassName("cuadrado");

// function cambiarColor() {
//   for (let i = 0; i < cuadrado.length; i++) {
//     cuadrado[i].style.backgroundColor = randomColor();
//   }
// }
// setInterval(cambiarColor, 500);

// const btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   alert("Hasta la vista, cocodrilo");
// };

// const btn2 = document.querySelector("#btn2");
// btn2.onclick = function () {
//   alert("Hasta la vista, artista");
// };

// const btn3 = document.querySelector("#btn3");
// btn3.addEventListener("click", () => {
//   alert("Sayonara, baby");
// });

// function alertFunction() {
//   alert("Buenos días, buenas tardes y buenas noches.");
// }
// const btn4 = document.querySelector("#btn4");
// btn4.onclick = alertFunction;

// const btn5 = document.querySelector("#btn5");
// btn5.addEventListener("click", alertFunction);

// let miFormulario = document.getElementById("miFormulario");

// miFormulario.onsubmit = (event) => {
//   event.preventDefault();

//   let nombre = document.getElementById("nombre").value;
//   console.log(nombre);

//   let email = document.getElementById("email").value;
//   console.log(email);

//   let descripcion = document.getElementById("descripcion").value;
//   console.log(descripcion);
// };

//Creo el elemento
let h2Element = document.createElement("h2");
// Le añado algún contenido
h2Element.textContent = "h2 creado dinámicamente";
// Lo anexo a un elemento HTML previo
document.getElementById("contenedor").appendChild(h2Element);

//Creo el elemento
let h3Element = document.createElement("h3");
// Le añado algún contenido
h3Element.textContent = "h3 creado dinámicamente";
// Lo anexo a un elemento HTML previo
document.getElementById("contenedor").appendChild(h3Element);

h3Element.remove();

//Creo el elemento
let h4Element = document.createElement("h4");
// Le añado algún contenido
h4Element.textContent = "h4 creado dinámicamente";
// Lo anexo a un elemento HTML previo
document.getElementById("contenedor").appendChild(h4Element);

h4Element.setAttribute("class", "cuadrado");
