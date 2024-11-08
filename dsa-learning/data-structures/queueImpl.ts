// Implementation of a Queue Data Structure
import { QNode } from './types'

export default class Queue<T> {
  public length: number
  private head?: QNode<T> | undefined
  private tail?: QNode<T> | undefined

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    const node: QNode<T> = { value: item, next: undefined }
    this.length++
    if (!this.tail) {
      this.tail = this.head = node
    }

    this.tail.next = node
    this.tail = node
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined
    }
    this.length--

    const head = this.head
    this.head = this.head.next

    if (this.length === 0) {
      this.tail = undefined
    }

    // free memory - If there is no garbage collection
    head.next = undefined

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}

const theQueue = new Queue()

console.log('Queue length:', theQueue.length)
theQueue.enqueue(1)
console.log('Queue next: ', theQueue.peek())
theQueue.enqueue(2)
console.log('Added more, queue next: ', theQueue.peek())
theQueue.enqueue(3)
console.log('Added more, queue next: ', theQueue.peek())
console.log('Dequeue:', theQueue.deque())
console.log('Queue length:', theQueue.length)
console.log('Queue next: ', theQueue.peek())
console.log('Dequeue:', theQueue.deque())
console.log('Queue next: ', theQueue.peek())
console.log('Queue length:', theQueue.length)
console.log('Dequeue:', theQueue.deque())
console.log('Queue next: ', theQueue.peek())
console.log('Queue length:', theQueue.length)
