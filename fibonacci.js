/* eslint-disable no-console */
// Fibonacci test

const fibo = 12;

const getFibo = (num) => {
  const fibonacci = [];
  let n1 = 0;
  let n2 = 0;
  let result = 0;
  if (num === 0) {
    fibonacci.push(0);
  } else if (num === 1) {
    fibonacci.push(0);
    fibonacci.push(1);
  } else {
    fibonacci[0] = 0;
    fibonacci.push(1);
    for (let i = 1; i < num; i += 1) {
      n1 = fibonacci[i - 1];
      n2 = fibonacci[i];
      result = n2 + n1;
      fibonacci.push(result);
    }
  }
  return `Fibonacci sequence of ${num} is ${fibonacci}`;
};

console.log(getFibo(fibo));

/* for (let i = 0; i < num; i += 1) {
  if (num[i] === 0) {
    fibonacci.push(num[i]);
  } else if (num[i] === 1) {
    fibonacci.push(num[i]);
  } else {
    next = num[i - 1] + num[i];
    fibonacci.push(next);
  }
*/
