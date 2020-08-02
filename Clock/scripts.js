let el = document.querySelector(".timer");
let second = 00;
let minute = 00;
var interval;
document.querySelector(".btn-1").addEventListener("click", startTime);
document.querySelector(".btn-2").addEventListener("click", pauseTimer);
document.querySelector(".btn-3").addEventListener("click", resetTimer);

function startTime() {
  clearInterval(interval);
  interval = setInterval(startTimer, 300);
}

function startTimer() {
  second++;

  if (second <= 9) {
    el.textContent = "0" + minute + ":" + "0" + second;
  }

  if (second > 60) {
    minute++;
    el.textContent = 0 + minute;
    second = 0;
    el.textContent = "0" + minute + ":" + "0" + second;
  }

  if (second > 9) {
    el.textContent = "0" + minute + ":" + second;
  }
}

function pauseTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  second = 00;
  minute = 00;
  el.textContent = minute + ":" + second;
}
