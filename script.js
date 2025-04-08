let timer;
let startTime;
let elapsedTime = 0;
let running = false;



function formatTime(ms) {
    let minutes = String(Math.floor(ms / 60000)).padStart(2, '0');
    let seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    let milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function start() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 10);
    running = true;

}

function stop() {
    clearInterval(timer);
    running = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    running = false;
    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

updateDisplay();
