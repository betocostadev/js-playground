// Find the missing number in the array
// Assume the array will follow the correct order [1, 2, 3]
// Find the missing [3, 7, 1, 2, 8, 4, 5]

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
