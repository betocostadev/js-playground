// Based on Linear Search

const findIndexOfAll = (arr: number[] | string[], target: number | string): number[] | string[] => {
  const indexes: number[] = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indexes.push(i)
    }
  }
  return indexes
}

console.log(findIndexOfAll(['b', 'c', 'a', 'x', 'd', 'a', 'e'], 'a')) // [2, 5]
console.log(findIndexOfAll([1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15, 16], 9)) // []
console.log(findIndexOfAll([1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15, 16], 8)) // [7, 8]
