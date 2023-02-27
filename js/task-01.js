const categoriesList = document.querySelectorAll("h2");

const count = categoriesList.length;

console.log(`Number of categories: ${count}`);

const numOfCategories = document.querySelectorAll("li.item");

numOfCategories.forEach(function(element) {
    console.log(`Category: ${element.childNodes[1].textContent}`);
    console.log(`Elements: ${element.childNodes[3].children.length}`)
})