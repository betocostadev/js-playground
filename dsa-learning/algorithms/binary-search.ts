// Binary because we only have two options
// is it bigger or is it lower?
export default function BinarySearch(haystack: number[], needle: number) {
  let low = 0
  let high = haystack.length
  let runs = 1 // just for logging
  console.log('size is: ', haystack.length)

  do {
    const mid = Math.floor(low + (high - low) / 2)
    const val = haystack[mid]
    console.log('Runs: ', runs)
    runs++

    if (val === needle) {
      return true
    } else if (val > needle) {
      high = mid
    } else {
      low = mid + 1
    }
  } while (low < high)

  return false
}

const smallArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
const midArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 45, 46, 47, 48,
  49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 69, 69, 70,
] // Works fine even if they repeat, as long as it is ordered
console.log(BinarySearch(smallArr, 50)) // true - 4 runs
console.log(BinarySearch(midArr, 19)) // true - 2 runs
console.log(BinarySearch(midArr, 66)) // true - 6 runs
