let timer;
let startTime;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

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
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        running = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stop() {
    if (running) {
        clearInterval(timer);
        running = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
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

