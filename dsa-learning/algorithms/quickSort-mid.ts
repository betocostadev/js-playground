// Quick Sort is a great Greedy algorithm for ordering
// It's based on the Divide and Conquer principle using recursion.

// This means that you divide the input into multiple parts to solve it
// It will keep dividing to make small simple chunks to solve it fast
// Like an array as [5, 7, 3, 4, 2, 6] becoming [2], it's already sorted since it only has one value
// But we can get the other parts sorted and join them into a sorted array.

// We define a number, let's say, the last one of the array to be the pivot,
// Then we check the entire array and move the numbers lower or equal the pivot
// to the left (or low), and move all the higher numbers that the pivot to the right.
// Then we do the some of the first two halves and keep doing it until all arrays are [] or [n].

// This one is uses one of the optimized versions of Quick Sort.
// We use the middle of the Array as the Pivot
function qs(arr: number[], low: number, high: number): void {
  if (low >= high) {
    return
  }

  const pivotIdx = partition(arr, low, high)

  // Sort left
  qs(arr, low, pivotIdx - 1)
  // Sort right
  qs(arr, pivotIdx + 1, high)
}

function partition(arr: number[], low: number, high: number): number {
  // Select the pivot to be the element in the middle of the array
  const mid = Math.floor((low + high) / 2)
  const pivot = arr[mid]

  // Swap the pivot with the last element
  ;[arr[mid], arr[high]] = [arr[high], arr[mid]]

  let idx = low - 1

  for (let i = low; i <= high; i++) {
    if (arr[i] < pivot) {
      idx++
      const tmp = arr[i]
      arr[i] = arr[idx]
      arr[idx] = tmp
    }
  }

  // Swap the pivot back to its correct position
  idx++
  ;[arr[idx], arr[high]] = [arr[high], arr[idx]]

  return idx
}

export default function quick_sort(arr: number[]): void {
  console.log('Before', arr)
  qs(arr, 0, arr.length - 1)
  console.log('After: ', arr)
}

const test_arr = [8, 7, 4, 5, 11, 3, 9]

const bigArr: number[] = new Array(500)

for (let i = 0; i < bigArr.length; i++) {
  bigArr[i] = Math.floor(Math.random() * 500)
}

quick_sort(test_arr)
quick_sort(bigArr)
