var connect = document.querySelector(".connect");

import { httpClient } from "./api.js";
import { renderSignupForm } from "./register.js";
import { listBlog, renderNewBlog } from "./ex.js";
export const renderLoginForm = () => {
  connect.innerHTML = `
      <div>
        <h1>Đăng nhập</h1>
        <p>Hãy nhập email và mật khẩu của bạn để truy cập vào nền tảng Blogger</p>
        <span><a class="link" href="">Về trang chủ</a></span>
      </div>
      <form id="loginForm">
        <label for="email" class="label-form">Enter Your email</label>
        <input type="email" name="email" id="email" class="input-form" placeholder="Please enter the email" />
        <label for="password" class="label-form">Enter Your password</label>
        <input type="password" name="password" id="password" class="input-form" placeholder="Please enter the password" />
        <div class="btns">
          <button class="btn btn-signin" type="submit">Sign in</button>
          <button class="btn btn-signup" type="button">Sign up</button>
        </div>
      </form>`;
  eventSubmit();
  changeForm();
};

const getDataForm = (form) => {
  const formData = new FormData(form);
  const { email, password } = Object.fromEntries(formData);
  console.log(email, password);
  return { email, password };
};

const sendLogin = async (Data) => {
  try {
    const { response, data } = await httpClient.post("/auth/login", Data);
    if (!response.ok) {
      throw new Error("Đăng nhập thất bại");
    }
    return data;
  } catch {
    return false;
  }
};

const eventSubmit = () => {
  var formSubmit = document.querySelector("#loginForm");
  formSubmit.addEventListener("submit", async function (e) {
    e.preventDefault();
    console.log(this);

    const loginData = getDataForm(this);
    setLoadingBtn(formSubmit);
    const loginResponse = await sendLogin(loginData);
    removeLoadingBtn(formSubmit);
    localStorage.setItem(
      "login_token",
      JSON.stringify({
        accessToken: loginResponse.data.accessToken,
        refreshToken: loginResponse.data.refreshToken,
      })
    );
    if (loginResponse.code === 200) {
      connect.innerHTML = "";
      renderNewBlog();
      listBlog.style.display = "block";
    }
  });
};

const changeForm = () => {
  var btnSignup = document.querySelector(".btn-signup");
  btnSignup.addEventListener("click", function (e) {
    renderSignupForm();
  });
};
const setLoadingBtn = (loginForm) => {
  const btn = loginForm.querySelector(".btn-signin");
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span><span> Loading...</span>`;
};
const removeLoadingBtn = (loginForm) => {
  const btn = loginForm.querySelector(".btn-signin");
  btn.innerText = "Sign in";
  btn.disabled = false;
};
