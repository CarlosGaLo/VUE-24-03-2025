////CRUD -> Create Read Update Delete
const numbers = [1, 2, 3, 4, 5];

let var0 = numbers[0];
let var1 = numbers[1];
let var2 = numbers[2];
let var3 = numbers[3];
let var4 = numbers[4];

console.log(var0);
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);

const [first, second, , fourth, fifth, sixth = 6] = numbers;

console.log(first);
console.log(second);
// console.log(third);
console.log(fourth);
console.log(fifth);
console.log(sixth);

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const varName = person.name;
const varAge = person.age;
const varCity = person.city;

console.log(varName);
console.log(varAge);
console.log(varCity);

const { name, age, dni = "0000", city = "Barcelona" } = person;

console.log(name);
console.log(age);
console.log(city);
console.log(dni);

// Spread operator
const array1 = [1, 2, 3];
const array2 = ["pollo", "vaca", "ternera"];

const spreadOperator = [...array1, ...array2];
console.log(spreadOperator);
