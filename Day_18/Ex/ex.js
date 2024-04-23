// Bài 1
console.log("Bài 1:");
var price = 0;
var km = 8;
if (km <= 1) {
  price += 15000;
} else if (km > 1 && km <= 5) {
  price = (km - 1) * 13500 + 15000;
} else if (km > 5) {
  price = (km - 5) * 11000 + 4 * 13500 + 15000;
} else if (km > 120) {
  price = (((km - 5) * 11000 + 4 * 13500 + 15000) * 10) / 100;
}
console.log(`Tiền taxi đi ${km}km là: ${price}vnđ`);
console.log(" ");

// Bài 2
console.log("Bài 2:");
var price = 0;
var kWh = 359;
if (kWh >= 0 && kWh <= 50) {
  price += kWh * 1678;
} else if (kWh >= 51 && kWh <= 100) {
  price = (kWh - 50) * 1734 + 50 * 1678;
} else if (kWh >= 101 && kWh <= 200) {
  price = (kWh - 100) * 2014 + 50 * 1734 + 50 * 1678;
} else if (kWh >= 201 && kWh <= 300) {
  price = (kWh - 200) * 2536 + 100 * 2014 + 50 * 1734 + 50 * 1678;
} else if (kWh >= 301 && kWh <= 400) {
  price = (kWh - 300) * 2834 + 100 * 2536 + 100 * 2014 + 50 * 1734 + 50 * 1678;
} else {
  price =
    (kWh - 400) * 2927 +
    100 * 2834 +
    100 * 2536 +
    100 * 2014 +
    50 * 1734 +
    50 * 1678;
}
console.log(`Số tiền phải trả khi tiêu thụ ${kWh}kWh là: ${price}vnđ`);
console.log(" ");

// Bài 3
console.log("Bài 3:");
var n = 7,
  sum = 0;
for (var i = 1; i <= n; i++) {
  sum += i * (i + 1);
}
console.log(`Tính biểu thức sau: S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)`);
console.log(`n = ${n}`);
console.log(`S = ${sum}`);
console.log(" ");

// Bài 4
console.log("Bài 4:");
var n = 4;
var check = true;
for (var i = 2; i < n; i++) {
  if (n > 1 && n % i !== 0) {
    check === true;
  } else {
    check = false;
  }
}
console.log(`n = ${n}`);
if (check) {
  console.log(`Số ${n} là số nguyên tố.`);
} else {
  console.log(`Số ${n} không phải là số nguyên tố.`);
}
console.log(" ");
// // Bài 5
// console.log("Bài 5:");
// var N = 5;
// for (var i = 1; i <= N; i++) {
//   for (var j = 1; j <= i; j++) {
//     console.log(j);
//   }
// }
document.write(`<h2>Bài 6</h2>`);
for (var row = 1; row < 9; row++) {
  for (var col = 1; col < 9; col++) {
    if (row % 2 !== 0) {
      if (col % 2 !== 0) {
        document.write(
          `<span style = "width: 50px; height: 50px; background-color: black; display: inline-block;"></span>`
        );
      } else {
        document.write(
          `<span style = "width: 50px; height: 50px; background-color: #fff; display: inline-block;"></span>`
        );
      }
    } else {
      if (col % 2 !== 0) {
        document.write(
          `<span style = "width: 50px; height: 50px; background-color: #fff; display: inline-block;"></span>`
        );
      } else {
        document.write(
          `<span style = "width: 50px; height: 50px; background-color: black; display: inline-block;"></span>`
        );
      }
    }
  }
  document.write(`<div></div>`);
}
