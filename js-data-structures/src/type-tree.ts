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

  insertAtRoot(data: T): TreeNode<T> {
    if (!this.root) {
      this.root = new TreeNode(data);
    } else {
      this.root.add(data);
    }
    return this.root;
  }

  traverseBreadthFirst(fn: (node: TreeNode<T>) => void) {
    if (this.root) {
      const queue: TreeNode<T>[] = [this.root];
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

  traverseDepthFirst(fn: (node: TreeNode<T>) => void) {
    if (this.root) {
      const queue: TreeNode<T>[] = [this.root];
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

console.log("---start---");
const tree = new Tree();
tree.insertAtRoot("root-node");
tree.insertAtRoot("root-node-child-node-1");
tree.insertAtRoot("root-node-child-node-2");
tree.insertAtRoot("root-node-child-node-3");
tree.root!.children[0].add("root-node-child-node-1-1");
tree.root!.children[0].add("root-node-child-node-1-2");
tree.root!.children[1].add("root-node-child-node-2-1");
console.log(JSON.stringify(tree, null, 2));
const walker: string[] = [];
tree.traverseBreadthFirst(node => {
  walker.push(node.data as string);
});
console.log(walker);
walker.length = 0; // clear the array
tree.traverseDepthFirst(node => {
  walker.push(node.data as string);
});
console.log(walker);
