const control = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");
outputText.style.fontSize = control.value;

control.addEventListener("input", (e) => {
    outputText.style.fontSize = e.currentTarget.value + "px";
});