var form = document.querySelector("form");
var nameEl = document.querySelector(".inputdata");
var btn = document.querySelector(".btn");
var todoList = document.querySelector(".todoList");
var todo = document.querySelectorAll(`.todo`);
var btnEdit = document.querySelectorAll(".edit");
var btnRemove = document.querySelectorAll(".remove");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  nameEl.value = "";
});

// Hàm thêm Task
var data = [];
function createDiv(value) {
  data.push(value);
  console.log(data);
  //   console.log(data);
  return `<div class="todo">
                    <p class="para">${data[data.length - 1]}</p>
                    <div class="icon">
                        <button class="edit">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button class="remove">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>`;
}
// Hàm check nhập vào khoảng trống
function checkInput(value) {
  return value.split("").every(function (char) {
    return char === " ";
  });
}

var handler = function () {
  if (!checkInput(nameEl.value) && nameEl.value !== "") {
    var nameshow;
    if (nameEl.value.length > 40) {
      nameshow = `${nameEl.value.slice(0, 35)}...`;
      todoList.innerHTML += createDiv(nameshow);
    } else {
      nameshow = nameEl.value;
      todoList.innerHTML += createDiv(nameshow);
    }
  }
};
btn.addEventListener("mouseup", handler);
