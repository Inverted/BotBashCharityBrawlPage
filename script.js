let timerTarget = new Date("14 Dec 2018 18:00:00 PST");
let timerContainer = document.querySelector("#countdownContent");
function leadingZero(number) {
  return ("0" + number).slice(-2);
}
function updateTimer() {
  let diff = new Date(timerTarget - Date.now());
  if (diff.getDate() > 1) {
    timerContainer.innerText = `${diff.getDate() - 1} days`;
  } else {
    timerContainer.innerText = `${leadingZero(diff.getHours())}:${leadingZero(
      diff.getMinutes()
    )}:${leadingZero(diff.getSeconds())}`;
  }
}
setInterval(updateTimer, 1000);

document.querySelector("#toggleNav").addEventListener("click", function() {
  let cur = document.querySelector("nav").style.display;
  if (cur == "table") {
    document.querySelector("nav").style.display = "none";
  } else {
    document.querySelector("nav").style.display = "table";
  }
});
