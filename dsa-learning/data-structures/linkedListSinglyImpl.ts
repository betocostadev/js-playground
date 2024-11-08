// Implementation of a Singly Linked List
// Changed from length to size to avoid typescript complains.

import { Node } from './types'

export default class SinglyLinkedList<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  get size(): number {
    return this.length
  }

  prepend(item: T): void {
    const newNode: Node<T> = { value: item, next: undefined }
    if (!this.head) {
      this.head = this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    console.log(newNode)
    console.log(this.head)
    console.log(this.tail)
  }

  insertAt(item: T, idx: number): void {}

  append(item: T): void {
    const newNode: Node<T> = { value: item, next: undefined }
    if (!this.tail) {
      this.tail = this.head = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    console.log(newNode)
    console.log(this.head)
    console.log(this.tail)
  }

  remove(item: T): T | undefined {
    return undefined
  }

  get(idx: number): T | undefined {
    return undefined
  }

  removeAt(idx: number): T | undefined {
    return undefined
  }
}

const singly = new SinglyLinkedList()

console.log('Prepending')
singly.prepend(3)
console.log(singly.size)
singly.prepend(2)
console.log(singly.size)
singly.prepend(1)
console.log(singly.size)

console.log('Appending')
singly.append(4)
console.log(singly.size)
singly.append(5)
console.log(singly.size)
singly.append(6)
console.log(singly.size)
