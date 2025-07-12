const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        toggleOpen(panel);
    });
})

function toggleOpen(panel) {
    if (panel.classList.contains("open")) {
        panel.classList.remove("open");
        setTimeout(() => panel.classList.remove("open-active"), 800);
    } else {
        panel.classList.add("open");
        setTimeout(() => panel.classList.add("open-active"), 800);
    }
}