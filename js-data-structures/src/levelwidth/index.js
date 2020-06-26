/**
 * @fileoverview level width
 * given the root node of a tree, return an array where each element
 * is the width of the tree at each level
 */
const { TreeNode } = require('./treenode');

function levelWidth(root = new TreeNode()) {
  const separator = "s";
  const counter = [0];
  const queue = [root, separator];
  while (queue.length > 1) {
    let treeNode = queue.shift();
    if (treeNode === separator) {
      counter.push(0);
      queue.push(separator);
    } else {
      // the last counter element is for the current level of tree
      counter[counter.length - 1] += 1;
      queue.push(...treeNode.children);
    }
  }
  return counter;
}

module.exports = {
  levelWidth
};
