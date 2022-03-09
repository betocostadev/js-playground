/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
// Data Structure: BINARY SEARCH TREE

// A tree data structure is a kind of structure that
// when visualized, it looks like a tree.
// Think in something like the DOM tree, connected by its Nodes.

console.log('======= BINARY SEARCH TREE =======\n')

class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }

  add(data) {
    const newNode = this.root
    if (newNode === null) {
      this.root = new Node()
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(newNode)
    }
    return newNode
  }
}

const binSTree = new BST()
binSTree.add(2)
binSTree.add(5)
binSTree.add(4)
binSTree.add(7)
console.log(binSTree)
