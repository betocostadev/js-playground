// Recursive Atoi
// It's a recursive function to convert strings to integers
// In this case, it's based on C code, considering chars.
// That's why it is recursive. It needs to recurse for every char in the string.
// Examples:
// Input recursiveAtoi("19860401")
// Output 19860401

// Input recursiveAtoi("a01986cc0401")
// Output 019860401

// Base case
// count === 0 / return 0, or no more text

const recursiveAtoi = (text, count, result) => {
  if (!count) count = text.length
  let chars = [...text]
  let char = chars[count - 1]
  const newText = text.substring(0, text.length - 1)
  const newCount = newText.length
  if (!isNaN(char)) {
    const int = parseInt(char)
    if (!result) {
      result = [int]
    } else {
      result.unshift(int)
    }
  }

  if (newText === '') {
    return result
  }
  return recursiveAtoi(newText, newCount, result)
}

console.log('The result of the Rercusvie Atoi is: ', recursiveAtoi('19860401'))
console.log('The result of the Rercusvie Atoi is: ', recursiveAtoi('09860401'))
console.log('The result of the Rercusvie Atoi is: ', recursiveAtoi('09ax86p330401'))
