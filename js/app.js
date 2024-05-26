const contenedor = document.getElementById("contenedor");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const cuadrados = 500;

const fragment = document.createDocumentFragment();

for (let i = 0; i < cuadrados; i++) {
  const cuadrado = document.createElement("div");
  cuadrado.classList.add("cuadrado");

  cuadrado.addEventListener("mouseover", handleMouseOver);
  cuadrado.addEventListener("mouseout", handleMouseOut);

  fragment.appendChild(cuadrado);
}

contenedor.appendChild(fragment);

function handleMouseOver(event) {
  setColor(event.target);
}

function handleMouseOut(event) {
  removeColor(event.target);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
