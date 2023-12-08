let chaiBreakTimer;
let workMinutes = 25;
let breakMinutes = 5;
let seconds = 0;
let isRunning = false;

function startChaiBreak() {
    if (!isRunning) {
        workMinutes = parseInt(document.getElementById('workDuration').value, 10) || 25;
        breakMinutes = parseInt(document.getElementById('breakDuration').value, 10) || 5;

        updateChaiBreakDisplay();

        chaiBreakTimer = setInterval(updateChaiBreakTimer, 1000);
        isRunning = true;
        document.getElementById('startBtn').textContent = 'Pause';
    } else {
        clearInterval(chaiBreakTimer);
        isRunning = false;
        document.getElementById('startBtn').textContent = 'Resume';
    }
}

function updateChaiBreakTimer() {
    if (workMinutes === 0 && breakMinutes === 0 && seconds === 0) {
        clearInterval(chaiBreakTimer);
        isRunning = false;
        document.getElementById('startBtn').textContent = 'Start';
        alert('ChaiBreak session complete! Take a break.');
    } else {
        if (seconds === 0) {
            if (workMinutes > 0) {
                workMinutes--;
            } else if (breakMinutes > 0) {
                breakMinutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }
        updateChaiBreakDisplay();
    }
}

function resetChaiBreak() {
    clearInterval(chaiBreakTimer);
    isRunning = false;
    workMinutes = parseInt(document.getElementById('workDuration').value, 10) || 25;
    breakMinutes = parseInt(document.getElementById('breakDuration').value, 10) || 5;
    seconds = 0;
    updateChaiBreakDisplay();
    document.getElementById('startBtn').textContent = 'Start';
}

function updateChaiBreakDisplay() {
    const displayMinutes = workMinutes > 0 ? workMinutes : breakMinutes;
    document.getElementById('waqt').textContent = padZero(displayMinutes) + ':' + padZero(seconds);
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}
