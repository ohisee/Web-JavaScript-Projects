/**
 * @fileoverview validate binary search tree 
 * given a node, validate the binary search tree, ensuring that every node's 
 * left hand child is less than the parent node's value, and that every 
 * node's right hand child is greater than the parent
 */
const { BinarySearchTreeNode } = require('./binarysearchtreenode');

/**
 * validate the entire binary search tree by traversing through the tree nodes 
 * using depth first traversal
 * 
 * set both lower and upper limits to null at first
 * create a boolean result variable and initialize to true
 * check if tree node parameter is null, if not null, proceed to next step 
 * check if upper is not null and tree node data is greater than upper, if true, return false
 * check if lower is not null and tree node data is less than lower, if true, return false
 * if result is still true and tree node has left, 
 *    (start recursive call) validate tree node left, using same lower, and set tree node data as new upper
 * if result is still true and tree node has right,
 *    (start recursive call) validate tree node right, using same upper, and set tree node data as new lower
 * return the result when done traversing the tree node
 * 
 * @param {BinarySearchTreeNode} treeNode
 */
function validate(treeNode, lower = null, upper = null) {
  let result = true;
  if (treeNode) {
    if (upper && treeNode.data > upper) {
      result = false;
    }
    if (lower && treeNode.data < lower) {
      result = false;
    }
    if (result && treeNode.left) {
      result = validate(treeNode.left, lower, treeNode.data);
    }
    if (result && treeNode.right) {
      result = validate(treeNode.right, treeNode.data, upper);
    }
  }
  return result;
}

module.exports = {
  validate
};
