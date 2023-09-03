const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
ingredients.forEach((ingr) => {
const liEl = document.createElement('li');
liEl.textContent = ingr;
liEl.setAttribute("class", "item");
list.appendChild(liEl);

});


