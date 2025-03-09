let timer;
let timeLeft = 1500; // 25 minutes in seconds
let isRunning = false;

const timerDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const stopButton = document.getElementById('stop');
const pomodoroButton = document.getElementById('pomodoro');
const shortBreakButton = document.getElementById('short-break');
const longBreakButton = document.getElementById('long-break');
const alertSound = document.getElementById('alert');

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        alertSound.play();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 1500; // Reset to 25 minutes
  updateDisplay();
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 0;
  updateDisplay();
}

function setTimer(minutes) {
  clearInterval(timer);
  isRunning = false;
  timeLeft = minutes * 60;
  updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
stopButton.addEventListener('click', stopTimer);
pomodoroButton.addEventListener('click', () => setTimer(25));
shortBreakButton.addEventListener('click', () => setTimer(5));
longBreakButton.addEventListener('click', () => setTimer(15));

updateDisplay();
