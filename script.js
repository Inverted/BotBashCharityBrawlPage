let timerTarget = new Date("14 Dec 2018 18:00:00 PST");
let dayCount = document.querySelector("#countDays");
let hourCount = document.querySelector("#countHours");
let minuteCount = document.querySelector("#countMinutes");
let secondCount = document.querySelector("#countSeconds");

function leadingZero(number) {
  return ("0" + number).slice(-2);
}
function updateTimer() {
  let nDiff = timerTarget - Date.now();
  if(nDiff >= 0) {
    let diff = new Date(nDiff);
    dayCount.innerText = leadingZero(diff.getDate() - 1);
    hourCount.innerText = leadingZero(diff.getHours() - 1);
    minuteCount.innerText = leadingZero(diff.getMinutes());
    secondCount.innerText = leadingZero(diff.getSeconds());
  } else {
    document.querySelector("#countdown").style.display = "none";
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
