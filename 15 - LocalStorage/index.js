const addItemsForm = document.querySelector('.add-items');
const nameInput = document.querySelector(`input[name="item"]`);
const itemsList = document.querySelector('.plates');

let items = JSON.parse(localStorage.getItem("items")) || [];

loadItems();

addItemsForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addItem(nameInput.value);
    nameInput.value = "";
    loadItems();
});

function loadItems() {
    items = JSON.parse(localStorage.getItem("items")) || [];

    itemsList.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");

        const input = document.createElement("input");
        input.type = "checkbox";
        input.checked = item.done;

        const label = document.createElement("label");
        label.textContent = item.text;

        li.appendChild(input);
        li.appendChild(label);
        itemsList.appendChild(li);

        li.addEventListener("click", () => toggleCheckbox(item));
    });
}

function addItem(name) {
    const item = { text: name, done: false };
    items.push(item);

    localStorage.setItem("items", JSON.stringify(items));
}

function toggleCheckbox(item) {
    item.done = !item.done;

    localStorage.setItem("items", JSON.stringify(items));

    loadItems();
}