var btnFile = document.querySelector(".btn-file");
var filename = document.querySelector(".filename");
var saveFile = document.querySelector(".save-file");
var divContent = document.querySelector(".message");

var nameFile = filename.value;

// Bật tắt New & Save file
btnFile.addEventListener("click", function (e) {
  e.stopPropagation();
  saveFile.classList.toggle("open");
});
document.addEventListener("click", function () {
  saveFile.classList.remove("open");
});

// Tên file
filename.addEventListener("input", function () {
  filename.addEventListener("change", function () {
    nameFile = filename.value;
  });
});

// Tải file txt
var saveText = document.querySelector(".save-text");
saveText.addEventListener("click", function () {
  var data = divContent.textContent;
  let blob = new Blob([data], { type: "text/plain" });
  let url = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = url;
  a.download = `${nameFile}.txt`;
  a.click();
  URL.revokeObjectURL(url);
});

// Tải file PDF
var savePDF = document.querySelector(".save-pdf");
savePDF.addEventListener("click", function () {
  var options = {
    margin: 0.5,
    filename: `${nameFile}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().from(divContent).set(options).save();
});

// New
var creatNew = document.querySelector(".create-new");
creatNew.addEventListener("click", function () {
  divContent.textContent = "";
  divContent.focus();
  btnColor.value = `#000000`;
});

// Text Format
var btnBold = document.querySelector(".btn-bold");
btnBold.addEventListener("click", function () {
  document.execCommand("bold", false, null);
});

var btnUnderLine = document.querySelector(".btn-underline");
btnUnderLine.addEventListener("click", function () {
  document.execCommand("underline", false, null);
});

var btnItalic = document.querySelector(".btn-italic");
btnItalic.addEventListener("click", function () {
  document.execCommand("italic", false, null);
});

var btnColor = document.querySelector(".btn-color");
btnColor.addEventListener("input", function () {
  document.execCommand("foreColor", false, btnColor.value);
});

// Show quantity
var nodeChar = 0;
var nodeWord = 0;
var quantityChar = document.querySelector(".char");
var quantityWord = document.querySelector(".word");
quantityChar.append(nodeChar);
quantityWord.append(nodeWord);
divContent.addEventListener("input", function () {
  var word = divContent.innerText.trim().split(" ").length;
  var char = divContent.innerText.trim().length;
  quantityChar.childNodes[1].nodeValue = char;
  quantityWord.childNodes[1].nodeValue = word;
});
