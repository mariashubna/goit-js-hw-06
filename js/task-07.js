const ourInput = document.querySelector("#font-size-control");
const ourSpan = document.querySelector("#text");

ourInput.addEventListener("input", changeFont);

function changeFont (event) {
    const fontSize = parseInt(ourInput.value);
    ourSpan.style.fontSize = fontSize + "px";
}