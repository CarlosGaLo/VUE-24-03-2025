// // ¿Cómo se llama la página web en JS? -> DOM = HTML + CSS
// // Para acceder a la web tenemos la palabra reservada Document

// let h1 = document.getElementsByTagName("h1");
// console.log(h1[0]);
// h1[0].innerText += " II";

// let p = document.getElementsByTagName("p");
// console.log(p);

// for (let i = 0; i < p.length; i++) p[i].style.color = "red";

// let divPrueba = document.getElementsByClassName("div-prueba");
// console.log(divPrueba[0]);

const actores = [
  { personaje: "Marty McFly", actor: "Michael J. Fox" },
  { personaje: "Doc Emmett Brown", actor: "Christopher Lloyd" },
  { personaje: "Clara Clayton", actor: "Mary Steenburgen" },
  { personaje: "Buford 'Mad Dog' Tannen", actor: "Thomas F. Wilson" },
  { personaje: "Maggie McFly / Lorraine McFly", actor: "Lea Thompson" },
];

let tablaPreHTML = `
<table>
<tr>
<th>Personaje</th>
<th>Actor</th>
</tr>
`;

actores.forEach((actor) => {
  tablaPreHTML += `
    <tr>
    <td>${actor.personaje}</td>
    <td>${actor.actor}</td>
    </tr>
    `;
});

tablaPreHTML += `</tabla>`;
// console.log(tablaPreHTML);

let tabla = document.getElementById("contenedor");

tabla.innerHTML = tablaPreHTML;

let title = document.querySelector("#title");
console.log(title);
title.innerText += " III";

let divSelector = document.querySelectorAll(".div-prueba");
console.log(divSelector);

function randomColor() {
  /*
    0 - Los colores van desde el 0 hasta el ffffff
    1º - Genere un número aleatorio -> 0.546464516541651
    2º - Multiplicalo por cien mil -> 54646.4516541651
    3º - Uso Floor para quitar decimales -> 54646
    4º - Lo paso a hexadecimal con el toString -> 10d55a
    5º - Quiero que me lo devuelva con el símbolo # delante
    */
  return "#" + Math.floor(Math.random() * 100000).toString(16);
}

let cuadrado = document.getElementsByClassName("cuadrado");

function cambiarColor() {
  for (let i = 0; i < cuadrado.length; i++)
    cuadrado[i].style.backgroundColor = randomColor();
}

// setInterval(cambiarColor, 500)
