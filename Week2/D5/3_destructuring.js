const numbers = [1, 2, 3, 4, 5];

// Extraer valores individuales del array
const [first, second, , fourth] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Extraer propiedades individuales del objeto
const { name, age, city } = person;

console.log(name); // Output: 'John'
console.log(age); // Output: 30
console.log(city); // Output: 'New York'


/* La forma tradicional de haberlo hecho, sería: */ 
const numbersT = [1, 2, 3, 4, 5];

// Acceder a valores individuales del array
const firstT = numbers[0];
const secondT = numbers[1];
const fourthT = numbers[3];

console.log(firstT);   // Output: 1
console.log(secondT);  // Output: 2
console.log(fourthT);  // Output: 4

// Acceder a propiedades individuales del objeto
const nameT = person.name;
const ageT = person.age;
const cityT = person.city;

console.log(nameT);  // Output: 'John'
console.log(ageT);   // Output: 30
console.log(cityT);  // Output: 'New York'