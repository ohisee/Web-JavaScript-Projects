/**
 * @fileoverview binary search tree unit test
 */
const { BinarySearchTreeNode } = require('./binarysearchtree');

describe("Binary search tree node", () => {
  test("Binary search tree constructor", () => {
    expect(BinarySearchTreeNode.prototype.constructor).toBeDefined();
  });

  test("Should insert into binary search tree", () => {
    const tree = new BinarySearchTreeNode(10);
    tree.insert(7);
    tree.insert(15);
    tree.insert(18);
    tree.insert(5);
    tree.insert(8);
    tree.insert(12);
    expect(tree.data).toEqual(10);
    expect(tree.left.data).toEqual(7);
    expect(tree.left.left.data).toEqual(5);
    expect(tree.left.right.data).toEqual(8);
    expect(tree.right.data).toEqual(15);
    expect(tree.right.left.data).toEqual(12);
    expect(tree.right.right.data).toEqual(18);
  });

  test("Should insert into binary search tree", () => {
    const tree = new BinarySearchTreeNode(10);
    tree.insertOnce(7);
    tree.insertOnce(15);
    tree.insertOnce(18);
    tree.insertOnce(5);
    tree.insertOnce(8);
    tree.insertOnce(12);
    expect(tree.data).toEqual(10);
    expect(tree.left.data).toEqual(7);
    expect(tree.left.left.data).toEqual(5);
    expect(tree.left.right.data).toEqual(8);
    expect(tree.right.data).toEqual(15);
    expect(tree.right.left.data).toEqual(12);
    expect(tree.right.right.data).toEqual(18);
  });

  test("Should do contain in binary search tree", () => {
    const tree = new BinarySearchTreeNode(10);
    tree.insert(7);
    tree.insert(15);
    tree.insert(18);
    tree.insert(-5);
    tree.insert(8);
    tree.insert(12);
    const expectedNode = tree.right.left;
    expect(tree.contains(12)).toEqual(expectedNode);
  });

  test("Should do contain in binary search tree", () => {
    const tree = new BinarySearchTreeNode(10);
    tree.insert(7);
    tree.insert(15);
    tree.insert(18);
    tree.insert(-5);
    tree.insert(8);
    tree.insert(12);
    const expectedNode = tree.left.right;
    expect(tree.contains(8)).toEqual(expectedNode);
  });

  test("Should do contain in binary search tree", () => {
    const tree = new BinarySearchTreeNode(10);
    tree.insert(7);
    tree.insert(15);
    tree.insert(18);
    tree.insert(-5);
    tree.insert(8);
    tree.insert(12);
    expect(tree.contains(118)).toEqual(null);
  });
});
