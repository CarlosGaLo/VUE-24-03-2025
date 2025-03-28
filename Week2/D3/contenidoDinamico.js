// Crear un elemento h1 con el texto "h1 creado dinámicamente"
let h1Element = document.createElement("h1");
h1Element.textContent = "h1 creado dinámicamente";

// Agregar el elemento h1 al contenedor
document.getElementById("contenedor").appendChild(h1Element);

// Crear un elemento h2 con el texto "Vamos a borrar este elemento"
let h2Element = document.createElement("h2");
h2Element.textContent = "Vamos a borrar este elemento";

// Agregar el elemento h2 al contenedor
document.getElementById("contenedor").appendChild(h2Element);

// Eliminar el elemento h2
h2Element.remove();

// Crear un elemento p con el texto "Vamos a borrar este párrafo dinámicamente"
let pElement = document.createElement("p");
pElement.textContent = "Vamos a borrar este párrafo dinámicamente";

// Agregar el elemento p al contenedor
document.getElementById("contenedor").appendChild(pElement);

// Borrar el contenido del elemento p
pElement.textContent = "";

// Crear un elemento div
let divElement = document.createElement("div");

// Crear un elemento p con una frase friki
let p1Element = document.createElement("p");
p1Element.textContent = "Que la fuerza te acompañe.";

// Crear un segundo elemento p con otra frase friki
let p2Element = document.createElement("p");
p2Element.textContent = "En el corazón de la TARDIS.";

// Agregar los elementos p al div
divElement.appendChild(p1Element);
divElement.appendChild(p2Element);

// Agregar el div al cuerpo del documento
document.body.appendChild(divElement);
