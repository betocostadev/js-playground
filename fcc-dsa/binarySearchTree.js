/* eslint-disable no-else-return */
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

// Binary search trees only have two nodes (left and right in this case)
// They are ordered
// Each subtree is less than or equal to the parent node
class BST {
  constructor() {
    this.root = null
  }

  add(data) {
    const node = this.root

    if (node === null) {
      this.root = new Node(data)
      return
    }

    const searchTree = function (newNode) {
      if (data < newNode.data) {
        // Put smaller data to the left
        if (newNode.left === null) {
          newNode.left = new Node(data)
        } else if (newNode.left !== null) {
          return searchTree(newNode.left)
        }
      } else if (data > newNode.data) {
        // Put bigger data to the right
        if (newNode.right === null) {
          newNode.right = new Node(data)
        } else if (newNode.right !== null) {
          return searchTree(newNode.right)
        }
      } else {
        return null
      }
    }
    // eslint-disable-next-line consistent-return
    return searchTree(node)
  }

  findMin() {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  findMax() {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }

  find(data) {
    let current = this.root
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }

      if (current === null) {
        return null
      }
    }
    return current
  }

  isPresent(data) {
    let current = this.root
    while (current) {
      if (data === current.data) {
        return true
      }

      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  remove(data) {
    const removeNode = function (node, receivedData) {
      if (node === null) {
        return null
      }

      if (receivedData === node.data) {
        // node has no children
        if (node.left === null && node.right === null) return null
        // node has no left child
        if (node.left === null) return null
        // node has no right child
        if (node.right === null) return null
        // node has two children
        let tempNode = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
      } else if (receivedData < node.data) {
        node.left = removeNode(node.left, receivedData)
        return node
      } else {
        node.right = removeNode(node.right, receivedData)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }
}

const binSTree = new BST()
binSTree.add(50)
binSTree.add(17)
binSTree.add(72)
binSTree.add(54)
binSTree.add(76)
binSTree.add(67)
binSTree.add(23)
binSTree.add(40)
binSTree.add(12)
binSTree.add(30)
binSTree.add(32)
binSTree.add(10)
console.log(binSTree)
console.log('max is: ', binSTree.findMax())
console.log('min is: ', binSTree.findMin())
console.log('where is the 12? ', binSTree.find(12))
console.log('where is the 83? ', binSTree.find(83))
console.log('67 is present? ', binSTree.isPresent(67))
console.log('Lets remove the 67', binSTree.remove(67))
console.log('67 is present? ', binSTree.isPresent(67))
