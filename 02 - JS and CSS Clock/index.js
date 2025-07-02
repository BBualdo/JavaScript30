function getTime() {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
}

function getTimeDegrees() {
    const { hours, minutes, seconds } = getTime();
    const baseRotation = 90;

    return {
        hoursDeg: hours / 12 * 360 + baseRotation,
        minutesDeg: minutes / 60 * 360 + baseRotation,
        secondsDeg: seconds / 60 * 360 + baseRotation
    }
}

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function updateClock() {
    const { hoursDeg, minutesDeg, secondsDeg } = getTimeDegrees();
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
}

updateClock()
setInterval(updateClock, 1000)