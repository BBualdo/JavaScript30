const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const res = await fetch(endpoint);
const data = await res.json();

console.log(data);

input.addEventListener("input", (e) => {
    suggestions.innerHTML = "";

    const searchString = e.currentTarget.value.toLowerCase();

    data.filter(c => c.city.toLowerCase().includes(searchString) || c.state.toLowerCase().includes(searchString))
        .forEach(c => {
        const li = document.createElement("li");

        const regex = new RegExp(searchString, "gi");

        const cityName = c.city.replace(regex, (match) => `<el class="hl">${match}</el>`);
        const stateName = c.state.replace(regex, (match) => `<el class="hl">${match}</el>`);

        const nameSpan = document.createElement("span");
        nameSpan.classList.add("name");
        nameSpan.innerHTML = `${cityName}, ${stateName}`;

        li.appendChild(nameSpan);

        const populationSpan = document.createElement("span");
        populationSpan.classList.add("population");
        populationSpan.textContent = numberWithCommas(c.population);

        li.appendChild(populationSpan);
        suggestions.appendChild(li);
    });
});

function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}