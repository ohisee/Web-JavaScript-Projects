/**
 * @fileoverview JS depth first search binary search tree 
 */
const { BinarySearchTree } = require("../binarysearchtree/binarysearchtree");

/**
 * implement depth first search traversing a binary search tree 
 */
/** @template T */
class DFSTree extends BinarySearchTree {
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
   * @param {TreeNodeType} treenode 
   * @param {T[]} visitedNodeData  
   */
  _traverseInorder(treenode, visitedNodeData = []) {
    if (treenode) {
      if (treenode.left) {
        this._traverseInorder(treenode.left, visitedNodeData);
      }
      visitedNodeData.push(treenode.data);
      if (treenode.right) {
        this._traverseInorder(treenode.right, visitedNodeData);
      }
    }
    return visitedNodeData;
  }

  /**
   * @param {TreeNodeType} treenode 
   * @param {T[]} visitedNodeData 
   */
  _traversePreorder(treenode, visitedNodeData = []) {
    if (treenode) {
      visitedNodeData.push(treenode.data);
      if (treenode.left) {
        this._traversePreorder(treenode.left, visitedNodeData);
      }
      if (treenode.right) {
        this._traversePreorder(treenode.right, visitedNodeData);
      }
    }
    return visitedNodeData;
  }

  /**
   * @param {TreeNodeType} treenode 
   * @param {T[]} visitedNodeData 
   */
  _traversePostorder(treenode, visitedNodeData = []) {
    if (treenode) {
      if (treenode.left) {
        this._traversePostorder(treenode.left, visitedNodeData);
      }
      if (treenode.right) {
        this._traversePostorder(treenode.right, visitedNodeData);
      }
      visitedNodeData.push(treenode.data);
    }
    return visitedNodeData;
  }

  /**
   * @returns {T[]} in order visited nodes of this binary search tree 
   */
  depthFirstSearchInorder() {
    return this._traverseInorder(this.root);
  }

  /**
   * @returns {T[]} pre order visited nodes of this binary search tree 
   */
  depthFirstSearchPreorder() {
    return this._traversePreorder(this.root);
  }

  /**
   * @returns {T[]} post order visited nodes of this binary search tree 
   */
  depthFirstSearchPostorder() {
    return this._traversePostorder(this.root);
  }
}

module.exports = {
  DFSTree,
};
