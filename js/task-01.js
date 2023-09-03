const ourList = document.querySelector("#categories");
const items = Array.from(ourList.children);
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
const title = item.querySelector('h2');
const secondList = item.querySelector('ul');
const secondsItem = secondList.children;
console.log(`Category: ${title.textContent}`);
console.log(`Elements: ${secondsItem.length}`);
});
