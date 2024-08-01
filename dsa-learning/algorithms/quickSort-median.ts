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

// Median-of-three Pivot
// The Median-of-Three Pivot is a strategy to try to avoid getting a sorted array and
// ending up with the lowest performance of Quick Sort
// Get the high, medium, and last position of the sub-array (partition)
// Use the median value of the three as the pivot

function qs(arr: number[], low: number, high: number): void {}

function partition(arr: number[], low: number, high: number): number {
  return -1
}

export default function quick_sort(arr: number[]): void {}
