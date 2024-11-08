// Data-Structures - Stacks

import { NodeStack } from './types'

// Basically a Stack is a specific implementation of a Linked List

// A stack is a linear data structure that follows the Last In First Out (LIFO) principle.
// A good example of a stack is any stack of plates where the plate that is placed last is the first
// to be removed.

// The difference between stacks and queues is in removing. In a stack we remove the item the most
// recently added; in a queue, we remove the item the least recently added.

// A -> B -> C -> D
// ˆ              ˆ
// |              |
// t              h

// D: { value: 11, next: C } -> C: { value: 10, next: B } -> B: { value 5, next: A } -> A: { value: 1, next: undefined } -> undefined

// In case we were to add E, would be something like:
// E.next = this.head
// this.head = E

// Example after the change:
// head: E,
// Queue: {
//  E: { value: 13, next: A },
//  A: { value: 1, next: B },
//  B: { value 5, next: C },
//  C: { value: 10, next: D },
//  D: { value: 11, next: undefined }
// }

// Basic operations
// push, pop, peek

export default class Stack<T> {
  public length: number
  private head?: NodeStack<T>

  constructor() {}

  push(item: T): void {
    const node = { value: item } as NodeStack<T>
  }
  pop(): T | undefined {
    return undefined
  }
  peek(): T | undefined {
    return undefined
  }
}
