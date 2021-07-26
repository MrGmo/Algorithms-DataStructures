// Tree Traversal

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    let newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root
    let found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false
  }
  // Breadth First Search
  BFS() {
    let data = []
    let queue = []
    let node = this.root
    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left);
      if (node.rigth) queue.push(node.right);

    }
    return data
  }
  //Depth First Search: Pre-order
  DFSPreOrder() {
    let data = []
    let current = this.root
    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current)
    return data
  }
   //Depth First Search: Post-order
  DFSPostOrder() {
    let data = []
    let current = this.root
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value)
    }
    traverse(current)
    return data
  }
   //Depth First Search: In-order
  DFSInOrder() {
    let data = []
    let current = this.root
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current)
    return data
  }
}

let tree = new BinarySearchTree()