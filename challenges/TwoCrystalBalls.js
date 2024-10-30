// The Two Crystal balls problem
// Given two crystal balls that will break if dropped from high enough distance,
// determine the exact spot in which it will break in the most optimized way.
// Think about dropping the balls from a hundred-story building. Which floor is high enough
// that will break the ball?
// Options - Linear and Binary Search
// The array is ORDERED
// Think like this [f,f,f,f,f,t,t,t,t] - Remember that there are Two Crystal Balls
// If we had only one Crystal Ball, we would not be able to create an optimized way
// We would need to check every step from the first to the last - O(N)
// A good solution is to walk a squareRoot of N, and when the first ball breaks
// go back from the last position (the last square root), then forward again
// O(Vn + vN)

// V25 = 5..
// If the breaking point was 16, we would jump to 5, 10, 15, 20. At 20 the first ball breaks.
// We go back to 15 and will go linearly but only from 15 to 20 in this case
function findOptimalBreakDistance(breaks) {
  // We jump the square root of any forward every time, until it breaks, then we can go back
  const jumpAmount = Math.floor(Math.sqrt(breaks.length))
  let i = jumpAmount
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break
    }
  }
  // Jump back (imagine the first ball broke, we will go back to check where it can break before this point)
  i -= jumpAmount
  for (let j = 0; j <= jumpAmount && i < breaks.length; j++, i++) {
    // Walk maximum a jump amount of steps
    if (breaks[i]) {
      return i
    }
  }
  return -1
}
// Test cases
// Create a 10000 position array and fill it with false
const idx = Math.floor(Math.random() * 10000)
const data = new Array(10000).fill(false)

// From a random number, change from false to true for it and all the others above it
for (let i = idx; i < 10000; ++i) {
  data[i] = true
}

console.log(
  'Optimal distance is '
    .concat(idx, '. Array size is: ')
    .concat(data.length, '. Result: ')
    .concat(findOptimalBreakDistance(data))
)
console.log(
  findOptimalBreakDistance([false, false, false, false, false, true, true, true, true, true])
)
console.log(findOptimalBreakDistance([false, false, false, false, false, false]))
