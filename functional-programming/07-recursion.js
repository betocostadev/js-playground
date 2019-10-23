/* Function Programming
07 - Currying
Recommended by the Full Stack Open 2019
MPJ | Fun Fun Function Video:
https://www.youtube.com/watch?v=k7-N8R0-KY4
*/

/* Intro by MPJ
Recursion is when a function calls itself until it doesn't.
In a way it is similar like a for loop, it will run it's code until certain condition is met, then
it will stop.
Recursion is not that hard, it appears to be hard because usually all the explanations on recursion
are based on Fibonacci numbers */

console.log(`=== Functional Programming in JavaScript ===`)
console.log(`Part 7 - Currying
`)
console.log(`Example 1: Countdown function using recursion`)

const countdown = (num) => {
  if (num === 0) return // stop the recursion
  console.log(num)
  return countdown(num - 1) // Recursion
}

countdown(5)

console.log(`Example 2: Make Tree categories: `)
const categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' }
 ];

const makeTree = (cat, parent) => {
  let node = {}
  cat
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(cat, c.id))
  return node
}

console.log(
  JSON.stringify(
    makeTree(categories, null), null, 2)
  )
