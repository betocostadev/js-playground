// Factorial
// Factorial 5 = 5x4x3x2x1 = 120

const factorial = (number) => {
  if (number === 0) {
    return 1;
  }
  return factorial(number - 1) * number;
};

// eslint-disable-next-line no-console
console.log(factorial(5));
