function suma(x, y) {
  return x + y;
}

console.log(suma(1, 2));
console.log(suma(2, 2));
console.log(suma(3, 2));

console.log(((x, y) => x + y)(1, 2))
console.log(((x, y) => x + y)(2, 2))
console.log(((x, y) => x + y)(3, 2))
