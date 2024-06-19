var cart = document.querySelector(".cart");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector("input2");
var input3 = document.querySelector("input3");
var input4 = document.querySelector("input4");
var btn = document.querySelector(".btn");

var name1 = document.querySelector(".name1");
var name2 = document.querySelector(".name2");
var name3 = document.querySelector(".name3");
var name4 = document.querySelector(".name4");

var price1 = document.querySelector(".price1");
var price2 = document.querySelector(".price2");
var price3 = document.querySelector(".price3");
var price4 = document.querySelector(".price4");

console.log(price1);
var stt = 0;

if (cart.children.length === 0) {
  var p = document.createElement("p");
  p.innerText = "Giỏ hàng không có sản phẩm";
  cart.append(p);
}
console.log(input1.value);
btn.addEventListener("click", function () {
  p.remove();
  var tableCheck = cart.querySelector("table");
  if (!tableCheck) {
    var table = document.createElement("table");
    table.border = "1";
    table.style.width = "100%";
    table.cellSpacing = "0";
    table.cellPadding = "4";
    cart.append(table);

    // Dòng tiêu đề
    var tr = document.createElement("tr");
    table.append(tr);

    var th = document.createElement("th");
    th.style.width = "5%";
    th.innerText = "STT";
    tr.append(th);

    var th = document.createElement("th");
    th.style.width = "45%";
    th.innerText = "Tên sản phẩm";
    tr.append(th);

    var th = document.createElement("th");
    th.style.width = "15%";
    th.innerText = "Giá";
    tr.append(th);

    var th = document.createElement("th");
    th.style.width = "15%";
    th.innerText = "Số lượng";
    tr.append(th);

    var th = document.createElement("th");
    th.style.width = "15%";
    th.innerText = "Thành tiền";
    tr.append(th);

    var th = document.createElement("th");
    th.style.width = "5%";
    th.innerText = "Xóa";
    tr.append(th);
    // End title

    var tr = document.createElement("tr");
    table.append(tr);

    var td = document.createElement("td");
    td.innerText = ++stt;
    tr.append(td);

    var td = document.createElement("td");
    td.innerText = name1.innerText;
    tr.append(td);

    var td = document.createElement("td");
    td.innerText = price1.innerText;
    tr.append(td);

    var td = document.createElement("td");
    var input = document.createElement("input");
    input.type = "number";
    input.value = input1.value;
    td.append(input);
    tr.append(td);

    var td = document.createElement("td");
    td.innerText = +input1.value * +price1.innerText;
    tr.append(td);

    var td = document.createElement("td");
    var btn = document.createElement("button");
    btn.innerText = "Xóa";
    td.append(btn);
    tr.append(td);

    // Dòng cuối
    var tr = document.createElement("tr");
    table.append(tr);

    var th = document.createElement("th");
    th.colSpan = "3";
    th.innerText = "Tổng";
    tr.append(th);

    var td = document.createElement("td");
    tr.append(td);

    var td = document.createElement("td");
    tr.append(td);

    var td = document.createElement("td");
    tr.append(td);
  }
});
console.dir(input1);
