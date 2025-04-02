// Obtener el formulario
let formulario = document.getElementById("miFormulario");

// Agregar un event listener para el evento 'submit' del formulario
formulario.addEventListener("submit", function(event) {
    // Evitar el comportamiento por defecto de enviar el formulario
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let descripcion = document.getElementById("descripcion").value;

    // Mostrar los valores en la consola
    console.log("Nombre:", nombre);
    console.log("E-mail:", email);
    console.log("Descripción:", descripcion);
});