// Linear Search Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)
// indexOf works basically the same way of the linear search algorithm
// but it is implemented in the language itself, so it is more efficient
// than the linear search algorithm implemented here.

function linearSearch(array: number[], target: number): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }
  return -1
}

console.log(linearSearch([1, 2, 3, 3, 4], 3)) //2
