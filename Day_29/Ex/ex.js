var prev = document.querySelector(".fa-solid.fa-circle-arrow-left.prev");
var after = document.querySelector(".fa-solid.fa-circle-arrow-right.after");
var carousel_dots = document.querySelector(".carousel-dots");
var carousel_inner = document.querySelector(".carousel-inner div");

var item = document.querySelectorAll(".item");
item.forEach(function (child) {
  if (child.children.length) {
    if (!carousel_dots.innerHTML) {
      carousel_dots.innerHTML += '<span class = "dot show"></span>';
    } else {
      carousel_dots.innerHTML += '<span class = "dot"></span>';
    }
  }
  console.log(child.offsetWidth);
});
var count = 1;
after.addEventListener("click", function () {
  var dotShow = document.querySelector(".dot.show");
  dotShow.nextElementSibling.classList.add("show");
  if (dotShow) {
    dotShow.classList.remove("show");
  }
  if (count > dots.length) {
    count = dots.length;
  } else {
    carousel_inner.style.transform = `translateX(${count * 100}vw)`;
    count++;
  }
});
prev.addEventListener("click", function (e) {
  this.off;
  var dotShow = document.querySelector(".dot.show");
  dotShow.previousElementSibling.classList.add("show");
  if (dotShow) {
    dotShow.classList.remove("show");
  }
  if (count < 0) {
    count = 0;
  } else {
    carousel_inner.style.transform = `translateX(-${count * 100}vw)`;
    count--;
  }
});

var dots = document.querySelectorAll(".dot");
dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    var dotShow = document.querySelector(".dot.show");
    dot.classList.add("show");
    if (dotShow) {
      dotShow.classList.remove("show");
    }
  });
});
