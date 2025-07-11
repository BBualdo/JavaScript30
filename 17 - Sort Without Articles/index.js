const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const container = document.querySelector("#bands");

bands.sort((a, b) => {
    a = removeArticle(a);
    b = removeArticle(b);

    if (a > b) return 1
    else if (a < b) return -1
    else return 0;
});

bands.forEach(band => {
    const li = document.createElement("li");
    li.textContent = band;
    container.appendChild(li);
});

function removeArticle(str) {
    if (str.startsWith("A ")) {
        return str.substring(2);
    }

    if (str.startsWith("An ")) {
        return str.substring(3);
    }

    if (str.startsWith("The ")) {
        return str.substring(4);
    }

    return str;
}