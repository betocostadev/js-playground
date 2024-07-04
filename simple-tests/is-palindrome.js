// Goal: to check if a string is a palindrome
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward
// Example: racecar
// Example: madam
// Example: 12321
// Copilot function sugestion: isPalindrome
// const isPalindrome = (str) => {
//   return str === str.split('').reverse().join('')
// }

// Alternate function
const isPalindrome = (str) => {
  if (str.length === 0) return false
  if (str.length === 1) return true
  else {
    for (let i = 0; i < str.length / 2; i++) {
      console.log(str[i], str[str.length - 1 - i])
      if (str[i] !== str[str.length - 1 - i]) return false
    }
  }
  return true
}

console.log(isPalindrome('a')) // true
console.log(isPalindrome('hello')) // false
console.log(isPalindrome('racecar')) // true

// Other implementations

// Worst performance
// function isPalindrome(string) {
//   const arr = string.split('')
//   const copy = Array.from(arr)
//   for (let i = 0; i < arr.length / 2; i++) {
//     const letter = copy.pop()
//     compare.push(letter)
//   }

//   if (arr.join('') === compare.join('')) return true
//   else return false
// }

// Best performance
// function isPalindrome(string) {
// const arr = string.split('')
// for (let i = 0; i < arr.length / 2; i++) {
//   if (arr[i] !== arr[arr.length - 1 - i]) {
//     return false
//   }
// }
// return true
// }

const string1 = 'level'
const string2 = 'house'
const string3 = 'ana'
const string4 = 'hannih'

console.log(isPalindrome(string1))
console.log(isPalindrome(string2))
console.log(isPalindrome(string3))
console.log(isPalindrome(string4))
