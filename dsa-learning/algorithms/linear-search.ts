// The most basic way of searching
// Not the most performant one O(n)

// only checks if the item is in the array
const linearSearch = (needle: number, haystack: number[]): boolean => {
  for (let i = 0; i < haystack.length; i++) {
    if (needle === haystack[i]) {
      return true
    }
  }
  return false
}

console.log('===== Linear Search =====')

const arr = [
  0, 2, 4, 12, 98, 75, 83, 3, 92, 99, 77, 33, 11, 22, 44, 534, 93, 13, 10, 85, 84, 38, 88, 32, 10,
]
console.log('Array is: ')
console.log(arr)
console.log('What is the position of 4 in the array?', linearSearch(4, arr))
console.log('What is the position of 99 in the array?', linearSearch(99, arr))
console.log('What is the position of 534 in the array?', linearSearch(534, arr))
console.log('What is the position of 89 in the array?', linearSearch(89, arr))
