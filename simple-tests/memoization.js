const addTo80 = (n) => {
  console.log('long time...')
  return n + 80
}

console.log(addTo80(10))
console.log(addTo80(10))

const cache = {}
console.log(cache)
const memoizedAddTo80 = (n) => {
  if (n in cache) {
    console.log('found in cache!')
    return cache[n]
  } else {
    console.log('long time')
    cache[n] = n + 80
    return cache[n]
  }
}

console.log('1', memoizedAddTo80(10))
console.log('2', memoizedAddTo80(10))
console.log(cache)
