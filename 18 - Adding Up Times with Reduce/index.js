const videos = document.querySelectorAll("li");

const timeArr = Array.from(videos).map(video => video.dataset.time);
const totalTimeInSeconds = timeArr.reduce((sum, curr) => sum + convertToSeconds(curr), 0);
const result = convertSecondsToTimeString(totalTimeInSeconds);
console.log(result);

function convertToSeconds(timeStr) {
    const minutes = Number(timeStr.substring(0, timeStr.indexOf(':')));
    const seconds = Number(timeStr.substring(timeStr.indexOf(':') + 1));

    return minutes * 60 + seconds;
}

function convertSecondsToTimeString(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    
    return `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
}