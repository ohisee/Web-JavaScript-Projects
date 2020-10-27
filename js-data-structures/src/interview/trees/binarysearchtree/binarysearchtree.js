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

  /**
   * @param {T} value 
   */
  search(value) {
    if (value === this.data) {
      return true;
    }
    if (value < this.data && this.left) {
      return this.left.search(value);
    } else if (value > this.data && this.right) {
      return this.right.search(value);
    }
    return false;
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
   * @param {T} value 
   * @param {TreeNode<T>} [treenode = this.root] 
   */
  search(value, treenode = this.root) {
    if (treenode) {
      if (treenode.data === value) {
        return true;
      }
      if (value < treenode.data) {
        return this.search(value, treenode.left);
      } else if (value > treenode.data) {
        return this.search(value, treenode.right);
      }
    }
    return false;
  }

  /**
   * @param {T} value 
   */
  searchThroughTreeNode(value) {
    if (this.root) {
      return this.root.search(value);
    }
    return false;
  }

  /**
   * @param {TreeNode<T>} treenode 
   * @returns {TreeNode<T>} tree node with min value 
   */
  _minValueNode(treenode) {
    let currentNode = treenode;
    while (currentNode && currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  /**
   * @param {T} value 
   * @param {TreeNode<T>} [treenode = this.root]  
   */
  remove(value, treenode = this.root) {
    let parentNode = null;
    let currentNode = treenode;

    while (currentNode && currentNode.data !== value) {
      parentNode = currentNode;
      if (currentNode.left && value < currentNode.data) {
        currentNode = currentNode.left;
      } else if (currentNode.right && value > currentNode.data) {
        currentNode = currentNode.right;
      }
    }

    if (currentNode) {
      // leaf
      if (currentNode.left === null && currentNode.right === null) {
        if (parentNode === null) {
          currentNode = null;
        } else if (parentNode.right === currentNode) {
          parentNode.right = null;
        } else if (parentNode.left === currentNode) {
          parentNode.left = null;
        }
      }
      // one child, either left or right 
      else if (currentNode.left && !currentNode.right) {
        if (parentNode === null) {
          currentNode = currentNode.left;
        } else {
          parentNode.left = currentNode.left;
        }
      }
      else if (currentNode.right && !currentNode.left) {
        if (parentNode === null) {
          currentNode = currentNode.right;
        } else {
          parentNode.right = currentNode.right;
        }
      }
      // with two child nodes
      else {
        let minValNode = this._minValueNode(currentNode.right);
        currentNode.data = minValNode.data;
        this.remove(minValNode.data, currentNode.right);
      }
    }
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
   * traverse this tree using depth first in order traveral  
   * @param {visited} fn 
   * @param {TreeNode<T>} [treenode = this.root]  
   */
  _depthFirstInOrderTraverse(fn, treenode = this.root) {
    if (treenode) {
      this._depthFirstInOrderTraverse(fn, treenode.left);
      fn(treenode);
      this._depthFirstInOrderTraverse(fn, treenode.right);
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

  /**
   * collect values of this binary search tree for testing 
   */
  inOrderValue() {
    const val = [];
    this._depthFirstInOrderTraverse(function (treenode) {
      val.push(treenode.data);
    });
    return val;
  }
}

module.exports = {
  BinarySearchTree,
};
