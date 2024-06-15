var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Tính chiều rộng của progess-bar
var progressBarWidth = progressBar.clientWidth;
var offsetX = 0;
var initialClientX = 0;
var lastOffsetProgressBar = 0;
var offsetProgressBar = 0;
progressBar.addEventListener("mousedown", function (e) {
  //Lấy được tọa độ tại vị trí bấm (offsetX)
  offsetX = e.offsetX;

  //Tính tỷ lệ phần trăm giữa tọa độ bấm xuống và chiều rộng
  var rate = (offsetX / progressBarWidth) * 100;
  //Cập nhật CSS vào progress
  progress.style.width = rate + "%";
  lastOffsetProgressBar = offsetX;
  offsetProgressBar = offsetX;
  initialClientX = e.clientX;
  document.addEventListener("mousemove", handleDrag);
  audio.addEventListener("timeupdate", function () {
    currentTimeEl = timeNew;
  });
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX; //Gán ví trí của button màu tím so với body
});
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  lastOffsetProgressBar = offsetProgressBar;
});
var handleDrag = function (e) {
  var clientX = e.clientX;
  offsetProgressBar = clientX - initialClientX + lastOffsetProgressBar;
  var rate = (offsetProgressBar / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = rate + "%";
};

var audio = document.querySelector("audio");
var player = document.querySelector(".player");
var playBtn = document.querySelector(".play-btn i");
var playTimer = document.querySelector(".play-timer");
var currentTimeEl = playTimer.firstElementChild;
var durationEl = playTimer.lastElementChild;

console.log(currentTimeEl);
console.log(durationEl);
var duration = 0;
var setDuration = function () {
  duration = audio.duration;
};
var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

window.addEventListener("load", function () {
  setDuration();
  durationEl.innerText = getTime(duration);

  playBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  audio.addEventListener("play", function () {
    playBtn.classList.replace("fa-play", "fa-pause");
  });
  audio.addEventListener("pause", function () {
    playBtn.classList.replace("fa-pause", "fa-play");
  });
  audio.addEventListener("timeupdate", function (e) {
    var currentTime = audio.currentTime;
    currentTimeEl.innerText = getTime(currentTime);
    var rate = (currentTime / duration) * 100;
    progress.style.width = `${rate}%`;
  });
});

var timeNew = 0;
// Case hover vào hiện thị trước time
var changeTime = document.querySelector(".change-time");
progressBar.addEventListener("mouseenter", function (e) {
  var rate = 0;
  progressBar.addEventListener("mousemove", function (e) {
    changeTime.classList.add("show");
    changeTime.style.left = `${e.offsetX - 20}px`;
    rate = (e.offsetX / progressBar.clientWidth) * 100;
    timeNew = (rate / 100) * duration;
    changeTime.innerText = getTime(timeNew);
  });
  progressSpan.addEventListener("mousemove", function (e) {
    e.stopPropagation();
  });
  //   Case tua
  progressBar.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    audio.currentTime = (rate / 100) * duration;
    audio.addEventListener("timeupdate", function () {
      currentTimeEl.innerText = getTime(audio.currentTime);
    });
  });
});
progressBar.addEventListener("mouseleave", function (e) {
  changeTime.classList.remove("show");
});

// progressSpan.addEventListener("mousedown", function (e) {
//   e.stopPropagation();
//   document.addEventListener("mousemove", function () {
//     document.addEventListener("mouseup", function () {
//       audio.currentTime = timeNew;
//       audio.addEventListener("timeupdate", function () {
//         currentTimeEl.innerText = getTime(audio.currentTime);
//         var ts = audio.currentTime;
//         currentTimeEl.innerText = getTime(ts);
//       });
//     });
//   });
// });
