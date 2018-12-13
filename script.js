let timerTarget = new Date("14 Dec 2018 18:00:00 PST");
let dayCount = document.querySelector("#countDays");
let hourCount = document.querySelector("#countHours");
let minuteCount = document.querySelector("#countMinutes");
let secondCount = document.querySelector("#countSeconds");

function leadingZero(number) {
  return ("0" + number).slice(-2);
}
function updateTimer() {
  let nDiff = (timerTarget - Date.now()) / 1000;
  if (nDiff >= 0) {
    let days = Math.floor(nDiff / 86400);
    nDiff -= days * 86400;
    let hours = Math.floor(nDiff / 3600);
    nDiff -= hours * 3600;
    let minutes = Math.floor(nDiff / 60);
    nDiff -= minutes * 60;
    let seconds = Math.floor(nDiff);

    dayCount.innerText = leadingZero(days);
    hourCount.innerText = leadingZero(hours);
    minuteCount.innerText = leadingZero(minutes);
    secondCount.innerText = leadingZero(seconds);
  } else {
    document.querySelector("#countdown").style.display = "none";
    document.querySelector("#stream").style.display = "block";
    clearInterval(interval);
  }
}
let interval = setInterval(updateTimer, 1000);

document.querySelector("#toggleNav").addEventListener("click", function() {
  let cur = document.querySelector("nav").style.display;
  if (cur == "table") {
    document.querySelector("nav").style.display = "none";
  } else {
    document.querySelector("nav").style.display = "table";
  }
});

window.addEventListener("resize", function(event) {
  if (this.document.documentElement.clientWidth >= 800) {
    document.querySelector("nav").style.display = "table";
  } else {
    document.querySelector("nav").style.display = "none";
  }
});
