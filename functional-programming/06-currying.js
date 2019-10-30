/* Function Programming
06 - Currying
Recommended by the Full Stack Open 2019
MPJ | Fun Fun Function Video:
https://www.youtube.com/watch?v=iZLP4qOwY8I
*/

/* Intro by MPJ
Currying is when a function doesn't take all of its arguments up front.
It wants you to give the first argument, then the function returns another function, which you are supposed to call with a second argument.
And that goes until the end of the functions you need to invoke. */

console.log(`=== Functional Programming in JavaScript ===`)
console.log(`Part 6 - Currying
`)

// Simple function
/* const dragon = (name, size, element) => {
  return name + ' is a ' + size + ' dragon that breathes ' + element + '!!!'
}

console.log(dragon('Dragoon', 'huge', 'fire')); */

// Curry version of the same function

const dragon =
  name =>
    size =>
      element =>
      name + ' is a ' + size + ' dragon that breathes ' + element + '!!!';

// console.log(dragon('Dragoon', 'huge', 'fire')); // Cant' be invoked this way - Output: [function]
// console.log(dragon('Fluffykins')('small')('ice'))

// Breaking the code to call it
const dragoon = dragon('Dragoon')
const hugeDragon = dragoon('huge')
console.log(hugeDragon('fire'))

// Why to use it?
console.log(`
Why use currying? A better example:
`)

const dragons = [
  { name: 'Fluffykins', element: 'lightning'},
  { name: 'Drogon', element: 'fire'},
  { name: 'Meg', element: 'water'},
  { name: 'Maya', element: 'water'},
  { name: 'Dumbo', element: 'water'},
  { name: 'Cornflakes', element: 'lightning'},
  { name: 'Doomer', element: 'timewarp'}
]

const hasElement = (element, obj) => obj.element === element

const lightningDragons = dragons.filter(el => hasElement('lightning', el))

console.log(lightningDragons)

// Curryed findDragons
const findDragons =
  arr =>
    element =>
      arr.filter(el => element === el.element)

console.log(findDragons(dragons)('water'))

const doMath =
  num1 =>
   operation =>
    num2 => {
      let result;
      switch (operation) {
        case '+':
          result = num1 + num2
          break;
        case '-':
          result = num1 - num2
          break;
        case '/':
          result = num1 / num2
          break;
        case '*':
          result = num1 * num2
          break;
        default:
          break;
      }
      return `${num1} ${operation} ${num2} = ${result}`
    }
console.log(`
Math operations in a curried function
`)
console.log(doMath(973)('+')(42))
console.log(doMath(100)('-')(25))
console.log(doMath(100)('/')(25))
console.log(doMath(100)('*')(350))