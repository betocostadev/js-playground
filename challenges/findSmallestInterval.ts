// Implement the findSmallestInterval (numbers) function which returns
// the smallest positive interval between two values of the numbers | table.

// For example given the table
// [1, 6, 4]
// between 6 and 4
// the smallest interval is 2
// difference

// Constraints:
// numbers
// contains at least two numbers and a maximum of 100,000 entries.
// The solutions that favor execution time on large size arrays will get the most points.
// The difference between two elements will never exceed the size of an integer for your language

// Constraints
// 2 <= length(numbers) <= 100,000
// Available RAM 512MB
// timeout 6 seconds

// Sorting the array first and then finding the smallest difference between consecutive elements will
// give us the smallest interval in O (n log n)⁡ - O(nlogn) time complexity,
// which is efficient given the constraints.

const findSmallestInterval = (table: number[]): number => {
  if (!table || table.length < 2) {
    throw new Error('Table must contain at least two numbers. I.E.: [2, 5, 10]')
  }

  // Sort first
  table.sort((a, b) => a - b)

  let smallestInterval: number = Number.POSITIVE_INFINITY

  for (let i = 0; i < table.length - 1; i++) {
    if (table[i + 1] - table[i] < smallestInterval) {
      smallestInterval = table[i + 1] - table[i]
    }
  }

  return smallestInterval
}

const test = [1, 8, 15, 20] // 20 - 15: Difference = 5
const test2 = [410, 1400, -35, -300, -655, 200, 512, 256, 890, 95, 1430] // 1430 - 1400: Difference = 30

// console.log(findSmallestInterval([1]))
console.log(findSmallestInterval(test))
console.log(findSmallestInterval(test2))
