/**
 * @fileoverview JS binary search tree 
 */
const { Queue } = require("../../queues/queue")

/** @template T */
class TreeNode {
  /**
   * @param {T} value 
   * @param {TreeNode<T>} left 
   * @param {TreeNode<T>} right 
   */
  constructor(value, left = null, right = null) {
    this.data = value;
    this.left = left;
    this.right = right;
  }

  /**
   * skip inserting data value that is equal to this tree node's data 
   * @param {T} value 
   */
  insert(value) {
    if (value < this.data && this.left) {
      this.left.insert(value);
    } else if (value < this.data) {
      this.left = new TreeNode(value);
    } else if (value > this.data && this.right) {
      this.right.insert(value);
    } else if (value > this.data) {
      this.right = new TreeNode(value);
    }
  }
}

/** @template T */
class BinarySearchTree {
  constructor() {
    /** @type {TreeNode<T> | null} */
    this.root = null;
  }

  /**
   * skip inserting data value that is equal to this tree node's data 
   * @param {T} value 
   */
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.data && currentNode.left) {
          currentNode = currentNode.left;
        } else if (value < currentNode.data) {
          currentNode.left = newNode;
          break;
        } else if (value > currentNode.data && currentNode.right) {
          currentNode = currentNode.right;
        } else if (value > currentNode.data) {
          currentNode.right = newNode;
          break;
        }
      }
    }
    return this;
  }

  /**
   * @param {T} value 
   */
  insertThroughTreeNode(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this.root.insert(value);
    }
    return this;
  }

  /**
   * @param {T} value 
   */
  lookup(value) {
    if (this.root) {
      let currentNode = this.root;
      while (currentNode) {
        if (value === currentNode.data) {
          return true;
        }
        if (value < currentNode.data) {
          currentNode = currentNode.left;
        } else if (value > currentNode.data) {
          currentNode = currentNode.right;
        }
      }
    }
    return false;
  }

  /**
   * @callback visited
   * @param {TreeNode<T>} treenode 
   */

  /**
   * traverse this tree using breadth first traveral using a queue 
   * @param {visited} fn 
   */
  _breadthFirstTraverse(fn) {
    if (this.root) {
      /** @type {Queue<TreeNode<T>>} */
      const queue = new Queue(); // if using array, const queue = [this.root];
      queue.enqueue(this.root);
      while (!queue.isEmpty()) {
        // if using array as queue, call array's shift first element  
        let treenode = queue.dequeue();
        if (treenode && treenode.left) {
          // if using array as queue, call array's push 
          queue.enqueue(treenode.left);
        }
        if (treenode && treenode.right) {
          // if using array as queue, call array's push 
          queue.enqueue(treenode.right);
        }
        fn(treenode);
      }
    }
  }

  /**
   * collect values of this binary search tree for testing 
   */
  values() {
    const val = [];
    this._breadthFirstTraverse(function (treenode) {
      val.push(treenode.data);
    });
    return val;
  }
}

module.exports = {
  BinarySearchTree,
};
