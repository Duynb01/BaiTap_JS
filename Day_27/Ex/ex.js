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
var fullname = modal.querySelectorAll("input.fullname");
var password = modal.querySelectorAll("input.password");
var email = modal.querySelectorAll("input.email");
var input = modal.querySelectorAll("input");
var er1 = modal.querySelectorAll(".error1");
var er2 = modal.querySelector(".error2");
var er3 = modal.querySelector(".error3");
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

// Chuyển giao diện form
btnRegister.addEventListener("click", function () {
  btnRegister.classList.add("click");
  btnLogin.classList.remove("click");
  login.classList.add("hidden");
  register.classList.add("show");
  // register.innerHTML = register.innerHTML;
});
btnLogin.addEventListener("click", function () {
  btnLogin.classList.add("click");
  btnRegister.classList.remove("click");
  login.classList.remove("hidden");
  register.classList.remove("show");
  // login.innerHTML = login.innerHTML;
});

//Nhìn password
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

// Hiển thị lỗi của emal
email[0].addEventListener("focus", function () {
  email[0].addEventListener("blur", function () {
    if (email[0].value.length === 0) {
      er1[0].classList.add("show");
      input[0].classList.add("show");
    } else {
      er1[0].classList.remove("show");
      input[0].classList.remove("show");
    }
    if (password[0].value.length === 0) {
      er1[1].classList.add("show");
      input[1].classList.add("show");
    } else {
      input[1].classList.remove("show");
    }
  });
});
email[0].addEventListener("input", function () {
  if (email[0].value.length !== 0) {
    er1[0].classList.remove("show");
    if (!email[0].value.includes("@") || !email[0].value.includes(".co")) {
      er2.classList.add("show");
      input[0].classList.add("show");
    } else {
      er2.classList.remove("show");
      input[0].classList.remove("show");
    }
  } else {
    er2.classList.remove("show");
  }
});

// Hiển thị lỗi Password
password[0].addEventListener("focus", function () {
  password[0].addEventListener("blur", function () {
    if (password[0].value.length === 0) {
      er1[1].classList.add("show");
      input[1].classList.add("show");
    } else {
      er1[1].classList.remove("show");
      input[1].classList.remove("show");
    }
    if (email[0].value.length === 0) {
      er1[0].classList.add("show");
      input[0].classList.add("show");
    } else {
      er1[0].classList.remove("show");
      input[0].classList.remove("show");
    }
  });
});
password[0].addEventListener("input", function () {
  if (password[0].value.length !== 0) {
    er1[1].classList.remove("show");
    input[1].classList.remove("show");
  }
});
