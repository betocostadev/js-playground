// Implementation of a singly linked list
// Changed from length to Size to avoid typescript complains.

import { Node } from './node-types'

export default class SinglyLinkedList<T> {
  public length: number

  constructor() {}

  prepend(item: T): void {}
  insertAt(item: T, idx: number): void {}
  append(item: T): void {}
  remove(item: T): T | undefined {}
  get(idx: number): T | undefined {}
  removeAt(idx: number): T | undefined {}
}
