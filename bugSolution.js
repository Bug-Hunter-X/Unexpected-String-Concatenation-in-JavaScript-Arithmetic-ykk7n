function foo(a, b) {
  //Explicit type coercion using parseInt
  return parseInt(a) + parseInt(b);
}

console.log(foo(1, '2')); // Output: 3

function bar(a, b) {
  //Handle potential errors when converting to numbers
  const numA = parseInt(a);
  const numB = parseInt(b);
  if (isNaN(numA) || isNaN(numB)) {
    return 'Error: Invalid input. Please provide numbers.';
  } else {
    return numA + numB;
  }
}
console.log(bar(1, '2')); //Output: 3
console.log(bar('abc', 2)); //Output: Error: Invalid input. Please provide numbers.