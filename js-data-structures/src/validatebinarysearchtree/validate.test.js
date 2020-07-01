/**
 * @fileoverview validate binary search tree
 */
const { validate } = require('./validate');
const { BinarySearchTreeNode } = require('./binarysearchtreenode');

describe("Validate binary search tree", () => {
  test("Validate function is defined", () => {
    expect(validate).toBeDefined();
  });

  test("Should validate binary search tree", () => {
    const tree = new BinarySearchTreeNode(10);
    tree.insert(7);
    tree.insert(15);
    tree.insert(18);
    tree.insert(-5);
    tree.insert(8);
    tree.insert(12);
    expect(validate(tree)).toEqual(true);
  });

  test("Should validate binary search tree", () => {
    const tree = new BinarySearchTreeNode(10);
    tree.insert(7);
    tree.insert(15);
    tree.insert(18);
    tree.insert(5);
    tree.insert(8);
    tree.insert(12);
    tree.left.right.right = new BinarySearchTreeNode(110);
    expect(validate(tree)).toEqual(false);
  });

  test("Should validate binary search tree", () => {
    const tree = new BinarySearchTreeNode(10);
    tree.insert(7);
    tree.insert(15);
    tree.insert(18);
    tree.insert(5);
    tree.insert(8);
    tree.insert(12);
    tree.right.right.left = new BinarySearchTreeNode(9);
    expect(validate(tree)).toEqual(false);
  });

  test("Should validate binary search tree", () => {
    const tree = new BinarySearchTreeNode(10);
    tree.insert(7);
    tree.insert(15);
    tree.insert(18);
    tree.insert(5);
    tree.insert(8);
    tree.insert(12);
    tree.left.data = 9;
    expect(validate(tree)).toEqual(false);
  });
});
