/* Function Programming
03 - Reduce
Recommended by the Full Stack Open 2019
MPJ | Fun Fun Function Video:
https://www.youtube.com/watch?v=Wl98eZpkp-c

Advanced Reduce:
https://www.youtube.com/watch?v=1DMolJ2FrNY

MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/

console.log(`=== Functional Programming in JavaScript ===`)
console.log(`Part 3 - Higher Order Functions: Reduce`)

// Reduce is like a multi-tool of list transformations

const order = [
  { amount: 450 },
  { amount: 220 },
  { amount: 300 },
  { amount: 800 },
  { amount: 130 },
]

console.log(order)
console.log(`Let's sum all the orders using reduce:`)

// Using a for loop
/* let totalAmount = 0
for (let i = 0; i < order.length; i++) {
  totalAmount += order[i].amount
}
console.log(totalAmount) */

// Using reduce:
// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

const totalAmount = order.reduce((accumulator, currentValue) => {
  // console.log('Hello', accumulator, currentValue)
  return accumulator + currentValue.amount
}, 0)

const totalAmountV2 = order.reduce((acc, cur) => acc + cur.amount, 0)

console.log(totalAmount)
// console.log(totalAmountV2)

console.log(`
Advanced .reduce()
`)