class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    let current = this.root;

    if(this.root === null) {
      this.root = newNode;
      return this.root;
    } 

    while(current) {
      if(val < current.val && current.left === null) {
        current.left = newNode;
        return this.root;
      }

      if(val > current.val && current.right === null) {
        current.right = newNode;
        return this.root;
      }

      current = val < current.val ? current.left : current.right;
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current=this.root) {
    
    if(this.root === null) {
      let newNode = new Node(val);
      this.root = newNode;
      return this.root;
    }
    
    if(val < current.val && current.left === null) {
      let newNode = new Node(val);
      current.left = newNode;
      return this.root;
    }

    if(val > current.val && current.right === null) {
      let newNode = new Node(val);
      current.right = newNode;
      return this.root;
    }
    
    if(val < current.val) this.insertRecursively(val, current.left);

    if(val > current.val) this.insertRecursively(val, current.right);

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let newNode = new Node(val);
    let current = this.root;

    if(this.root === null) return undefined;

    while(current) {
      if(val === current.val) return current;

      current = val < current.val ? current.left : current.right;
    }

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current=this.root) {

    if(current === null)  {
      return undefined;
    }
    else if(val === current.val) {
      return current;
    }

    current = val < current.val ? current.left : current.right;

    return this.findRecursively(val, current);

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root, visited=[]) {
    visited.push(node.val);

    if(node.left) this.dfsPreOrder(node.left, visited);

    if(node.right) this.dfsPreOrder(node.right, visited);

    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root, visited=[]) {

    if(node.left) this.dfsInOrder(node.left, visited);

    visited.push(node.val); 

    if(node.right) this.dfsInOrder(node.right, visited);

    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root, visited=[]) {
    if(node.left) this.dfsPostOrder(node.left, visited);

    if(node.right) this.dfsPostOrder(node.right, visited);

    visited.push(node.val);

    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

    let nodeQueue = [this.root];
    let v = [];

    while(nodeQueue.length) {
      let current = nodeQueue.shift();
      v.push(current.val);
      if(current.left) nodeQueue.push(current.left);
      if(current.right) nodeQueue.push(current.right);
    }
    
    console.log(v)
    return v;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
