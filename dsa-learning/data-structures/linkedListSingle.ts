// Implementation of a singly linked list
// Changed from length to Size to avoid typescript complains.

import { Node } from './node-types'

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
  append(item: T): void {}
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

singly.prepend(1)
singly.prepend(2)
singly.prepend(3)
console.log(singly.size)
