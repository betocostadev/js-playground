// You need to create a function that will check an Array of numbers, and return the closest
// number to a given "Goal number"

// Example:
// Goal: 0, Args: [2, 4, 33, -10, -12, -1]
// Output: -1
// -1 Will be the answer since it's the closest number to the Goal.

const arr = [2, 4, 33, -10, -12, -1, 22, 3, 6, -4, -5]

const getNearestToGoal = (arr, goal) => {
  return arr.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
  })
}

console.log(getNearestToGoal(arr, 0))
