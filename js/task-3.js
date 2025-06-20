function filterArray(numbers, value) {
  const largerNumbers = [];

  for (let i = 0; i < numbers.length; i = i + 1) {
    if (numbers[i] > value) {
      largerNumbers.push(numbers[i]);
    }
  }
  return largerNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
