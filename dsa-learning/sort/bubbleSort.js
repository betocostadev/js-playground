// In Bubble Sort we simply check the ith number to the next number
// If the ith number is larger than the next number in the list, we swap positions

// O (N - N + 1)
// O N(N + 1)/2 = (N2 + N)
// Its O (N2)
const bubbleSort = (arr) => {
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

const arr1 = [0, 5, 1, 3, 6, 2, 10]
const arr2 = [1, 5, 0, 3, 6, 2, 11, 4, 9, 22]

const sortedArr1 = bubbleSort(arr1)
const sortedArr2 = bubbleSort(arr2)

console.log(sortedArr1)
console.log(sortedArr2)
