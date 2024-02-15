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
