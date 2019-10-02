// Generators are functions that PAUSE the execution of the code.
// Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// Async await is built on top of generators.
// Generators use the keyword yield to stop the execution of the code.
console.log(
  `=== Generator example 1 ===
`)

function* generator1 (val) {
  yield val
  yield val + 10
  yield val * 2
  return `The final value is ${val}`
}

const gen1 = generator1(5)
console.log(gen1) // object [Generator] {}
console.log(gen1.next().value) // first value 5
console.log(gen1.next(20).value) // second value 15
console.log(gen1.next().value) // third value 10
console.log(gen1.next().value) // The final value is 5

// At first it is suspended, there is no value.
// When we call .next() it will get the next value.
// After running all parts, it's value will be undefined, and done: true.
console.log(gen1.next().done) // true

console.log(
  `=== Generator example 2 ===
`)
function* generator2(num){
  yield num
  yield num + 100
  yield num * 2
  return 500
}

const gen2 = generator2(10)
const gen2Step1 = gen2.next()
console.log(gen2Step1) // Output 10 / false
const gen2Step2 = gen2.next()
console.log(gen2Step2) // 110 / false
const gen2Step3 = gen2.next()
console.log(gen2Step3) // 20 / false
const gen2Final = gen2.next()
console.log(gen2Final) // 500 / true