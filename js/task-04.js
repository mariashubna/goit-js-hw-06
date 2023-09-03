let counterValue = 0;
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const ourValue = document.querySelector("#value")

decrement.addEventListener("click", decrementEv);
increment.addEventListener("click", incrementEv);

function decrementEv(event) {
     counterValue -=1;
     ourValue.innerHTML = counterValue;
};

function incrementEv(event) {
    counterValue +=1;
    ourValue.innerHTML = counterValue;
};
       