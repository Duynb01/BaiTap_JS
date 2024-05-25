console.log(`Bài 2:`);

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

var arrTMP = customers.slice(0);
function createCustomers(customers) {
  customers.forEach(function (value) {
    value.shortName = `${value.name.split(" ")[0]} ${
      value.name.split(" ")[value.name.split(" ").length - 1]
    }`;
  });
  customers.sort(function (a, b) {
    return a.age - b.age;
  });
  return customers;
}

function customer(name, age, address) {
  return {
    name,
    age,
    address,
  };
}

const result = createCustomers(arrTMP);
console.log("Sau khi xử lý:");
console.log(result);
console.log(" ");

console.log(`Bài 3:`);

const data = [];
function handleRegister(name, password, email) {
  if (name !== "" && password !== "" && email !== "") {
    var newItem = {
      name: `${name}`,
      password: `${password}`,
      email: `${email}`,
      role: `user`,
    };
    data.push(newItem);
  } else {
    console.log(`Error!`);
    return;
  }
  return data;
}

function handleLogin(email, password) {
  var againData = data.slice(0);
  var check = againData.map(function (value) {
    if (value.email !== email || value.password !== password) {
      return "Error";
    }
    return againData[againData.indexOf(value)];
  });
}
var dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
// if (!dataLogin) {
//   console.log(`Error`);
// } else {
//   data.forEach(function (value) {});
// }
console.log(data);
console.log(dataLogin);
