var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close");
var overlay = document.querySelector(".modal_overlay");
var btn = document.querySelector(".btn");
var btnLogin = document.querySelector(".btn_login");
var btnRegister = document.querySelector(".btn_register");
var login = document.querySelector(".login");
var register = document.querySelector(".register");
var i = modal.querySelectorAll("i");
var form = document.querySelectorAll("form");
var password = modal.querySelectorAll("input.password");
var email = modal.querySelectorAll("input.email");
var originalLogin = login.innerHTML;
var originalRegister = register.innerHTML;
btn.addEventListener("click", function () {
  modal.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("show");
});
overlay.addEventListener("click", function () {
  modal.classList.remove("show");
});
document.addEventListener("keyup", function (e) {
  //   console.log("nhả phím");
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});

btnRegister.addEventListener("click", function () {
  btnRegister.classList.add("click");
  btnLogin.classList.remove("click");
  login.classList.add("hidden");
  register.classList.add("show");
});
btnLogin.addEventListener("click", function () {
  btnLogin.classList.add("click");
  btnRegister.classList.remove("click");
  login.classList.remove("hidden");
  register.classList.remove("show");
});
i.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.className === "fa-regular fa-eye open") {
      item.className = "fa-regular fa-eye-slash open";
    } else {
      item.className = "fa-regular fa-eye open";
    }
    password.forEach(function (value) {
      if (item.className === "fa-regular fa-eye open") {
        value.type = "password";
      } else {
        value.type = "text";
      }
    });
  });
});
form.forEach(function (item) {
  item.addEventListener("submit", function (e) {
    e.preventDefault();
  });
});
email.forEach(function (item) {
  item.addEventListener("input", function () {
    console.log(item.value);
  });
});
password.forEach(function (item) {
  var mes = item.addEventListener("input", function () {
    item.addEventListener("blur", function () {
      if (item.value.length === 0) {
        console.log(`Nhập mật khẩu`);
      } else {
        console.log(item.value);
      }
    });
  });
});
