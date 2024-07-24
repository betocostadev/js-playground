// The two crystal ball problem
// Given two crystal balls that will break if dropped from high enough distance,
// determine the exact spot in which it will break in the most optimized way.

// Options - Linear and Binary Search
// Think like this [f,f,f,f,f,t,t,t,t] - Remember that there are Two Crystal Balls

// A good solution is to walk a squareRoot of N, and when the first ball breaks
// go back from the last position (the last square root), then forward again

// O(Vn + vN)

function findOptimalBreakDistance(breaks) {
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

let idx = Math.floor(Math.random() * 10000)
const data = new Array(10000).fill(false)

for (let i = idx; i < 10000; ++i) {
  data[i] = true
}

console.log(
  `Optimal distance is ${idx}. Array size is: ${data.length}. Result: ${findOptimalBreakDistance(
    data
  )}`
)
console.log(
  findOptimalBreakDistance([false, false, false, false, false, true, true, true, true, true])
)
console.log(findOptimalBreakDistance([false, false, false, false, false, false]))
