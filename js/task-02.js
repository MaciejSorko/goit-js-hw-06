const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector("#ingredients");
const items = [];
ingredients.forEach((element) => {
  const item = document.createElement("li");
  items.push(item);
  item.textContent = element;
  item.classList.add("item");
});

listOfIngredients.append(...items);