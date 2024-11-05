// In Bubble Sort we simply compare the ith number with the next number
// If the ith number is larger than the next number in the list, we swap positions
// To know an array is sorted we simply need to know that for each item, the below is true:
// Xi <= Xi + 1

// Big O
// O (N - N + 1)
// O N(N + 1)/2 = (N2 + N)
// It's O(N2)

// No swaps
// arr.length - 1 - i is important to not check the last item for each new iteration
// We know it will be already sorted
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

// Improving performance
// We can add a swap variable to check the number of swaps of the last iteration
// If in the next iteration we have 0 swaps, it means the array is already sorted and we can return
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
  0, 5, 1, 2, 48, 36, 3, 6, 39, 10, 13, 42, 12, 35, 11, 50, 24, 29, 23, 43, 53, 22, 21, 30, 4, 14,
  16, 52, 44, 15, 8, 45, 19, 18, 17, 38, 37, 35, 33, 54, 49, 51, 32, 9, 46, 47, 28, 25, 31, 26, 34,
  27, 20, 7, 40, 55, 41,
]

const arr2 = [
  0, 5, 1, 2, 48, 36, 3, 6, 39, 10, 13, 42, 12, 35, 11, 50, 24, 29, 23, 43, 53, 22, 21, 30, 4, 14,
  16, 52, 44, 15, 8, 45, 19, 18, 17, 38, 37, 35, 33, 54, 49, 51, 32, 9, 46, 47, 28, 25, 31, 26, 34,
  27, 20, 7, 40, 55, 41,
]

console.time('No swaps time')
const sortedArr1 = bubbleSortNoSwaps(arr1)
console.timeEnd('No swaps time') // ~0.250ms
console.log(sortedArr1)

console.time('Swaps time')
const sortedArr2 = bubbleSort(arr2)
console.timeEnd('Swaps time') // ~0.110ms
console.log(sortedArr2)

// Creating big arrays to check the performance difference with swaps
const preSorted1 = []
for (let index = 0; index < 4000; index++) {
  preSorted1.push(index)
}

const preSorted2 = []
for (let index = 0; index < 4000; index++) {
  preSorted2.push(index)
}

console.log('=== Created two Arrays with 4000 items in order ===')

console.time('No swaps time')
const sortedArr5 = bubbleSortNoSwaps(preSorted1)
console.timeEnd('No swaps time') // ~21.771ms

console.time('No swaps time')
const sortedArr6 = bubbleSort(preSorted2)
console.timeEnd('No swaps time') // ~0.082ms
