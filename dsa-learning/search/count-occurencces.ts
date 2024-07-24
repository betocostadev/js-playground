// Based on Linear Search

const countOccurrences = (arr: number[] | string[], target: number | string): number => {
  let count: number = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++
    }
  }
  return count
}

console.log(countOccurrences(['b', 'c', 'a', 'x', 'd', 'a', 'e', 'a', 'b'], 'a')) // 3
console.log(countOccurrences([1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15, 16], 9)) // 0
console.log(countOccurrences([1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15, 16], 8)) // 2
