/**
 * @fileoverview binary search tree
 */

class BinarySearchTreeNode<T> {

  value: T;
  left: BinarySearchTreeNode<T> | null;
  right: BinarySearchTreeNode<T> | null;

  constructor(val: T) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

export type BinarySearchTreeNodeType<T> = BinarySearchTreeNode<T>;

export class BinarySearchTree<T> {

  private root: BinarySearchTreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(val: T) {
    let newNode = new BinarySearchTreeNode<T>(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current: BinarySearchTreeNode<T> = this.root;
      let done = false;
      while (!done) {
        if (val === current.value) { // if val exists in this tree, just ignore
          done = true;
        } else {
          if (val > current.value) {  // greater
            if (current.right !== null) {
              current = current.right;
            } else {
              current.right = newNode;
              done = true;
            }
          } else { // less
            if (current.left !== null) {
              current = current.left;
            } else {
              current.left = newNode;
              done = true;
            }
          }
        }
      }
    }
    return this;
  }

  find(val: T): boolean | BinarySearchTreeNode<T> {
    if (this.root === null) {
      return false;
    } else {
      let current: BinarySearchTreeNode<T> | null = this.root;
      while (current !== null) {
        if (val > current.value) {
          current = current.right;
        } else if (val < current.value) {
          current = current.left;
        } else { // equal
          return current;
        }
      }
      return false;
    }
  }

  contains(val: T): boolean {
    if (this.root === null) {
      return false;
    } else {
      let current: BinarySearchTreeNode<T> | null = this.root;
      while (current !== null) {
        if (val > current.value) {
          current = current.right;
        } else if (val < current.value) {
          current = current.left;
        } else { // equal
          return true;
        }
      }
      return false;
    }
  }

  getRoot() {
    return this.root;
  }
}
