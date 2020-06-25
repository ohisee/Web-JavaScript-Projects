/**
 * @fileoverview tree
 * 1) Create a tree node class, its constructor accepts an argument that gets assigned
 * to the data property and initialize an empty array for storing tree nodes (children), 
 * tree node class should have methods 'add' and 'remove'
 * 2) Create a tree class, its constructor should initialize a 'root' property to null
 * 3) Implement 'traverseBreadthFirst' and 'traverseDepthFirst' on the tree class,
 * each method should accept a function that gets called with each element in the tree
 */

class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new TreeNode(data));
  }

  remove(data) {
    this.children = this.children.filter(treeNode => treeNode.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insertAtRoot(data) {
    if (!this.root) {
      this.root = new TreeNode(data);
    } else {
      this.root.add(data);
    }
    return this.root;
  }

  /**
   * accept a function
   */
  traverseBreadthFirst(fn = function (node) { }) {
    if (this.root) {
      const queue = [this.root];
      while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
          if (node.children.length > 0) {
            queue.push(...node.children);
          }
          fn(node);
        }
      }
    }
  }

  /**
   * accept a function
   */
  traverseDepthFirst(fn = function (node) { }) {
    if (this.root) {
      const queue = [this.root];
      while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
          if (node.children.length > 0) {
            queue.unshift(...node.children);
          }
          fn(node);
        }
      }
    }
  }
}

module.exports = {
  TreeNode,
  Tree,
};
