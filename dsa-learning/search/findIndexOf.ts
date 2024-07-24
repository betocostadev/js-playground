// Based on Linear Search

const findIndexOf = (arr: number[] | string[], target: number | string): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

console.log(findIndexOf(['b', 'c', 'a', 'x', 'd', 'e'], 'e')) // 5
console.log(findIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15, 16], 8)) // 7
console.log(findIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15, 16], 9)) // -1
