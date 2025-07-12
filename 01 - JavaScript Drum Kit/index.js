function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio)
        return;

    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    key.classList.add("playing");

    audio.currentTime = 0;
    audio.play();
}

function setupTransitionEndListeners() {
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => {
        key.addEventListener("transitionend", (e) => {
            if (e.propertyName === "transform") {
                key.classList.remove("playing")
            }
        })
    })
}

document.addEventListener('keydown', (e) => {
    const keyCode = e.key.toUpperCase().charCodeAt(0);
    playSound(keyCode);
})

setupTransitionEndListeners()