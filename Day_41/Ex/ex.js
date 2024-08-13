import { httpClient } from "./api.js";
import { renderLoginForm } from "./login.js";
export var listBlog = document.querySelector(".list-blog");
const urlApi = "https://api-auth-two.vercel.app";

const getLimit = () => {
  var limit = 10;
  const handler = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    if (scrollPercent > 90) {
      limit += 5;
      window.removeEventListener("scroll", handler);
      setTimeout(() => {
        main();
      }, 300);
    }
  };
  window.addEventListener("scroll", handler);
  return limit;
};

const getApi = async (newLimit) => {
  const response = await fetch(`${urlApi}/blogs?_page=1&_limit=${newLimit}`);
  const blog = await response.json();
  blog.data.forEach((element) => {
    renderBlog(element);
    // console.log(element);
  });
};

const getHashTag = (name) => {
  let hashTag = name.replace(" ", "");
  return `<button class="hash-tag"># ${hashTag}</button>`;
};

const renderBlog = async (object) => {
  listBlog.innerHTML += `
        <section>
            <article class="inf">
                <div class="head">
                    <span class="avatar">${object.userId.name
                      .trim()
                      .slice(0, 1)
                      .toLowerCase()}</span>
                    <span class="name">${object.userId.name.trim()}</span>
                </div>
                <div class="main">
                    <h3 class="title">${object.title}</h3>
                    <div  class="content">${object.content}</div>
                </div>
                <div class="footer">
                    <div class="tag">
                        ${getHashTag(object.userId.name.trim().toLowerCase())}
                    </div>
                    <div class="time">
                         <span>Khoảng 1 giây đọc.</span>
                    </div>
                </div>
            <article>
        </section>
    `;
};

const main = async () => {
  const newLimit = await getLimit();
  getApi(newLimit);
};
main();

export var btnSignin = document.querySelector(".btn-sign");
btnSignin.addEventListener("click", function () {
  btnSignin.style.display = "none";
  listBlog.style.display = "none";
  if (btnSignin.classList.contains("check")) {
    renderLoginForm();
    console.log(btnSignin);
  }
});

const render = () => {
  const status = localStorage.getItem("login_token") ? true : false; //Trạng thái đăng nhập
  if (status) {
    btnSignin.style.display = "none";
    renderNewBlog();
  } else {
    btnSignin.style.display = "block";
    newBlog.innerHTML = "";
  }
};
document.addEventListener("DOMContentLoaded", render);

// Logout
var newBlog = document.querySelector(".newBlog");
export const renderNewBlog = () => {
  newBlog.innerHTML = `
    <div class="head">
            <span class="avatar">D</span>
            <span class="name">Duy</span>
          </div>
          <form id="formNew">
            <label for="title">Enter Your title</label>
            <input
              type="text"
              id="title"
              placeholder="Please enter the title"
              class="content-form"
            />
            <label for="newcontent">Enter Your content</label>
            <textarea
              id="newcontents"
              class="content-form content"
              placeholder="Content here.."
            ></textarea>
            <button class="btn btn-up" type="submit">Write new!</button>
          </form>
          <button class="logout" type="button">Sign out</button>
  `;
  eventLogout();
  createNewBlog();
};

const eventLogout = () => {
  const btnLogout = document.querySelector(".logout");
  btnLogout.addEventListener("click", () => {
    localStorage.removeItem("login_token");
    render();
  });
};

const getNewForm = (form) => {
  const formData = new FormData(form);
  const { title, content } = Object.fromEntries(formData);
  console.log(title, content);
  return { title, content };
};

const postData = async (Data) => {
  try {
    const { response, data } = await httpClient.post("/blogs", Data);
    if (!response.ok) {
      throw new Error("Unauthorize");
    }
    return data;
  } catch {
    return false;
  }
};

const createNewBlog = () => {
  var formInput = document.querySelector("#formNew");

  formInput.addEventListener("submit", async function (e) {
    e.preventDefault();
    console.log(`vào đây`);
    console.log(this);
    console.dir(this);
    const blogData = getNewForm(this);
    console.log(blogData);
    const postNewBlog = await postData(blogData);
    console.log(postNewBlog);

    // if (postNewBlog.code === 200) {
    //   Swal.fire({
    //     title: postNewBlog.message,
    //     icon: "success",
    //   });
    // }
  });
};
