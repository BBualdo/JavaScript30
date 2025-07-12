const keys = [];
const secretCode = "bbualdo";

window.addEventListener("keydown", addKey);

function addKey(e) {
    if (keys.length >= 7)
        keys.shift();
    keys.push(e.key);

    checkForSecretCode();
}

function checkForSecretCode() {
    if (keys.join('') === secretCode) {
        cornify_add();
        alert("Hello :)");
    }
}