// Data-Structures - Linked List
// A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.
// The elements in a linked list are linked using pointers.
// In simple words, a linked list consists of nodes where each node contains a data field and a reference(link)
// to the next node in the list.
// Types of Linked List
// Singly Linked List − Item navigation is forward only.
// Doubly Linked List − Items can be navigated forward and backward.

// Head = Fist element
// Items are containers

// Operations
// prepend / append
// Insertion in the middle
// Deletion from ends
// Deletion in the middle
// Get head / tail
// Get N

// Singly Linked List
// Node<T> | val: T | next?: Node<T>
// Example: head: {value: 20, next: B} -> B:  {value: 25, next: C} -> C:{value: 30, next: undefined} -> undefined

// Doubly Linked List
// Node<T> | val: T | next?: Node<T> | prev?: Node<T>
// Example: head: {value: 20, next: B, prev: undefined} -> B: {value: 25, next: C, prev: head} -> C: {value: 30, next: tail, prev: B} -> tail: {value: 35, next: undefined, prev: C} -> undefined

// Inserting a Node
// Now let's think about inserting data to the doubly linked list above.
// We will insert F after the head (A), so it will be changed to A-F-B.
// Start head: {value: 20, next: B, prev: undefined} -> B: {value: 25, next: C, prev: head} -> C: {value: 30, next: undefined, prev: B} -> undefined
// Adding the item:
// Example: head: {value: 20, next: F, prev: undefined} -> F: {value: 23, next: B, prev: head} -> B: {value: 25, next: C, prev: F} -> C: {value: 30, next: undefined, prev: B} -> undefined

// Notice that we had to change the next for A, and the prev for B, now F is in the middle of these two
// And the list has grown by one node.
// The operation is 0(i) - We do the same exact number of operations don't matter the size of the list

// Deleting a Node
// Think about: A -> B -> C -> D
// We will remove C
// The operation needs to be in the correct order, so:
// D = C.next
// B = C.prev
// B.next = C.next
// D.prev = C.prev
// C.prev = c.next = undefined
// Return C.val
// The operation is 0(i) - We do the same exact number of operations don't matter the size of the list

// They are so foundational to programming concepts when it comes to DSA.
// Understanding them will help you with trees, with graphs, etc...

interface LinkedList<T> {
  get length(): number
  insertAt(item: T, index: number): void
  remove(item: T): T | undefined
  removeAt(index: number): T | undefined
  append(item: T): void
  prepend(item: T): void
  get(index: number): T | undefined
}
