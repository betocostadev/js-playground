// Implementation of a stack.
// Refer to stacks.ts

import { NodeStack } from './types'

// Basic operations
// push, pop, peek

export default class Stack<T> {
  public length: number
  private head?: NodeStack<T>

  constructor() {
    this.head = undefined
    this.length = 0
  }

  push(item: T): void {
    const node = { value: item, prev: undefined } as NodeStack<T>
    this.length++

    if (!this.head) {
      this.head = node
    } else {
      node.prev = this.head
      this.head = node
    }
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1)
    if (this.length === 0) {
      const head = this.head
      // Cleanup
      this.head = undefined
      return head?.value
    }

    const head = this.head as NodeStack<T>
    this.head = head.prev

    // If you had to manage memory, you would need to clean up the head

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}

const library = new Stack()
library.push('The Hobbit')
console.log('Stack head is: ', library.peek())
console.log('Library size is: ', library.length)
library.push('Lord of the Rings I')
console.log('Stack head is: ', library.peek())
console.log('Library size is: ', library.length)
library.push('Lord of the Rings II')
console.log('Stack head is: ', library.peek())
console.log('Library size is: ', library.length)
library.push('Lord of the Rings III')
console.log('Stack head is: ', library.peek())
console.log('Library size is: ', library.length)
console.log('Removing book: ', library.pop())
console.log('Library size is: ', library.length)
console.log('Stack head is: ', library.peek())
console.log('Removing book: ', library.pop())
console.log('Library size is: ', library.length)
console.log('Stack head is: ', library.peek())
console.log('Removing book: ', library.pop())
console.log('Library size is: ', library.length)
console.log('Stack head is: ', library.peek())
console.log('Library size is: ', library.length)
console.log('Removing book: ', library.pop())
console.log('Library size is: ', library.length)
console.log('Stack head is: ', library.peek())
