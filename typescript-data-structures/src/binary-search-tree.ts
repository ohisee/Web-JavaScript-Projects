/**
 * @fileoverview binary search tree
 */

import { Queue } from "./queue-linkedlist";

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

  /**
   * Breadth first search traversal using a queue to 
   * track visited data
   */
  breadthFirstSearch(): T[] {
    const queue: BinarySearchTreeNode<T>[] = [];
    const visitedData: T[] = [];
    let bstNode: BinarySearchTreeNode<T> | null | undefined = this.root;
    if (bstNode !== null) {
      queue.push(bstNode);
    }
    while (queue.length > 0) {
      bstNode = queue.shift();
      if (bstNode) {
        visitedData.push(bstNode.value);
        if (bstNode.left) {
          queue.push(bstNode.left);
        }
        if (bstNode.right) {
          queue.push(bstNode.right);
        }
      }
    }
    return visitedData;
  }

  /**
   * Breadth first search traversal
   */
  breadthFirstSearchV2(): T[] {
    const queue: Queue<BinarySearchTreeNode<T>> = new Queue();
    const visitedData: T[] = [];
    if (this.root !== null) {
      queue.enqueue(this.root);
    }
    while (!queue.isEmpty()) {
      let bstNode = queue.dequeue();
      if (bstNode) {
        visitedData.push(bstNode.value);
        if (bstNode.left) {
          queue.enqueue(bstNode.left);
        }
        if (bstNode.right) {
          queue.enqueue(bstNode.right);
        }
      }
    }
    return visitedData;
  }

  /**
   * Depth first search pre order traversal
   */
  depthFirstSearchPreOrder(): T[] {
    const visited: T[] = [];
    let current = this.root;
    /**
     * Helper function for depth first search pre order traverse
     */
    function preOrderTraverse(visited: T[], treeNode: BinarySearchTreeNode<T>) {
      visited.push(treeNode.value);
      if (treeNode.left !== null) {
        preOrderTraverse(visited, treeNode.left);
      }
      if (treeNode.right !== null) {
        preOrderTraverse(visited, treeNode.right);
      }
      return;
    }

    if (current !== null) {
      preOrderTraverse(visited, current);
    }
    return visited;
  }

  /**
   * Depth first search post order traversal
   */
  depthFirstSearchPostOrder(): T[] {
    const visited: T[] = [];
    /**
     * Helper function for depth first search post order traverse
     */
    function postOrderTraverse(visited: T[], treeNode: BinarySearchTreeNode<T>) {
      if (treeNode.left !== null) {
        postOrderTraverse(visited, treeNode.left);
      }
      if (treeNode.right !== null) {
        postOrderTraverse(visited, treeNode.right);
      }
      visited.push(treeNode.value);
      return;
    }

    if (this.root !== null) {
      postOrderTraverse(visited, this.root);
    }
    return visited;
  }

  /**
   * Depth first search in order traversal
   */
  depthFirstSearchInOrder(): T[] {
    const visited: T[] = [];
    /**
     * Helper function for depth first search in order traverse
     */
    function inOrderTraverse(visited: T[], treeNode: BinarySearchTreeNode<T>) {
      if (treeNode.left !== null) {
        inOrderTraverse(visited, treeNode.left);
      }
      visited.push(treeNode.value);
      if (treeNode.right !== null) {
        inOrderTraverse(visited, treeNode.right);
      }
      return;
    }

    if (this.root !== null) {
      inOrderTraverse(visited, this.root);
    }
    return visited;
  }

  getRoot() {
    return this.root;
  }
}
