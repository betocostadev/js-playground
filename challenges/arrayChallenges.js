/* eslint-disable no-console */
// 1 - Find the missing number in the array
// Assume the array will follow the correct order [1, 2, 3]
// Find the missing [3, 7, 1, 2, 8, 4, 5]

console.log('Challenge 1 - Find the missing number in the array')
const missingNumArr = [3, 7, 1, 2, 8, 4, 5]

const findTheMissingNumber = (arr) => {
  const sumOfElements = arr.reduce((acc, cur) => acc + cur, 0)

  let n = arr.length + 1
  const actualSum = (n * (n + 1)) / 2
  return actualSum - sumOfElements
}

console.log(
  `in the array [3, 7, 1, 2, 8, 4, 5], the missing number is: ${findTheMissingNumber(
    missingNumArr
  )}`
)
console.log('\n')

// 2. Determine if the sum of two integers is equal to the given value
/* Given an array of integers and a value, determine if there are any two integers in the array
 whose sum is equal to the given value. Return true if the sum exists and return false if
it does not.
Consider this array and the target sums:
[5,7,1,2,8,4,3]

Target Sum
10
7+3=10, 2+8=10

Target Sum
19
No 2 values sum up to 19

*/

console.log('Challenge 1 - Determine if the sum of two integers is equal to the given value')

const chaTwoArr = [5, 7, 1, 2, 8, 4, 3]
console.log('target sum array is: ', chaTwoArr)

const findSumOfTwo = (arr, target) => {
  const foundValues = new Set()

  let found = false

  arr.forEach((element) => {
    if (foundValues.has(target - element)) found = true

    foundValues.add(element)
  })

  return found
}

console.log('can sum two numbers to 10?', findSumOfTwo(chaTwoArr, 10))
console.log('can sum two numbers to 15?', findSumOfTwo(chaTwoArr, 15))
console.log('can sum two numbers to 16?', findSumOfTwo(chaTwoArr, 16))
// def find_sum_of_two(A, val):
//   found_values = set()
//   for a in A:
//     if val - a in found_values:
//       return True

//     found_values.add(a)

//   return False
