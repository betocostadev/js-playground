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
      const head = this.head
      this.head = node
      this.head.prev = head
    }
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined
    }
    this.length--
    console.log(this.head)

    const head = this.head
    this.head = this.head.prev
    // Cleanup
    if (this.length === 0) this.head = undefined

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}

const library = new Stack()
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
