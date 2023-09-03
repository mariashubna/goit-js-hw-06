function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const ourBtn = document.querySelector(".change-color");
const ourColor = document.querySelector(".color");
const body = document.querySelector("body");

ourBtn.addEventListener("click", changeColor);

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  ourColor.textContent = getRandomHexColor();
}

