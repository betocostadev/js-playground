// Sum all the numbers from 0 until you reach the target.
// Example: Target(10), 0 + 1, 1 + 2, 3 + 3, ...
// The idea is to not use a sum like an array, also, not sum using a loop.
// This is possible by using a simple formula:
// (N + 1) * (N / 2)

const sumToTarget = (target: number) => {
  const targetMax = target + 1
  return targetMax * (target / 2)
}

console.log(sumToTarget(6)) // 0 + 1 = 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 15 + 6 = 21
console.log(sumToTarget(10)) // 55
console.log(sumToTarget(100)) // 5050
