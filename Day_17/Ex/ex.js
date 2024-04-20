// Bài 1
console.log("Bài 1:");
var a = -7,
  b = 5;
console.log("Số thứ 1:" + a);
console.log("Số thứ 2:" + b);
console.log("Hoán vị 2 số: ");
a = a + b;
b = a - b;
a = a - b;
console.log("Số thứ 1:" + a);
console.log("Số thứ 2:" + b);
console.log(" ");

// Bài 2
console.log("Bài 2:");
console.log("Tính biểu thức: S = 10 + 20 + 5^10 / 2");
var s;
s = 10 + 20 + (5 ^ 10) / 2;
console.log("S = " + s);
console.log(" ");

// Bài 3
console.log("Bài 3:");
var x = 6,
  y = 162,
  z = 76;
console.log("Số thứ 1: " + x);
console.log("Số thứ 2: " + y);
console.log("Số thứ 3: " + z);
var max = x > y ? (x > z ? x : z) : y > z ? y : z;
console.log("Số lớn nhất là: " + max);
console.log(" ");

// Bài 4
console.log("Bài 4:");
var a = -6,
  b = -9;
console.log("Số thứ 1: " + a);
console.log("Số thứ 2: " + b);
if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
  console.log("--> Cùng dấu.");
} else {
  console.log("--> Trái dấu");
}
console.log(" ");

// Bài 5
console.log("Bài 5:");
var x = 646,
  y = 162,
  z = 69,
  tmp;
var array = [x, y, z];
for (var i = 0; i < array.length; i++) {
  console.log(" Số thứ " + (i + 1) + ": " + array[i]);
}
for (var i = 0; i < array.length; i++) {
  for (var j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
  }
}
console.log("Sắp xếp tăng dần: " + array);
