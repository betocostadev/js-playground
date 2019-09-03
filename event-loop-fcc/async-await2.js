const math = async (a, b) => {
  const sum = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(a + b) }, 1000);
  });
  const mult = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(a * b) }, 500);
  });
  const sumResult = await sum;
  const multResult = await mult;
  const output = console.log(
  `  The result of sum is: ${await sumResult}.
  The result of mult is: ${await multResult}.`);

  return output
}
math(5, 20)
// Output
// The result of sum is: 25.
// The result of mult is: 100.