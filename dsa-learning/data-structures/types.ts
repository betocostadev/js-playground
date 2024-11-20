export type NodeStack<T> = {
  value: T
  prev?: NodeStack<T>
}

export type Node<T> = {
  value: T
  next?: Node<T>
}

export type QNode<T> = {
  value: T
  next?: QNode<T>
}

export interface ArrayList<T> {
  get capacity(): number
  get length(): number
  append(item: T): void
  prepend(item: T): void
  insertAt(item: T, index: number): void
  remove(item: T): T | undefined
  removeAt(index: number): T | undefined
  get(index: number): T | undefined
  growCapacity(size: number): boolean
}
