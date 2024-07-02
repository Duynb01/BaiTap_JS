var counter = document.querySelector(".counter");
var btn = document.querySelector(".btn");
const initialTime = 30;
let timeupdate;
var timeChange = 0;
counter.textContent = initialTime;

document.addEventListener("DOMContentLoaded", function () {
  btn.classList.add("hidden");
});

function runTime() {
  var now = performance.now();
  timeupdate = initialTime - Math.floor((now - timeChange) / 1000);
  counter.textContent = timeupdate;
  if (timeupdate <= 0) {
    counter.textContent = 0;
    btn.classList.remove("hidden");
    btn.disabled = null;
    btn.addEventListener("click", function () {
      window.location.href = "https://fullstack.edu.vn/";
    });
    cancelAnimationFrame(runTime);
  }
  requestAnimationFrame(runTime);
}

runTime();

window.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    cancelAnimationFrame(requestAnimationFrame(runTime));
  } else {
    timeChange = performance.now() - (initialTime - timeupdate) * 1000;
    requestAnimationFrame(runTime);
  }
});
