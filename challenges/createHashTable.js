/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
// The result of a hash table must be something like this:
// For the word Alabama: { a: 4, l: 1, b: 1, m: 1}

const genHash = (str) => {
  const hash = {}
  const arr = str.split('')

  for (i = 0; i < arr.length; i++) {
    if (hash.hasOwnProperty(arr[i])) {
      hash[arr[i]] += 1
    } else {
      hash[arr[i]] = 1
    }
  }
  return hash
}

console.log(genHash('alabama'))
