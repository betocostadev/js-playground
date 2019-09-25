// Based on the Full Stack Open 2019 Course by Helsinki University
// A function to get the average.

let good = 6;
let neutral = 2;
let bad = 1;

const average = () => {
  let total = 0;
  total = (good * 1 + neutral * 0 + bad * (-1)) / (good + neutral + bad);
  return total.toFixed(2);
}

const positive = () => {
  let total = 0;
  total = (good / (good + neutral + bad) * 100).toFixed(2);
  return `Positive: ${total}%`
}

console.log(average());
console.log(positive());