/* eslint-disable no-inner-declarations */
/* eslint-disable no-else-return */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */

// Data Structure: BINARY SEARCH TREE - Traversal & Height

// A tree data structure is a kind of structure that
// when visualized, it looks like a tree.
// Think in something like the DOM tree, connected by its Nodes.

console.log('======= BINARY SEARCH TREE: TRAVERSAL & HEIGHT =======\n')
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

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1
    }
    const left = this.findMinHeight(node.left)
    const right = this.findMinHeight(node.right)
    if (left < right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1
    }
    const left = this.findMaxHeight(node.left)
    const right = this.findMaxHeight(node.right)
    if (left > right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  inOrder() {
    if (this.root == null) {
      return null
    }

    const result = []
    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left)
      result.push(node.data)
      node.right && traverseInOrder(node.right)
    }
    traverseInOrder(this.root)
    return result
  }

  preOrder() {
    if (this.root == null) {
      return null
    }

    const result = []
    function traversePreOrder(node) {
      result.push(node.data)
      node.left && traversePreOrder(node.left)
      node.right && traversePreOrder(node.right)
    }
    traversePreOrder(this.root)
    return result
  }

  postOrder() {
    if (this.root == null) {
      return null
    }
    const traversePostOrder = function traversePostOrder(node) {
      node.left && traversePostOrder(node.left)
      node.right && traversePostOrder(node.right)
      result.push(node.data)
    }
    const result = []
    traversePostOrder(this.root)
    return result
  }

  levelOrder() {
    const result = []
    const Q = []
    if (this.root != null) {
      Q.push(this.root)
      while (Q.length > 0) {
        const node = Q.shift()
        result.push(node.data)
        if (node.left != null) {
          Q.push(node.left)
        }
        if (node.right != null) {
          Q.push(node.right)
        }
      }
      return result
    } else {
      return null
    }
  }
}

const bst = new BST()

bst.add(9)
bst.add(4)
bst.add(17)
bst.add(3)
bst.add(6)
bst.add(22)
bst.add(5)
bst.add(7)
bst.add(20)

console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.isBalanced())
bst.add(10)
console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.isBalanced())
console.log('inOrder: ', bst.inOrder())
console.log('preOrder: ', bst.preOrder())
console.log('postOrder: ', bst.postOrder())

console.log('levelOrder: ', bst.levelOrder())
