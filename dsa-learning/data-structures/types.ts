export type NodeStack<T> = {
  value: T
  prev?: NodeStack<T>
}

export type Node<T> = {
  value: T
  next?: Node<T>
}
