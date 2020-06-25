/**
 * @fileoverview tree node and tree unit test
 */
const { TreeNode, Tree } = require("./tree");

describe("Tree node class", () => {
  test("Tree node constructor is defined", () => {
    expect(TreeNode.prototype.constructor).toBeDefined();
  });

  test("Tree node should have data and children properties", () => {
    const treeNode = new TreeNode("walker");
    expect(treeNode.data).toEqual("walker");
    expect(treeNode.children.length).toEqual(0);
  });

  test("Tree node should add children", () => {
    const treeNode = new TreeNode("walker");
    treeNode.add("walker-node")
    expect(treeNode.children.length).toEqual(1);
    expect(treeNode.children[0].data).toEqual("walker-node");
    expect(treeNode.children[0].children).toEqual([]);
  });

  test("Tree node should remove children", () => {
    const treeNode = new TreeNode("walker");
    treeNode.add("walker-node");
    expect(treeNode.children.length).toEqual(1);
    treeNode.remove("walker-node");
    expect(treeNode.children.length).toEqual(0);
  });
});

describe("Tree class", () => {
  test("Tree constructor is defined", () => {
    expect(Tree.prototype.constructor).toBeDefined();
  });

  test("Tree should do breadth first traversal", () => {
    const walker = [];
    const tree = new Tree();
    tree.insertAtRoot("root-node");
    tree.insertAtRoot("root-node-child-node-1");
    tree.insertAtRoot("root-node-child-node-2");
    tree.insertAtRoot("root-node-child-node-3");
    tree.root.children[0].add("root-node-child-node-1-1");
    tree.root.children[0].add("root-node-child-node-1-2");
    tree.root.children[1].add("root-node-child-node-2-1");
    tree.traverseBreadthFirst(node => {
      walker.push(node.data);
    });
    expect(walker).toEqual([
      "root-node",
      "root-node-child-node-1", "root-node-child-node-2", "root-node-child-node-3",
      "root-node-child-node-1-1", "root-node-child-node-1-2",
      "root-node-child-node-2-1",
    ]);
  });

  test("Tree should do depth first traversal", () => {
    const walker = [];
    const tree = new Tree();
    tree.insertAtRoot("root-node");
    tree.insertAtRoot("root-node-child-node-1");
    tree.insertAtRoot("root-node-child-node-2");
    tree.insertAtRoot("root-node-child-node-3");
    tree.root.children[0].add("root-node-child-node-1-1");
    tree.root.children[0].add("root-node-child-node-1-2");
    tree.root.children[1].add("root-node-child-node-2-1");
    tree.traverseDepthFirst(node => {
      walker.push(node.data);
    });
    expect(walker).toEqual([
      "root-node",
      "root-node-child-node-1",
      "root-node-child-node-1-1",
      "root-node-child-node-1-2",
      "root-node-child-node-2",
      "root-node-child-node-2-1",
      "root-node-child-node-3",
    ]);
  });
});
