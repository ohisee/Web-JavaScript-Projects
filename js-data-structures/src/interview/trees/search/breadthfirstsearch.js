/**
 * @fileoverview JS breadth first search binary search tree 
 */
const { BinarySearchTree } = require("../binarysearchtree/binarysearchtree");

/**
 * implement breadth first search traversing a binary search tree 
 */
/** @template T */
class BSFTree extends BinarySearchTree {
  /**
   * @typedef {Object} TreeNodeType
   * @property {T} data 
   * @property {TreeNodeType} left 
   * @property {TreeNodeType} right
   */

  constructor() {
    super();
  }

  /**
   * iterative approach of breadth first search (traveral) 
   * @returns {T[]} visited node data of this binary search tree  
   */
  breadthFirstSearch() {
    const visitedNodeData = [];
    const queue = []; // will grow, momery consumption  
    if (this.root) {
      queue.push(this.root);
      while (queue.length > 0) {
        let currentNode = queue.shift();
        visitedNodeData.push(currentNode.data);

        if (currentNode && currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode && currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }
    return visitedNodeData;
  }

  /**
   * recursive approach of breadth first search (traveral) 
   * @param {TreeNodeType[]} queue queue in array to store tree nodes while traversing 
   * @param {T[]} visitedNodeData visited node data of this binary search tree  
   */
  breadthFirstSearchRecursive(queue = [this.root], visitedNodeData = []) {
    if (!this.root) {
      return [];
    }
    if (queue.length === 0) {
      return visitedNodeData;
    }
    const currentNode = queue.shift();
    visitedNodeData.push(currentNode.data);
    if (currentNode && currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode && currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchRecursive(queue, visitedNodeData);
  }
}

module.exports = {
  BSFTree,
};
