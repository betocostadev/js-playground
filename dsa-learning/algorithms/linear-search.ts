// The most basic way of searching
// Not the most performant one O(n)

// This linear search will work as indexOf - It will return the position of the item
// if the item is in the array
const linearSearch = (needle: number, haystack: number[]): number => {
  for (let i = 0; i < haystack.length; i++) {
    if (needle === haystack[i]) {
      return i
    }
  }
  return -1
}

const arr = [0, 2, 4, 12, 98, 75, 83, 3, 92, 99, 77, 33, 11, 22, 44, 534, 93, 13, 10]
console.log(linearSearch(4, arr))
