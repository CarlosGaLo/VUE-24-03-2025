const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hasta la vista cocodrilo");

const btn2 = document.querySelector("#btn2");
btn2.onclick = function () {
  alert("Hasta la vista, artista");
};

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Sayonara, baby");
});

function alertFunction() {
  alert("Buenos días, buenas tardes y buenas noches.");
}
const btn4 = document.querySelector("#btn4");
btn4.onclick = alertFunction;


const btn5 = document.querySelector("#btn5");
btn5.addEventListener('click', alertFunction);
