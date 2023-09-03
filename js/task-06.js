const ourInput = document.querySelector("#validation-input");
ourInput.addEventListener("blur", noFocus);

function noFocus (event) {
   const content = ourInput.value;
   if (parseInt(ourInput.dataset.length) === content.trim().length) {
    ourInput.style.borderColor = "green";
   } else {
    ourInput.style.borderColor = "red";
   }
 console.log(ourInput.dataset.length)
}


