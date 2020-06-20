/**
 * @fileoverview tree in typescript
 */

class TreeNode<T> {

  data: T | null;
  children: TreeNode<T>[];

  constructor(data: T) {
    this.data = data;
    this.children = [];
  }

  add(data: T) {
    this.children.push(new TreeNode(data));
  }

  remove(data: T) {
    this.children = this.children.filter(treeNode => treeNode.data !== data);
  }
}

class Tree<T> {

  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }
}
