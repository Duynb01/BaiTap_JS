console.log(`Bài 1:`);

function sum(...args) {
  var total = 0;
  for (var value of args) {
    value = Number(value);
    if (Number.isNaN(value)) {
      return `Dữ liệu truyền vào không hợp lệ!`;
    }
    total += value;
  }
  return total;
}

console.log(`Tổng: ${sum(1, "2", 3, "4")}`);
console.log(` `);

console.log(`Bài 2:`);

Number.prototype.getCurrency = function (unit) {
  var _this = Number(this);
  if (Number.isNaN(_this)) {
    return `Error`;
  }
  if (unit === undefined) {
    return `${this.toLocaleString()} đ`;
  }
  return `${this.toLocaleString()} ${unit}`;
};
String.prototype.getCurrency = Number.prototype.getCurrency;

var price = "12000";
console.log(`Số đầu vào: ${price}`);
console.log(`Kết quả: ${price.getCurrency("đ")}`);
console.log(` `);

console.log(`Bài 3:`);

Array.prototype.push2 = function (value) {
  return (this[this.length] = value);
};

var arr = [];
arr.push2(2);
arr.push2(9);
arr.push2(5);
arr.push2([2, 5, 7]);
console.log(arr);
console.log(` `);

console.log(`Bài 4:`);

Array.prototype.filter2 = function (callback) {
  if (typeof callback !== "function") {
    return;
  }
  var arrNew = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      arrNew.push(this[i]);
    }
  }
  return arrNew;
};
var users = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = users.filter2(function (value) {
  if (value % 2 == 0) {
    return true;
  }
});
console.log(result);
console.log(` `);

console.log(`Bài 5:`);
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

function showScreen(array, children = 0) {
  var result = "";
  array.forEach(function (value) {
    var name = value["name"];
    if (children === 0) {
      result += `<option>${name}</option>`;
    } else if (children === 1) {
      result += `<option>--|${name}</option>`;
    } else if (children === 2) {
      result += `<option>--|--|${name}</option>`;
    }
    if (value["children"] !== undefined) {
      result += showScreen(value["children"], children + 1);
    }
  });
  return result;
}

document.write(`<select>
                  <option>Chọn chuyên mục</option>
                  ${showScreen(categories)}
                </select>`);
