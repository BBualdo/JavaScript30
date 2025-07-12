const spacingInput = document.getElementById("spacing");
const blurInput = document.getElementById("blur");
const colorInput = document.getElementById("base");

const targetImg = document.querySelector("img");

getCurrentInputValues();

spacingInput.addEventListener("input", (e) => {
    const px = e.currentTarget.value;
    targetImg.style.padding = px + "px";
})

blurInput.addEventListener("input", (e) => {
    const px = e.currentTarget.value;
    targetImg.style.filter = `blur(${px}px)`
})

colorInput.addEventListener("input", (e) => {
    targetImg.style.backgroundColor = e.currentTarget.value;
})

function getCurrentInputValues() {
    targetImg.style.padding = spacingInput.value + "px";
    targetImg.style.filter = `blur(${blurInput.value}px)`
    targetImg.style.backgroundColor = colorInput.value;
}