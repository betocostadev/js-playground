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
