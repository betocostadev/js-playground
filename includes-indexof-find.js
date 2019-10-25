/* Includes, indexOf and find methods.
MDN INCLUDES https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes */

console.log(`====== Array includes: ======
`)
const arrayOne = [1, 2, 3, 4, 11, 16, 11, 4, 5, 6, 7]
const hasThree = arrayOne.includes(3)
console.log('Does arrayOne have a 3 ? ', hasThree)

// Use a second argument as the index to start
const threeAfterFour = arrayOne.includes(3, 3)
console.log('After the 3, do we have another 3 ?', threeAfterFour)

// MDN indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

console.log(`====== Array indexOf: ======
`)
const indexOf4 = arrayOne.indexOf(4)
console.log(`Index of the number 4 in the array is: `, indexOf4)

const seekAndDestroy = (arr, element) => {
  if (arr.includes(element)) {
    console.log(`Element ${element} found, it's index is: ${arr.indexOf(element)}`)
  } else {
    console.log(`Element not found!`)
  }
}
console.log(`=== Seek and destroy ===`)
seekAndDestroy(arrayOne, 11)

// MDN find: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// Will return the first element in the array that matches the function parameters.
console.log(`
=== Array find ===
`)
const biggerThanTen = arrayOne.find(el => el > 10)
console.log(biggerThanTen)

console.log(`====== How many times an element appears in the array? ======`)

const arrayTwo = [ 1, 1, 2, 3, 4, 5, 7, 8, 9, 5, 5, 3]

console.log('index of 2: ', arrayTwo.indexOf(2))