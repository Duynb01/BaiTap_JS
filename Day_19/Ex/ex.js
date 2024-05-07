// Bài 1;
console.log("Bài 1:");
function Fibonacci(k) {
  if (k > 0 && k % 1 === 0) {
    if (k === 1 || k === 2) {
      return 1;
    } else {
      return Fibonacci(k - 1) + Fibonacci(k - 2);
    }
  } else {
    console.log(`Nhập sai!`);
  }
}
function print(n) {
  if (h > n) {
    return;
  } else {
    a.push(Fibonacci(h));
    h++;
    print(n);
  }
}
var x,
  h = 1,
  n = 6,
  a = [];
console.log(`N = ${n}`);
print(n);
console.log(`Dãy Fibonacci gồm ${n} số đầu: ` + a);
console.log(` `);

// Bài 2
console.log(`Bài 2:`);
var N = 218284,
  tmp,
  string = "";
function swap(N) {
  if (N >= 0 && N % 1 === 0) {
    do {
      tmp = N % 10;
      string += tmp;
      N = Math.floor(N / 10);
    } while (N > 0);
  } else {
    console.log(`Nhập sai!`);
  }
  return string;
}
console.log(`Số: ${N}`);
console.log(`Đảo ngược thành: ${swap(N)}`);
console.log(` `);

// Bài 3
console.log(`Bài 3:`);
var tmp,
  out,
  n = 1424;
var string = "";
string += n;
//
function number(tmp) {
  switch (tmp) {
    case 0:
      out = "Không";
      break;
    case 1:
      out = "Một";
      break;
    case 2:
      out = "Hai";
      break;
    case 3:
      out = "Ba";
      break;
    case 4:
      out = "Bốn";
      break;
    case 5:
      out = "Năm";
      break;
    case 6:
      out = "Sáu";
      break;
    case 7:
      out = "Bảy";
      break;
    case 8:
      out = "Tám";
      break;
    case 9:
      out = "Chín";
      break;
  }
  return out;
}
//
function convertString(n) {
  var n1, n2, n3, n4;
  if (n > 0 && n < 10000 && n % 1 === 0 && n !== " ") {
    // Một chữ số
    if (string.length === 1) {
      console.log(number(n));
    }
    // Hai Chữ Số
    else if (string.length === 2) {
      n1 = n % 10;
      n2 = Math.floor(n / 10);
      if (string[0] == 1) {
        if (string[1] == 0) {
          console.log(`Mười`);
        } else {
          console.log(`Mười ${number(n1)}`);
        }
      } else {
        if (string[1] == 0) {
          console.log(`${number(n2)} Mươi`);
        } else {
          console.log(`${number(n2)} Mươi ${number(n1)}`);
        }
      }
    }
    // Ba Chữ Số
    else if (string.length === 3) {
      n1 = n % 10;
      n2 = Math.floor(n / 10);
      n2 = n2 % 10;
      n3 = Math.floor(n / 100);
      if (string[1] == 0) {
        if (string[2] == 0) {
          console.log(`${number(n3)} Trăm`);
        } else {
          console.log(`${number(n3)} Trăm Linh ${number(n1)}`);
        }
      } else if (string[1] == 1) {
        if (string[2] == 0) {
          console.log(`${number(n3)} Trăm Mười`);
        } else {
          console.log(`${number(n3)} Trăm Mười ${number(n1)}`);
        }
      } else {
        if (string[2] == 0) {
          console.log(`${number(n3)} Trăm ${number(n2)} Mươi`);
        } else {
          console.log(`${number(n3)} Trăm ${number(n2)} Mươi ${number(n1)}`);
        }
      }
    }
    // Bốn Chữ Số
    else if (string.length === 4) {
      n1 = n % 10;
      n2 = Math.floor(n / 10);
      n2 = n2 % 10;
      n3 = Math.floor(n / 100);
      n3 = n3 % 10;
      n4 = Math.floor(n / 1000);
      if (string[1] == 0) {
        if (string[2] == 0) {
          if (string[3] == 0) {
            console.log(`${number(n4)} Nghìn`);
          } else {
            console.log(`${number(n4)} Nghìn Không Trăm Linh ${number(n1)}`);
          }
        } else if (string[2] == 1) {
          if (string[3] == 0) {
            console.log(`${number(n4)} Nghìn Không Trăm Mười`);
          } else {
            console.log(`${number(n4)} Nghìn Không Trăm Mười ${number(n1)}`);
          }
        } else {
          if (string[3] == 0) {
            console.log(`${number(n4)} Nghìn Không Trăm ${number(n2)} Mươi`);
          } else {
            console.log(
              `${number(n4)} Nghìn Không Trăm ${number(n2)} Mươi ${number(n1)}`
            );
          }
        }
      } else {
        if (string[2] == 0) {
          if (string[3] == 0) {
            console.log(`${number(n4)} Nghìn ${number(n3)} Trăm`);
          } else {
            console.log(
              `${number(n4)} Nghìn ${number(n3)} Trăm Linh ${number(n1)}`
            );
          }
        } else if (string[2] == 1) {
          if (string[3] == 0) {
            console.log(`${number(n4)} Nghìn ${number(n3)} Trăm Mười`);
          } else {
            console.log(
              `${number(n4)} Nghìn ${number(n3)} Trăm Mười ${number(n1)}`
            );
          }
        } else {
          if (string[3] == 0) {
            console.log(
              `${number(n4)} Nghìn ${number(n3)} Trăm ${number(n2)} Mươi`
            );
          } else {
            console.log(
              `${number(n4)} Nghìn ${number(n3)} Trăm ${number(
                n2
              )} Mươi ${number(n1)}`
            );
          }
        }
      }
    }
  } else {
    console.log(`Nhập sai!`);
  }
}
console.log(`Số N = ${n}`);
convertString(n);
