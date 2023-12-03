let timer;
let isPaused = false;
let remainingTime = 1500; // Default Pomodoro time
let duration = 1500; // Initial duration

function startPauseTimer() {
  if (timer) {
    pauseResumeTimer();
  } else {
    startTimer();
    updateButton("Pause");
  }
}

function setDuration(newDuration) {
  duration = newDuration;
  displayTimeLeft(duration);
}

function startTimer() {
  clearInterval(timer);
  isPaused = false;
  displayTimeLeft(duration);
  timer = setInterval(() => {
    remainingTime = duration;
    duration--;
    if (duration < 0) {
      clearInterval(timer);
      alert("Time's up!");
      timer = null;
      updateButton("Start");
    } else {
      displayTimeLeft(duration);
    }
  }, 1000);
}

function pauseResumeTimer() {
  if (isPaused) {
    isPaused = false;
    updateButton("Pause");
    startTimer();
  } else {
    isPaused = true;
    clearInterval(timer);
    updateButton("Start");
  }
}

function updateButton(action) {
  const timerButton = document.getElementById("timerButton");
  timerButton.textContent = action;
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  document.getElementById("timer").textContent = display;
}
