console.log("Bài 1");
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var newArr1 = [];
arrA.forEach(function (item) {
  if (arrB.includes(item)) {
    newArr1.push(item);
  }
});
console.log(`arrA = [${arrA}]`);
console.log(`arrB = [${arrB}]`);
console.log(`Giao nhau: [${newArr1}]`);
console.log(" ");

console.log("Bài 2");
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var newArr2 = [];
function checkArray(value, array) {
  if (Array.isArray(value)) {
    for (var i of value) {
      checkArray(i, array);
    }
  } else {
    array.push(value);
  }
}
arr.forEach(function (value) {
  checkArray(value, newArr2);
});
console.log(`Mảng ban đầu:`);
console.log(arr);
console.log(`Mảng sau xử lý:`);
console.log(newArr2);
console.log(" ");

console.log("Bài 3");
var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
var arrProcessing = [];
var newArr3 = [];
var arrString = [];
var arrNumber = [];
var arrBoolean = [];
arr.forEach(function (value) {
  checkArray(value, arrProcessing);
});
function checkDatatype(value) {
  if (typeof value === "string") {
    return arrString.push(value);
  } else if (typeof value === "number") {
    return arrNumber.push(value);
  } else if (typeof value === "boolean") {
    return arrBoolean.push(value);
  }
}
arrProcessing.forEach(function (value) {
  checkDatatype(value);
});
newArr3.push(arrString, arrNumber, arrBoolean);
console.log(`Mảng ban đầu:`);
console.log(arr);
console.log(`Mảng sau xử lý:`);
console.log(newArr3);
console.log(" ");

console.log("Bài 4");
var paraparagraphs = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores
ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam
repellendus dolores harum sit, laudantium delectus quisquam amet atque.`;
var linkImage = `../Ex/image1.jpeg`;
var arrStore = [
  ["Tiêu đề 1", linkImage, paraparagraphs],
  ["Tiêu đề 2", linkImage, paraparagraphs],
  ["Tiêu đề 3", linkImage, paraparagraphs],
];
for (var i = 0; i < arrStore.length; i++) {
  var articleElement = document.createElement("div");
  if (i == 1) {
    articleElement.innerHTML = `
    <div>
        <h2>${arrStore[i][0]}</h2>
        <p>${arrStore[i][2]}</p>
    </div>
  <img src="${arrStore[i][1]}">
`;
  } else {
    articleElement.innerHTML = `
    <img src="${arrStore[i][1]}">
    <div>
        <h2>${arrStore[i][0]}</h2>
        <p>${arrStore[i][2]}</p>
    </div>
`;
  }
  document.body.appendChild(articleElement);
}
