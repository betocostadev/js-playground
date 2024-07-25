// In Bubble Sort we simply check the ith number to the next number
// If the ith number is larger than the next number in the list, we swap positions

// O (N - N + 1)
// O N(N + 1)/2 = (N2 + N)
// Its O (N2)

// No swaps
const bubbleSortNoSwaps = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

const bubbleSort = (arr) => {
  let swaps = -1
  for (let i = 0; i < arr.length - 1; i++) {
    swaps = 0
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        swaps++
      }
    }
    if (swaps === 0) return arr
  }
}

const arr1 = [
  0, 5, 1, 2, 3, 6, 39, 10, 13, 12, 11, 24, 29, 23, 22, 21, 30, 4, 14, 16, 15, 19, 18, 17, 38, 37,
  35, 33, 32, 28, 25, 31, 26, 27, 20,
]
const arr2 = [21, 2, 3, 5, 4, 6, 7, 13, 8, 9, 10, 11, 12, 16, 22]
const arr3 = [
  0, 5, 1, 2, 3, 6, 39, 10, 13, 12, 11, 24, 29, 23, 22, 21, 30, 4, 14, 16, 15, 19, 18, 17, 38, 37,
  35, 33, 32, 28, 25, 31, 26, 27, 20,
]
const arr4 = [21, 2, 3, 5, 4, 6, 7, 13, 8, 9, 10, 11, 12, 16, 22]

console.time('No swaps time')
const sortedArr1 = bubbleSortNoSwaps(arr1)
const sortedArr2 = bubbleSortNoSwaps(arr2)
console.timeEnd('No swaps time') // ~0.165ms
console.log(sortedArr1)
console.log(sortedArr2)

console.time('Swaps time')
const sortedArr3 = bubbleSort(arr3)
const sortedArr4 = bubbleSort(arr4)
console.timeEnd('Swaps time') // ~0.060ms
console.log(sortedArr3)
console.log(sortedArr4)
