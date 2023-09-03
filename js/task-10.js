function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");




createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);




function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  
  for (let i = 0; i <= amount; i += 1) {
    let block = document.createElement('div');
    block.style.width = `${size}px`;
    block.style.height = `${size}px`;
    block.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(block);
    size += 10;
  }
  

}
function destroyBoxes() {
  boxes.innerHTML = '';
}