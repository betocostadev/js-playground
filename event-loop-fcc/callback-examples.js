// The sum function. That is, a function that can be called back
const sum = (a,b) => console.log(a + b);
// The subtract function. That is, a function that can be called back
const sub = (a, b) => console.log(a - b);
// The callback function, it expects two numbers and the callback function
// to know what to do with the numbers
const math = (a, b, callback) => {
  // This is where the callback function will be called
  callback(a, b);
};

math(60, 40, sum); // 100
math(60, 40, sub); // 20
