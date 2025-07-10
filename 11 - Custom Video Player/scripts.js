const video = document.querySelector("video");
const togglePlayBtn = document.querySelector(".player__button");
const durationBar = document.querySelector(".progress__filled");
const volumeSlider = document.querySelector(`input[name="volume"]`);
const playbackRateSlider = document.querySelector(`input[name="playbackRate"]`);
const sub10sBtn = document.querySelector(`button[data-skip="-10"]`);
const add25sBtn = document.querySelector(`button[data-skip="25"]`);
const progressBar = document.querySelector(".progress");

video.addEventListener("timeupdate", updateDurationBar);
togglePlayBtn.addEventListener("click", togglePlay);
volumeSlider.addEventListener("input", changeVolume);
playbackRateSlider.addEventListener("input", changePlaybackRate);
sub10sBtn.addEventListener("click", () => addTime(-10));
add25sBtn.addEventListener("click", () => addTime(25));
progressBar.addEventListener("click", (e) => handleProgressClick(e))

function togglePlay() {
    if (video.paused) {
        video.play();
        togglePlayBtn.textContent = "⏸︎"
    } else {
        video.pause();
        togglePlayBtn.textContent = "►";
    }
}

function updateDurationBar() {
    const { duration, currentTime } = video;
    durationBar.style.flexBasis = `${(currentTime / duration) * 100}%`;
}

function changeVolume(e) {
    video.volume = e.currentTarget.value;
}

function changePlaybackRate(e) {
    video.playbackRate = e.currentTarget.value;
}

function addTime(time) {
    video.currentTime += time;
}

function handleProgressClick(e) {
    const totalWidth = e.currentTarget.scrollWidth;
    const clickPosition = e.offsetX;
    const durationPercent = clickPosition / totalWidth;

    video.currentTime = video.duration * durationPercent;
}