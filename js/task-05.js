const ourInput = document.querySelector("#name-input");
const ourSpan = document.querySelector("#name-output");

document.addEventListener("input", ourEvent);

function  ourEvent (event) {
const contents = ourInput.value;
if (contents.trim() === "") {
    ourSpan.textContent = "Anonymous"
} else {
    ourSpan.textContent = contents;
}

}

