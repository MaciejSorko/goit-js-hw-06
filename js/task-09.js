function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const colorCode = document.querySelector('.color');
btn.addEventListener("click", (e) => {
  body.style.backgroundColor = getRandomHexColor();;
  colorCode.textContent = getRandomHexColor();;
});