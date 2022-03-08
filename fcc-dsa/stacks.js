/* eslint-disable no-console */
console.log('Stacks')
console.log(
  'A DS Stack is somewhat like a Stack of Books. Stacks are a first in, first out type of service.'
)

// Traditional functions in a stack
// Push (adding the last element)
// Pop (removing the top element of the stack)
// Peek (displaying the top element of the stack)
// Length (or size - To determine how many items are on the stack)

// Reverse the words in the array

const checkForPalindrome = () => {
  const letters = []
  const word = 'racecar' // Try another word
  let reversed = ''

  // push the word into the stack
  for (let i = 0; i < word.length; i += 1) {
    letters.push(word[i])
  }

  console.log(letters)

  // pop off the stack in reverse order
  for (let i = 0; i < word.length; i += 1) {
    reversed += letters.pop()
  }
  console.log(`reversed word = ${reversed}.`)

  return reversed === word ? `${word} is a palindrome` : `${word} is NOT a palindrome`
}

console.log(checkForPalindrome())

// Creating a Stack constructor
class Stack {
  constructor() {
    this.count = 0
    this.storage = {}

    // Adds a value to the end of the stack
    this.push = function push(value) {
      this.storage[this.count] = value
      this.count += 1
    }

    // Removes and returns the value at the end of the stack
    this.pop = function pop() {
      if (this.count === 0) {
        return undefined
      }

      this.count -= 1
      const result = this.storage[this.count]
      delete this.storage[this.count]
      return result
    }

    this.size = function size() {
      return this.count
    }

    this.peek = function peek() {
      return this.storage[this.count - 1]
    }
  }
}

const stack1 = new Stack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
console.log(`Stack1 is: ${JSON.stringify(stack1)}`)
stack1.size()
console.log(`Stack1 size is: ${stack1.size()}`)
stack1.peek()
stack1.pop()
stack1.peek()
console.log('Peeking: ', stack1.peek())
stack1.push(4)
stack1.push(5)
stack1.push(6)
stack1.push([7, 8, 9])
stack1.size()
console.log('New size is: ', stack1.size())
console.log('Peeking: ', stack1.peek())

console.log(`Stack1 now is: ${JSON.stringify(stack1)}`)
