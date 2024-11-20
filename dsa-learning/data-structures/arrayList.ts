// Arrays have a defined length and lists can grow and shrink.
// But in a List you need to go one by one in the items in the list.

// Can we do something better? What about Array List?

// An array list must have:
// Capacity - The size in memmory
// Length - The size with items in use
// Methods:
// get, len, cap, prepend, append, insertAt, remove, removeAt.
// bad(enqueue, dequeue) - Will have to move all the items
// get O(1)
// push/pop O(1)
// shift/unshift O(n)

// What if the capacity is reached?
// We have 2 choices:
// 1 - Warn the user and have a method to increase the capacity
// 2 - Increase the capacity with some defined capacity
// Increasing the capacity with some arbitrary number (1):
// Our append, prepend, and insertAt methods will need to increase the size of the array list:
// 1 - Create a new array list with the new capacity
// 2 - Copy all the items of the previous array list
// 3 - Add the new item
// 4 - Optional: If there's no garbage colletion, delete the old array list
// This leads to a problem where the user can't set the capacity.
// We can solve by adding an arbitrary value, like doubling the size every time it needs to increase
// the capacity.
// Or we can just add a method to increase the capacity (2).
// If you opt for a method to increase capacity, then append, prepend, and insertAt should
// tell the user when the capacity is reached, and the actual capacity.

// Try to implement yourself

class ArrayList {
  private _capacity: number
  private _length: number

  constructor(cap: number) {
    this._capacity = cap
    this._length = 0
  }

  get length(): number {
    return this._length
  }

  get capacity(): number {
    return this._capacity
  }
}

const ArrList = new ArrayList(10)

console.log(ArrList.capacity)
console.log(ArrList.length)
