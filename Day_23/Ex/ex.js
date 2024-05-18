console.log("Bài 1");

var n = 12054;
// Hàm kiểm tra đối xứng
function checkSymmetry(value) {
  var value = value.toString();
  for (var i = 0; i < value.length / 2; i++) {
    if (value[i] !== value[value.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// Hàm kiểm tra số nguyên tố
function checkPrimeNumber(value) {
  if (value < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}
// Hàm lấy giá trị
function getNumber(n) {
  if (checkPrimeNumber(n) && checkSymmetry(n)) {
    return n;
  }
  return getNumber(n + 1);
}
console.log(`n = ${n}`);
console.log(
  `Số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng n: ${getNumber(n)}`
);
console.log(` `);

console.log("Bài 2");
var nums1 = [1, 9, 7];
var nums2 = [3, 4];
// var median = 0
var arrNew = nums1.concat(nums2);
arrNew.sort(function (a, b) {
  return a - b;
});
// if (arrNew.length % 2 !== 0) {
//   median = arrNew[Math.floor(arrNew.length / 2)];
// } else {
//   median = (arrNew[arrNew.length / 2] + arrNew[arrNew.length / 2 - 1]) / 2;
// }
var median =
  arrNew.length % 2 !== 0
    ? arrNew[Math.floor(arrNew.length / 2)]
    : (arrNew[arrNew.length / 2] + arrNew[arrNew.length / 2 - 1]) / 2;

console.log(`Mảng thứ nhất: [${nums1}]`);
console.log(`Mảng thứ hai: [${nums2}]`);
console.log(`Mảng hợp (có sắp xếp): [${arrNew}]`);
console.log(`Trung vị: ${median}`);
console.log(" ");

console.log(`Bài 3`);
var nums = [3, 4, -1, 1];
var maxValue = nums.reduce(function (prev, current) {
  if (prev > current) {
    return prev;
  }
  return current;
});
// Hàm kiểm tra giá trị
function checkValue(array) {
  for (var i = 1; i < maxValue; i++) {
    if (!array.includes(i)) {
      return i;
    }
  }
  return maxValue + 1;
}
console.log(`Mảng ban đầu: [${nums}]`);
console.log(
  `Số nguyên dương nhỏ nhất không có trong mảng: ${checkValue(nums)}`
);
