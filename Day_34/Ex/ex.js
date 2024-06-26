var list = document.querySelector(".list");
var active = document.querySelectorAll("active");
var div = document.querySelectorAll("div.list-item");
var module = document.createTextNode(1);
var bai = document.createTextNode(1);
var draggedItem = null;
div.forEach(function (item) {
  if (item.classList.contains("active")) {
    item.innerHTML = `Module ${module.data}: <span>${item.innerHTML}</span>`;
    module.data++;
  } else {
    item.innerHTML = `Bài ${bai.data}: <span>${item.innerHTML}</span>`;
    bai.data++;
  }

  //   Bắt đầu kéo
  item.addEventListener("dragstart", function () {
    item.classList.add("ghost");
    draggedItem = this;
  });

  //   Kéo khỏi vị trí
  item.addEventListener("dragover", function (e) {
    e.preventDefault();
    if (draggedItem !== this) {
      var allItems = Array.from(document.querySelectorAll(".list-item"));
      var draggedIndex = allItems.indexOf(draggedItem);
      var targetIndex = allItems.indexOf(this);
      if (draggedIndex < targetIndex) {
        list.insertBefore(draggedItem, allItems[targetIndex + 1]);
      } else {
        list.insertBefore(draggedItem, allItems[targetIndex]);
      }
    }
  });

  // Thả
  item.addEventListener("drop", function (e) {
    e.preventDefault();
    if (draggedItem !== this) {
      var allItems = Array.from(document.querySelectorAll(".list-item"));
      var draggedIndex = allItems.indexOf(draggedItem);
      var targetIndex = allItems.indexOf(this);
      if (draggedIndex < targetIndex) {
        list.insertBefore(draggedItem, allItems[targetIndex + 1]);
      } else {
        list.insertBefore(draggedItem, allItems[targetIndex]);
      }
    }
    updateTextNode();
  });

  //   Kết thúc kéo thả
  item.addEventListener("dragend", function () {
    item.classList.remove("ghost");
  });
});

// update số thứ tự
function updateTextNode() {
  var allItems = Array.from(document.querySelectorAll(".list-item"));
  var moduleCounter = 1;
  var baiCounter = 1;
  allItems.forEach(function (item) {
    var span = item.querySelector("span");
    if (item.classList.contains("active")) {
      item.innerHTML = `Module ${moduleCounter}: ${span.outerHTML}`;
      moduleCounter++;
    } else {
      item.innerHTML = `Bài ${baiCounter}: ${span.outerHTML}`;
      baiCounter++;
    }
  });
}
