// Bài 1
console.log(`Bài 1:`);
var intArr = [3, 4, 6, 2, 6, 1, 11, 9, 19, 9, 11, 3];
var max = intArr[0],
  min = intArr[0];
var indexMax, indexMin;
for (var i = 1; i < intArr.length; i++) {
  if (max < intArr[i]) {
    max = intArr[i];
    indexMax = i;
  }
  if (min > intArr[i]) {
    min = intArr[i];
    indexMin = i;
  }
}
console.log(`Mảng số nguyên: intArr = [${intArr}]`);
console.log(
  ` Số lớn nhất = ${intArr[indexMax]}, tại vị trí index = ${indexMax}`
);
console.log(
  ` Số nhỏ nhất = ${intArr[indexMin]}, tại vị trí index = ${indexMin}`
);
console.log(" ");

// Bài 2
console.log(`Bài 2:`);
function checkPrimeNumber(a) {
  if (a < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}
var newArr2 = [];
var sum = 0,
  mean;
for (var i = 0; i < intArr.length; i++) {
  if (checkPrimeNumber(intArr[i])) {
    newArr2[newArr2.length] = intArr[i];
    sum += intArr[i];
  }
}
if (newArr2.length > 0) {
  mean = sum / newArr2.length;
  console.log(`Mảng số nguyên: intArr = [${intArr}]`);
  console.log(`Mảng chứa số nguyên tố: newArr2 = [${newArr2}]`);
  console.log(` Trung bình các số nguyên tố: ${mean}`);
} else {
  console.log(`Không có số nguyên tố`);
}
console.log(" ");

// Bài 3
console.log(`Bài 3:`);
var newArr3 = [];
for (var i = 0; i < intArr.length; i++) {
  var check = true;
  for (var j = i + 1; j < intArr.length + 1; j++) {
    if (intArr[i] == intArr[j]) {
      check = false;
      break;
    }
  }
  if (check) {
    newArr3[newArr3.length] = intArr[i];
  }
}
console.log(`Mảng số nguyên: intArr = [${intArr}]`);
console.log(`Mảng sau khi lọc: newArr3 = [${newArr3}]`);
console.log(" ");

// Bài 4
console.log(`Bài 4:`);
var element = 8;
var newArr4 = [];
for (var i = 0; i < intArr.length; i++) {
  for (var j = i + 1; j < intArr.length; j++) {
    if (intArr[i] > intArr[j]) {
      tmp = intArr[i];
      intArr[i] = intArr[j];
      intArr[j] = tmp;
    }
  }
}

if (intArr[0] > element) {
  newArr4[0] = element;
  for (const value of intArr) {
    newArr4[newArr4.length] = value;
  }
} else if (intArr[intArr.length - 1] < element) {
  intArr[intArr.length] = element;
  newArr4 = intArr;
} else {
  for (var i = 0; i < intArr.length; i++) {
    if (intArr[i] <= element && intArr[i + 1] > element) {
      for (var j = 0; j <= i; j++) {
        newArr4[newArr4.length] = intArr[j];
      }
      newArr4[newArr4.length] = element;
      for (var j = i + 1; j < intArr.length; j++) {
        newArr4[newArr4.length] = intArr[j];
      }
    }
  }
}
console.log(`Mảng số nguyên sau khi sắp xếp: intArr = [${intArr}]`);
console.log(` Số muốn thêm: ${element}`);
console.log(`Mảng sau khi thêm: newArr4 = [${newArr4}]`);
