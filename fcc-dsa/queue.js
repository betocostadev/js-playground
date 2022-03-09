/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
// Data Structure: Queues & Priority Queues
// Queues are a kind of data that is similar to a stack. It is used to hold data.
// A queue is FIFO - First in, First Out

console.log('======= QUEUES =======\n')

class Queue {
  constructor() {
    const collection = []

    this.print = () => collection

    this.enqueue = (element) => collection.push(element)

    this.dequeue = () => collection.shift()

    this.front = () => collection[0]

    this.size = () => collection.length

    this.rear = () => collection[this.size() - 1]

    this.isEmpty = () => collection.length === 0
  }
}

const queueOne = new Queue()
console.log('Store just oppened, is queue empty? ', queueOne.isEmpty())
queueOne.enqueue('John')
queueOne.enqueue('Joana')
queueOne.enqueue('Maria')
console.log(queueOne.print())
console.log('queue size: ', queueOne.size())
queueOne.enqueue('Carolina')
queueOne.enqueue('Roberto')
console.log('queue size: ', queueOne.size())
console.log(queueOne.print())
console.log('Attending: ', queueOne.dequeue())
console.log('Done with first customer')
console.log('queue size: ', queueOne.size())
console.log(queueOne.print())
console.log('Next is: ', queueOne.front())
console.log('Last one is: ', queueOne.rear())

// Priority Queue
// The difference of the queue is that we need to pass a priority with the el to add it to the queue
console.log('\nA Priority Queue\n')

class PriorityQueue {
  constructor() {
    const collection = []

    this.print = () => collection

    this.isEmpty = () => collection.length === 0

    this.enqueue = (element) => {
      if (this.isEmpty()) {
        collection.push(element)
      } else {
        // Check the priority
        let added = false
        for (let i = 0; i < collection.length; i += 1) {
          if (element[1] < collection[i][1]) {
            collection.splice(i, 0, element)
            added = true
            break
          }
        }
        if (!added) collection.push(element)
      }
    }

    this.dequeue = () => {
      collection.shift()
      return collection[0]
    }

    this.front = () => collection[0]

    this.size = () => collection.length

    this.rear = () => collection[this.size() - 1]
  }
}

const priorityQueueOne = new PriorityQueue()
console.log('Is the priority queue empty?', priorityQueueOne.isEmpty())
priorityQueueOne.enqueue(['Joana', 1])
priorityQueueOne.enqueue(['Beau', 2])
priorityQueueOne.enqueue(['Dona Benta', 3])
priorityQueueOne.enqueue(['Mariana', 1])
priorityQueueOne.enqueue(['Juliana', 2])
priorityQueueOne.enqueue(['Joaquim Floriano', 3])
priorityQueueOne.enqueue(['Corisco Floriano'])
priorityQueueOne.enqueue(['Batman', 1])
console.log('added numbers, how is the priority queue now?')
console.log('size is: ', priorityQueueOne.size())
console.log(priorityQueueOne.print())
