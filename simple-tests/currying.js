// CURRYING
// Translating evaluation of a function that takes multiple arguments into a sequencial function.
// A function that takes multiple parameters into a function that takes one paramenter at a time.
const multiply = (a, b) => a * b;
console.log(multiply(10, 5));

// Currying:
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(10)(5));

// Usage - Re-use a function with some predefined parameters...
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(5));