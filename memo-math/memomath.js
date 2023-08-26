/*
 A memoized math to perform some calculations
In this alternative notation, the operators precede the operands. For example while in traditional notation we might write , instead we would write .

The main advantage of this format is that it does not require parentheses for any ambiguous expression.

Traditional notation
3 + 4	
Alternative notation
+ 3 4
Traditional notation
3 - (4 * 5)	
Alternative notation
- 3 * 4 5
Traditional notation
(3 + 4) * 5
Alternative notation
* + 3 4 5
Traditional notation
(3 - 4) / (5 + 2)
Alternative notation
/ - 3 4 + 5 2

*/

// const cache = new Map() // Use a Map to store cached results
// function memoize(func) {
//   console.log(cache.has('- 3 * 4 5'))

//   return function (...args) {
//     if (cache.has(args)) {
//       return cache.get(args) // Return the cached result if available
//     }

//     const result = func(...args) // Calculate the result
//     cache.set(args, result) // Store the result in the cache
//     console.log('cached args: ', args)
//     console.log('cached result: ', result)
//     console.log('accessing cache: ', cache)
//     return result
//   }
// }
const cache = {} // This object will store the cached results

function memoize(func) {
  return function (...args) {
    const key = JSON.stringify(args) // Convert the arguments into a unique string key
    if (cache[key] === undefined) {
      cache[key] = func(...args) // If result not in cache, calculate and store it
    }
    console.log(cache)
    return cache[key] // Return the cached result
  }
}

function calculateOperation(operator, operand1, operand2) {
  switch (operator) {
    case '+':
      return operand1 + operand2
    case '-':
      return operand1 - operand2
    case '*':
      return operand1 * operand2
    case '/':
      return operand1 / operand2
    default:
      throw new Error('Invalid operator: ', operator)
  }
}

function calculate(expression) {
  // console.log('expression is: ', expression)
  const inputs = expression.split(' ')
  const collection = []

  for (let i = inputs.length - 1; i >= 0; i -= 1) {
    const input = inputs[i]
    if (!isNaN(input)) {
      collection.push(parseFloat(input))
    } else {
      const operand1 = collection.pop()
      const operand2 = collection.pop()
      const result = calculateOperation(input, operand1, operand2)
      // console.log('will perform math for: ', input, operand1, operand2)
      if (result) {
        collection.push(result)
      }
    }
  }

  return collection[0]
}

const expensiveCalculation = (tokens) => calculate(tokens)

const memoizedCalculation = memoize(expensiveCalculation)

console.log(memoizedCalculation('- 3 * 4 5'))
console.log(memoizedCalculation('* + 3 4 5'))
console.log(memoizedCalculation('/ - 3 4 + 5 2'))

console.log(' ==== Using cache ==== ')

// Using cached values
// console.log(cache)
console.log(memoizedCalculation('- 3 * 4 5'))
console.log(memoizedCalculation('* + 3 4 5'))
console.log(memoizedCalculation('/ - 3 4 + 5 2'))
