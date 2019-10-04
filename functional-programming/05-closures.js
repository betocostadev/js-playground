/* Function Programming
04 - Closures
Recommended by the Full Stack Open 2019
MPJ | Fun Fun Function Video:
https://www.youtube.com/watch?v=CQqwU2Ixu-U
*/

console.log(`=== Functional Programming in JavaScript ===`)
console.log(`Part 5 - Closures
`)

console.log(`Example 2: Accessing a variable outside the function scope:`)
// Functions in JavaScript also have the access to variables declared outside of their function body.
// Simple closure example:
let batman = 'Bruce Wayne'
const greetBatman = () => {
  console.log(`Hello, ${batman}`)
}
batman = 'Batman'
greetBatman()
/* batman variable is outside the greetBatman scope, but the function can access it.
Its valuable to notice that we are not passing batman as an argument and it still works.
The variable is accessed by the function when it is called, that's why it displays Batman instead of
Bruce Wayne. */

console.log(`Example 2: Numbers to the 4 power:`)

const fourth = (num) => {
  num *= num
  const final = () => {
    num *= num
  }
  final()
  return num
}

console.log(fourth(2)) // 16 | 2 x 2 = 4 ... final 4 x 4 = 16
