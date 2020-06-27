/**
 * @fileoverview tree node
 * 1) Create a tree node class, its constructor accepts an argument that gets assigned
 * to the data property and initialize an empty array for storing tree nodes (children), 
 * tree node class should have methods 'add' and 'remove'
 */

class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new TreeNode(data));
  }
}

module.exports = {
  TreeNode,
};
