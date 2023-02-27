let counterValue = 0;
const buttonD = document.querySelector('[data-action="decrement"]');
const buttonI = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}
buttonD.addEventListener("click", decrement);
buttonI.addEventListener("click", increment);
