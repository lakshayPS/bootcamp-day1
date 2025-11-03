// task1:
// function add(a, b) {
//     return a + b;
// }

let add = (a, b) => {
  return a + b;
};
console.log("task1 result: ", add(2, 4));

// task2
function f(name, message = "Welcome!") {
  console.log(name, message);
}

f("lakshay");

// task3
function formatString(name, age) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
formatString("lakshay", 21);

// task4
function objDes() {
  const person = {
    name: "Alice",
    age: 25,
    address: {
      city: "New York",
      country: "NY",
    },
  };

  const { name, address } = person;
  const { city } = address;

  console.log(`${name} lives in ${city}.`);
}
objDes();

// task5
function sumAll(...arr) {
  const sum = arr.reduce((acc, curr) => acc + curr);

  console.log(sum);
}
sumAll(1, 2, 4, 5, 3);

// task6
function filterEvens(arr) {
  const res = arr.filter((num) => num % 2 == 0);
  console.log(res);
}
filterEvens([1, 2, 3, 4, 5, 6]);

// task7
function doubleValues(arr) {
  const res = arr.map((num) => num * 2);
  console.log(`original array: ${arr}, double array is : ${res}`);
}
doubleValues([1, 2, 3]);

// task8
function findMax(arr) {
  let [max, ...rem] = arr;
  for (let val of rem) {
    max = Math.max(max, val);
  }
  console.log(max);
}

findMax([3, 5, 7, 2, 8]);

// task9
function func() {
  const data = [
    {
      name: "Bob",
      age: 24,
    },
    {
      name: "Alice",
      age: 21,
    },
  ];

  let [obj1, obj2] = data;
  const { age } = obj1;
  const { name } = obj2;

  console.log(`${name}'s age is ${age}.`);
}
func();

// task10
function dataManipulation(arr) {
  const [obj] = arr;
  const {
    id,
    title,
    rating: { rate, count },
  } = obj;

  console.log({ id, title, rate, count });
}
dataManipulation([
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
]);

// task11
const fun = (name = "abc") => {
  if (name) {
    console.log("if", name);
  } else {
    console.log("else", name);
  }
};

fun("");

// task12
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  const res = typeof obj === "object" ? {} : [];

  for (let key in obj) {
    res[key] = deepClone(obj[key]);
  }

  return res;
}
const obj = { a: 1, b: { c: 2 } };
const res = deepClone(obj);
console.log(res);

// task13

function flattenArray(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (Array.isArray(val)) {
      flattenArray(val, result);
    } else {
      result.push(val);
    }
  }
  return result;
}
const ans = flattenArray([1, [2, [3, [4, 5]]]]);
console.log("ans", ans);
