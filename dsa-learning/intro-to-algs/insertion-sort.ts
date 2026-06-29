/*
Insertion sort builds a sorted array one element at a time by repeatedly taking the next element
and inserting it into its correct position among the already sorted elements,
shifting larger elements to the right to make space.
Numbers to be sorted are know as KEYS
Other data we call SATELLITE DATA
Together they form a RECORD

It processes the array A[1…n] by iteratively inserting each element 
A[i] (2 ≤ i ≤ n) into its correct position among A[1…i−1]. 
After the procedure, the array A[1…n] is sorted in place.

A = [5, 2, 4, 6, 1, 3]
Pseudocode:
INSERTION-SORT(A, n)
  for i = 2 to n
    key = A[i]
    //? Insert A[i] into the sorted subarray A[1: i-1]
    j = i - 1
    while j > 0 and A[j] > key
      A[j + 1] = A[j]
      j = j - 1
    A[j + 1] = key
*/

const randomArr = [5, 2, 4, 6, 1, 3]

const insertionSort = (arr: number[]): number[] => {
  console.log('Source array: ', arr)
  console.log('=======================')
  let key: number
  for (let i = 0; i < arr.length; i++) {
    key = arr[i]
    let j = i - 1
    console.log('=======================')
    console.log('For iteration N: ', i)
    console.log('Key:', key)
    console.log('j:', j)
    while (j >= 0 && arr[j] > key) {
      console.log('While: ')
      console.log(`i: ${i} | j: ${j} | arr[j]: ${arr[j]}`)
      arr[j + 1] = arr[j]
      j = j - 1
    }
    console.log('Array before placing key back: ', arr)
    arr[j + 1] = key
    console.log('End of iteration, arr[j + 1] is: ', key)
    console.log('arr is now: ', arr)
  }
  console.log('Result array: ', arr)
  return arr
}

insertionSort(randomArr)
