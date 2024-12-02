let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10); // Store the interval ID
});

stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null; // Reset timerId to ensure it can be restarted
});

resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null; // Reset timerId
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0; // Reset time values
});

function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }

    // Format the time values
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secString} : ${msecString}`;
}
