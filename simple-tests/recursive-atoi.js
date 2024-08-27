// Recursive Atoi
// It's a recursive function to convert strings to integers
// In this case, it's based on C code, considering chars.
// That's why it is recursive. It needs to recurse for every char in the string.
// Examples:
// Input recursiveAtoi("19860401")
// Output 19860401

// Input recursiveAtoi("a401986cc0401")
// Output 4019860401

// Base case
// count === 0 / return 0, or no more text
// Or, we can avoid using count and pass the string every time without the last character
// In the end the base case will be an "empty string"

const recursiveAtoi = (source, target) => {
  const size = source.length
  let chars = [...source]
  let char = chars[size - 1]
  const newText = source.substring(0, size - 1)
  if (!isNaN(char)) {
    const int = parseInt(char)
    if (!target) {
      target = [int]
    } else {
      target.unshift(int)
    }
  }

  if (newText === '') {
    return target.reduce((acc, num) => acc * 10 + num, 0)
  }
  return recursiveAtoi(newText, target)
}

console.log('The result of the Rercusvie Atoi is: ', recursiveAtoi('19860401'))
console.log('The result of the Rercusvie Atoi is: ', recursiveAtoi('509860401'))
console.log('The result of the Rercusvie Atoi is: ', recursiveAtoi('1109ax86p330401'))
