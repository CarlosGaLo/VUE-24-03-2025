import lugarMitologico from "./lugarMitologico.js";

// Crear una instancia de la clase lugarMitologico con los datos de Zeus
const zeus = new lugarMitologico(
  "Olimpo",
  "Griega",
  "Montaña en Grecia, considerada la morada de los dioses olímpicos en la mitología griega.",
  "Hesíodo, Teogonía"
);

// Imprimir los datos de Zeus por consola
console.log("Nombre:", zeus.nombre);
console.log("Mitología:", zeus.mitologia);
console.log("Descripción:", zeus.descripcion);
console.log("Primera aparición:", zeus.primera_aparicion);
