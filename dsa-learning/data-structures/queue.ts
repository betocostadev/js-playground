// Data-Structures - Queue
// Basically a Queue is a specific implementation of a Linked List
// A queue is a linear data structure that follows the First In First Out (FIFO) principle.
// A good example of a queue is any queue of consumers for a resource where the consumer that
// came first is served first.
// The difference between stacks and queues is in removing. In a stack we remove the item the most
// recently added; in a queue, we remove the item the least recently added.

// A -> B -> C -> D
// ˆ              ˆ
// |              |
// h              t

// A: { value: 1, next: B } -> B: { value 5, next: C } -> C: { value: 10, next: D } -> D: { value: 11, next: undefined }

// In case we were to add d, would be something like:
// this.tail.next = E
// this.tail = E

// Example after the change:
// head: A,
// tail: E
// Queue: {
//  A: { value: 1, next: B },
//  B: { value 5, next: C },
//  C: { value: 10, next: D },
//  D: { value: 11, next: E }
//  E: { value: 13, next: undefined}
// }

// For popping out we would do the opposite
// Head would point to B instead of A.
// Example:
// Save the reference to the Head, then change the data
// let h = head (A)
// head = head.next (A.next = B)
// h.next = null
// return h.value
// Data:
// head: B,
// tail: E
// Queue: {
//  B: { value 5, next: C },
//  C: { value: 10, next: D },
//  D: { value: 11, next: E }
//  E: { value: 13, next: undefined}
// }

// Algorithms
// enqueue, dequeue, peek
// Pay attention that in a QUEUE we DON'T CARE about all the data.
// We just need to know who is the Head, Tail, Enqueue, and Dequeue.

type Node<T> = {
  value: T
  next?: Node<T>
}

export default class Queue<T> {
  public length: number

  constructor() {}

  enqueue(item: T): void {
    const node = { value: item } as Node<T>
    return
  }
  deque(): T | undefined {
    return undefined
  }
  peek(): T | undefined {
    return undefined
  }
}
