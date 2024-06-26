console.log(`Bài 1:`);

function sum(...args) {
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      return `Dữ liệu truyền vào không hợp lệ!`;
    }
    total += args[i];
  }
  return total;
}
console.log(`Tổng: ${sum(1, 2, 3, 4)}`);
console.log(` `);

console.log(`Bài 2:`);

Number.prototype.getCurrency = function (unit) {
  var value = "";
  var _this = this.toString();
  if (_this.length < 4) {
    return `${this} ${unit}`;
  } else {
    while (_this.length > 3) {
      value = `,` + _this.trim().slice(-3) + value;
      _this = _this.slice(0, -3);
    }
    _this = _this + value;
    return `${_this} ${unit}`;
  }
};
var price = 12000000;
console.log(`Số đầu vào: ${price}`);
console.log(`Kết quả: ${price.getCurrency("đ")}`);
console.log(` `);

console.log(`Bài 3`);
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

// // C1
// Xử lý thêm children vào các Object
function addItem(array) {
  array.forEach(function (object1) {
    object1["children"] = [];
  });
  return array;
}

// Xử lý thêm các Object children vào Object parent
function addChild(array) {
  array.forEach(function (object1) {
    array.forEach(function (object2) {
      if (object1["id"] === object2["parent"]) {
        object1["children"].push(object2);
      }
    });
  });
  return array;
}

// Xử lý lấy ra Object parent
function getParent(array) {
  var newArr = [];
  array.forEach(function (object) {
    if (object["parent"] === 0) {
      newArr.push(object);
    }
  });
  return newArr;
}

// Xử lý xóa bỏ children rỗng và parent
function deleteItem(array) {
  array.forEach(function (object) {
    delete object["parent"];
    if (Array.isArray(object["children"]) && object["children"].length === 0) {
      delete object["children"];
    }
    if (Array.isArray(object["children"])) {
      deleteItem(object["children"]);
    }
  });
  return array;
}

// Chạy
function processArr(array) {
  return deleteItem(getParent(addChild(addItem(array))));
}

console.log(`Mảng sau khi sử lý:`);
console.log(processArr(categories));
console.log(` `);

// C2
// // Xử lý thêm children vào các Object có giá trị con
// categories.forEach(function (object1) {
//     categories.forEach(function (object2) {
//       if (object1["id"] === object2["parent"]) {
//         object1["children"] = [];
//       }
//     });
//     if (object1["parent"] === 0) {
//       object1["children"] = [];
//       newArr.push(object1);
//     }
//   });

//   // Xử lý thêm childrent cấp 1
//   newArr.forEach(function (object) {
//     categories.forEach(function (value) {
//       if (object["id"] === value["parent"]) {
//         object["children"].push(value);
//       }
//     });
//   });
//   // Xử lý thêm childrent cấp 2
//   newArr.forEach(function (object) {
//     if (object["children"].length !== 0) {
//       object["children"].forEach(function (child) {
//         categories.forEach(function (value) {
//           if (child["id"] === value["parent"]) {
//             child["children"].push(value);
//           }
//         });
//       });
//     }
//   });

//   // Xử lý xóa bỏ children rỗng và parent
//   function deleteParent(array) {
//     array.forEach(function (object) {
//       delete object["parent"];
//       if (Array.isArray(object["children"]) && object["children"].length === 0) {
//         delete object["children"];
//       }
//       if (Array.isArray(object["children"])) {
//         deleteParent(object["children"]);
//       }
//     });
//     return array;
//   }

//   newArr = deleteParent(newArr);
//   console.log(`Mảng sau khi sử lý:`);
//   console.log(newArr);
//   console.log(` `);

console.log(`Bài 4`);
Array.prototype.reduce2 = function (callback, initialValue) {
  var prev, current, array;
  if (typeof callback !== "function") {
    return;
  }
  if (initialValue === undefined) {
    prev = this[0];
  } else {
    prev = initialValue;
  }
  if (initialValue === undefined) {
    for (var i = 0; i < this.length - 1; i++) {
      var index = i;
      current = this[i + 1];
      prev = callback(prev, current, index, (array = this));
    }
  } else {
    for (var i = 0; i < this.length; i++) {
      var index = i;
      current = this[i];
      prev = callback(prev, current, index, (array = this));
    }
  }
  return (prev = current), prev;
};
var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = ar.reduce2(function (prev, cur) {
  console.log(prev);
  return cur;
}, 0);
console.log(result);
