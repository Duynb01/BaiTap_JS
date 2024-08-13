var connect = document.querySelector(".connect");
import { httpClient } from "./api.js";
import { renderLoginForm } from "./login.js";
export const renderSignupForm = () => {
  connect.innerHTML = `
      <div>
        <h1>Đăng Ký</h1>
        <p>Hãy nhập email và mật khẩu của bạn để tạo tài khoản miễn phí trên nền tảng Blogger</p>
        <span><a class="link" href="">Về trang chủ</a></span>
      </div>
      <form id="signupForm">
        <label for="name" class="label-form">Enter Your name</label>
        <input type="text" name="name" id="name" class="input-form" placeholder="Please enter the name" />
        <label for="email" class="label-form">Enter Your email</label>
        <input type="email" name="email" id="email" class="input-form" placeholder="Please enter the email" />
        <label for="password" class="label-form">Enter Your password</label>
        <input type="password" name="password" id="password" class="input-form" placeholder="Please enter the password" />
        <div class="btns">
          <button class="btn btn-signup" type="submit">Sign up</button>
          <button class="btn btn-signin" type="button">Sign in</button>
        </div>
      </form>`;
  eventSubmit();
  changeForm();
};
const getDataForm = (form) => {
  const formData = new FormData(form);
  const { name, email, password } = Object.fromEntries(formData);
  console.log(name, email, password);
  return { name, email, password };
};

const sendRegister = async (Data) => {
  try {
    const { response, data } = await httpClient.post("/auth/register", Data);
    if (!response.ok) {
      throw new Error("Đăng ký thất bại");
    }
    return data;
  } catch {
    return false;
  }
};

const eventSubmit = () => {
  var formSubmit = document.querySelector("#signupForm");
  formSubmit.addEventListener("submit", async function (e) {
    e.preventDefault();
    console.log(this);

    const registerData = getDataForm(this);
    console.log(registerData);
    setLoadingBtn(formSubmit);
    const registerResponse = await sendRegister(registerData);
    console.log(registerResponse);
    removeLoadingBtn(formSubmit);
    if (registerResponse.code === 201) {
      Swal.fire({
        title: "Đăng ký thành công!",
        icon: "success",
      });
      setTimeout(renderLoginForm(), 1000);
    } else {
      alert("Tài khoản đã tồn tại");
    }
  });
};

const changeForm = () => {
  var btnSignin = document.querySelector(".btn-signin");
  btnSignin.addEventListener("click", function (e) {
    renderLoginForm();
  });
};
const setLoadingBtn = (registerForm) => {
  const btn = registerForm.querySelector(".btn-signup");
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span><span> Loading...</span>`;
};
const removeLoadingBtn = (registerForm) => {
  const btn = registerForm.querySelector(".btn-signup");
  btn.innerText = "Sign up";
  btn.disabled = false;
};
