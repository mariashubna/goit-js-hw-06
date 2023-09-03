const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const liElements = [];

ingredients.forEach((ingr) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingr;
  liEl.setAttribute("class", "item");
  liElements.push(liEl);
});

list.append(...liElements);






