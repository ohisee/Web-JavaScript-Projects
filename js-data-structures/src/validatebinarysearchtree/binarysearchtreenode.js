/**
 * @fileoverview binary search tree implementation 
 * 1) implement the BinarySearchTreeNode class to create a binary search tree, 
 * the constructor should initialize values 'data', 'left', and 'right'
 * 2) implement the 'insert' method for the BinarySearchTreeNode class, 
 * insert should accept an argument 'data', then create an insert a new node 
 * at the appropriate location in the tree
 * 3) implement the 'contains' method for the BinarySearchTreeNode class, 
 * contains should accept a 'data' argument and return the Node in the tree 
 * with the same value
 */

class BinarySearchTreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insert(data) {
    function insertHelper(treeNode) {
      if (data < treeNode.data) {
        if (treeNode.left) {
          insertHelper(treeNode.left);
        } else {
          treeNode.left = new BinarySearchTreeNode(data);
        }
      } else {
        if (treeNode.right) {
          insertHelper(treeNode.right);
        } else {
          treeNode.right = new BinarySearchTreeNode(data);
        }
      }
    }
    insertHelper(this);
  }

  insertOnce(data) {
    if (data < this.data && this.left) {
      this.left.insertOnce(data);
    } else if (data < this.data) { // no more node in left
      this.left = new BinarySearchTreeNode(data);
    } else if (data > this.data && this.right) {
      this.right.insertOnce(data);
    } else if (data > this.data) { // no more node in right
      this.right = new BinarySearchTreeNode(data);
    }
  }

  contains(data) {
    if (data === this.data) {
      return this;
    } else if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    } else {
      return null;
    }
  }
}

module.exports = {
  BinarySearchTreeNode
};
