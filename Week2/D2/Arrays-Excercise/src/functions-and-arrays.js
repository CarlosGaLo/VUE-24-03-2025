function maxOfTwoNumbers(a, b) {
  // Operador ternario
  return a > b ? a : b;
  // Cómo se lee
  // ¿se cumple que a > b?
  // Antes de los dos puntos -> respuesta afirmativa.
  // Tras los dos puntos -> respuesta negativa.
}

function findLongestWord(words) {
  if (!words.length) return null;

  return words.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}

function sumNumbers(arr) {
  return arr.reduce((sum, elem) => {
    if (typeof elem === "number") return sum + elem;
  }, 0);
}

function sum(arr) {
  return arr.reduce((sum, elem) => {
    if (typeof elem === "number") return sum + elem;
    if (typeof elem === "string") return sum + elem.length;
    if (typeof elem === "boolean") return sum + (elem ? 1 : 0);
    throw new Error("Unsupported data type");
  }, 0);
}

function averageNumbers(numbers) {
  if (!numbers.length) return null;
  return sum(numbers) / numbers.length;
}

function averageWordLength(words) {
  if (!words.length) return null;
  return sum(words) / words.length;
}

function avg(arr) {
  if (!arr.length) return null;
  return sum(arr) / arr.length;
}

function uniquifyArray(arr) {
  if (!arr.length) return null;
  return [...new Set(arr)];
}

function doesWordExist(arr, word) {
  if (!arr.length) return null;
  return arr.includes(word);
}

function howManyTimes(arr, word) {
  return arr.filter((item) => item === word).length;
}

function calculateIndex(maxValue, currentIndex) {
  if (currentIndex < 0) currentIndex = -currentIndex;
  return currentIndex % maxValue;
}

function greatestProductOfDiagonals(matrix) {
  if (matrix.length < 4) return 0;
  let dimension = matrix.length;
  let diagonals = [];

  for (let i = 0; i < dimension; i++) {
    let counter = 1;
    let matrixIndexI = i;

    for (let j = 0; j < dimension; j++) {
      counter *=
        matrix[calculateIndex(dimension, matrixIndexI)][
          calculateIndex(dimension, j)
        ];
      matrixIndexI++;
    }
    diagonals.push(counter);
  }

  for (let i = dimension - 1; i <= 0; i--) {
    let counter = 1;
    let matrixIndexI = i;

    for (let j = dimension - 1; j <= 0; j--) {
      counter *=
        matrix[calculateIndex(dimension, matrixIndexI)][
          calculateIndex(dimension, j)
        ];
      matrixIndexI++;
    }
    diagonals.push(counter);
  }

  return Math.max(...diagonals);
}
