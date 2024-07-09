const addBtn = document.querySelector(".btn-add");
const overlay = document.querySelector(".overlay");
const formEdit = document.querySelector(".add-edit");
const btnSave = document.querySelector(".btn-save");
const btnCancel = document.querySelector(".btn-cancel");
const formInput = document.querySelector(".form-input");
const btnComplete = document.querySelector(".btn-complete");
const workFinish = document.querySelector(".finish");
var btnEdits = document.querySelectorAll(".btn-edit");
addBtn.addEventListener("click", () => {
  overlay.style.display = "block";
  formEdit.style.display = "block";
});
btnCancel.addEventListener("click", () => {
  overlay.style.display = "none";
  formEdit.style.display = "none";
  formInput.value = "";
});
btnSave.addEventListener("submit", () => {
  if (formInput.value !== "" || formInput.value !== " ") {
  }
  formInput.value = "";
});
var arrow = document.querySelector(".arrow");
console.log(arrow);
btnComplete.addEventListener("click", () => {
  btnComplete.classList.toggle("access");
  document.querySelector(".arrow").classList.toggle("down");
  if (btnComplete.classList.contains("access")) {
    workFinish.style.display = "flex";
  } else {
    workFinish.style.display = "none";
  }
});
btnEdits.forEach((btnEdit) => {
  btnEdit.addEventListener("click", function (e) {
    overlay.style.display = "block";
    formEdit.style.display = "block";
    formInput.value =
      this.parentElement.previousSibling.parentNode.innerText.trim();
  });
});
