var timer;
var timeLeft;
var isTimerRunning = false;

function startTimer() {
  if (!isTimerRunning) {
    var minutes = 25;
    timeLeft = minutes * 60;
    isTimerRunning = true;

    timer = setInterval(function () {
      var minutesDisplay = Math.floor(timeLeft / 60);
      var secondsDisplay = (timeLeft % 60).toString().padStart(2, "0");

      document.getElementById("timer").innerHTML = minutesDisplay + ":" + secondsDisplay;

      if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "00:00";
        isTimerRunning = false;
        alert("Pomodoro session completed! Take a break.");
      }

      timeLeft--;
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isTimerRunning = false;
  document.getElementById("timer").innerHTML = "25:00";
}
