// G2i AI generated code base on the following prompt:

// "i need code that takes in a number and returns the opposite of that numbe so wirttan backwards"

// Task, select the best answer and decide why it was the best answer.

// Response1.js - Original
// function reverseNumber(number) {
//   const numString = String(number)

//   const reversedString = numString.reverse() // Error because the string was not changed to an array first

//   const reversedNumber = parseInt(reversedString, 10)
//   return reversedNumber
// }

// Response1.js - Fixed
function reverseNumber(number) {
  // Change the number to a string and split the chars in an array
  const numString = String(number).split('')

  // Reverse the array
  const reversedString = numString.reverse()

  // Join the chars in the array and change them back to an integer
  const reversedNumber = parseInt(reversedString.join(''), 10)
  return reversedNumber
}
// // Example usage:
console.log(reverseNumber(1223)) // Output: 3221
console.log(reverseNumber(987654321)) // Output: 123456789

// Response2.js
function oppositeNumber(number) {
  return -number
}

// // Example usage:
console.log(oppositeNumber(5)) // Output: -5
console.log(oppositeNumber(-7)) // Output: 7

// Answer:
// Based on the user prompt, Response1.js is the best choice.
// Response2 gives the opposite value of the number, like 7 becomes 7, which is correct
// but at the end of the prompt the user states it wants the number backwards, that's
// why Response1 is better.
