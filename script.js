let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function timeToString(time) {
    let hrs = Math.floor(time / 3600000);
    let mins = Math.floor((time % 3600000) / 60000);
    let secs = Math.floor((time % 60000) / 1000);

    return (
        (hrs < 10 ? "0" : "") + hrs + ":" +
        (mins < 10 ? "0" : "") + mins + ":" +
        (secs < 10 ? "0" : "") + secs
    );
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = timeToString(elapsedTime);
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = "00:00:00";
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
