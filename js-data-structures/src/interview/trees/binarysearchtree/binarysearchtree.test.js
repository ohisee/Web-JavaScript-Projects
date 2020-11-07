/**
 * @fileoverview JS bianry search tree unit test 
 */
const { BinarySearchTree, TreeNode } = require("./binarysearchtree");

describe("Binary search tree", () => {
  test("Binary search tree class should be defined", () => {
    expect(BinarySearchTree.prototype.constructor).toBeDefined();
  });

  test("Binary search tree class should be able to create instance", () => {
    expect(() => {
      new BinarySearchTree();
    }).not.toThrow();
  });

  test("should do insert", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(100);
    binarySearchTree.insert(80);
    binarySearchTree.insert(110);
    binarySearchTree.insert(20);
    binarySearchTree.insert(86);
    binarySearchTree.insert(120);
    binarySearchTree.insert(101);
    expect(binarySearchTree.values()).toEqual([100, 80, 110, 20, 86, 101, 120]);
  });

  test("should do insert through tree node", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insertThroughTreeNode(100).insertThroughTreeNode(80)
      .insertThroughTreeNode(110)
      .insertThroughTreeNode(20)
      .insertThroughTreeNode(86)
      .insertThroughTreeNode(120)
      .insertThroughTreeNode(101);
    expect(binarySearchTree.values()).toEqual([100, 80, 110, 20, 86, 101, 120]);
  });

  test("should do lookup", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(100);
    binarySearchTree.insert(80);
    binarySearchTree.insert(110);
    binarySearchTree.insert(20);
    binarySearchTree.insert(86);
    binarySearchTree.insert(120);
    binarySearchTree.insert(101);
    expect(binarySearchTree.lookup(86)).toEqual(true);
  });

  test("should do lookup", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(100);
    binarySearchTree.insert(80);
    binarySearchTree.insert(110);
    binarySearchTree.insert(20);
    binarySearchTree.insert(86);
    binarySearchTree.insert(120);
    binarySearchTree.insert(101);
    expect(binarySearchTree.lookup(186)).toEqual(false);
  });

  test("should do recursive search node in tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(100);
    binarySearchTree.insert(80);
    binarySearchTree.insert(110);
    binarySearchTree.insert(20);
    binarySearchTree.insert(86);
    binarySearchTree.insert(120);
    binarySearchTree.insert(101);
    expect(binarySearchTree.search(80)).toEqual(true);
    expect(binarySearchTree.search(20)).toEqual(true);
    expect(binarySearchTree.search(101)).toEqual(true);
    expect(binarySearchTree.search(86)).toEqual(true);
    expect(binarySearchTree.search(120)).toEqual(true);
  });

  test("should do recursive search node not in tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(100);
    binarySearchTree.insert(80);
    binarySearchTree.insert(110);
    binarySearchTree.insert(20);
    binarySearchTree.insert(86);
    binarySearchTree.insert(120);
    binarySearchTree.insert(101);
    expect(binarySearchTree.search(186)).toEqual(false);
    expect(binarySearchTree.search(21)).toEqual(false);
    expect(binarySearchTree.search(19)).toEqual(false);
  });

  test("should do recursive search node in tree using tree node search", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(100);
    binarySearchTree.insert(80);
    binarySearchTree.insert(110);
    binarySearchTree.insert(20);
    binarySearchTree.insert(86);
    binarySearchTree.insert(120);
    binarySearchTree.insert(101);
    expect(binarySearchTree.searchThroughTreeNode(80)).toEqual(true);
    expect(binarySearchTree.searchThroughTreeNode(20)).toEqual(true);
    expect(binarySearchTree.searchThroughTreeNode(101)).toEqual(true);
    expect(binarySearchTree.searchThroughTreeNode(86)).toEqual(true);
    expect(binarySearchTree.searchThroughTreeNode(120)).toEqual(true);
  });

  test("should do recursive search node not in tree using tree node search", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(100);
    binarySearchTree.insert(80);
    binarySearchTree.insert(110);
    binarySearchTree.insert(20);
    binarySearchTree.insert(86);
    binarySearchTree.insert(120);
    binarySearchTree.insert(101);
    expect(binarySearchTree.searchThroughTreeNode(186)).toEqual(false);
    expect(binarySearchTree.searchThroughTreeNode(21)).toEqual(false);
    expect(binarySearchTree.searchThroughTreeNode(19)).toEqual(false);
  });

  test("should do remove", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(10);
    binarySearchTree.insert(7);
    binarySearchTree.insert(12);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(18);
    binarySearchTree.insert(21);
    binarySearchTree.insert(19);
    binarySearchTree.insert(25);
    expect(binarySearchTree.inOrderValues()).toEqual(
      [3, 7, 8, 10, 12, 18, 19, 21, 25]);
    binarySearchTree.remove(3);
    expect(binarySearchTree.inOrderValues()).toEqual(
      [7, 8, 10, 12, 18, 19, 21, 25]);
  });

  test("should do remove", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(10);
    binarySearchTree.insert(7);
    binarySearchTree.insert(12);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(18);
    binarySearchTree.insert(21);
    binarySearchTree.insert(19);
    binarySearchTree.insert(25);
    binarySearchTree.remove(8);
    expect(binarySearchTree.inOrderValues()).toEqual(
      [3, 7, 9, 10, 12, 18, 19, 21, 25]);
  });

  test("should do remove one node tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(10);
    binarySearchTree.remove(10);
    expect(binarySearchTree.inOrderValues()).toEqual([]);
  });

  test("should do remove one node with one child node", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(10);
    binarySearchTree.insert(7);
    binarySearchTree.remove(10);
    expect(binarySearchTree.inOrderValues()).toEqual([7]);
  });

  test("should do remove one node with one child node", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(10);
    binarySearchTree.insert(17);
    binarySearchTree.remove(10);
    expect(binarySearchTree.inOrderValues()).toEqual([17]);
  });

  test("should do remove one node with two child nodes", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(10);
    binarySearchTree.insert(17);
    binarySearchTree.insert(8);
    binarySearchTree.remove(10);
    expect(binarySearchTree.inOrderValues()).toEqual([8, 17]);
  });

  test("should do remove node not in tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(10);
    binarySearchTree.insert(17);
    binarySearchTree.insert(8);
    binarySearchTree.remove(101);
    expect(binarySearchTree.inOrderValues()).toEqual([8, 10, 17]);
  });

  test("should do remove all nodes", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(10);
    binarySearchTree.insert(7);
    binarySearchTree.insert(12);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(18);
    binarySearchTree.insert(21);
    binarySearchTree.insert(19);
    binarySearchTree.insert(25);
    binarySearchTree.remove(10);
    binarySearchTree.remove(7);
    binarySearchTree.remove(12);
    binarySearchTree.remove(3);
    binarySearchTree.remove(8);
    binarySearchTree.remove(9);
    binarySearchTree.remove(18);
    binarySearchTree.remove(21);
    binarySearchTree.remove(19);
    binarySearchTree.remove(25);
    expect(binarySearchTree.inOrderValues()).toEqual([]);
  });

  test("should do remove node", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(18);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.remove(8);
    expect(binarySearchTree.inOrderValues()).toEqual([9, 18]);
  });

  test("should do remove node", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(18);
    binarySearchTree.insert(20);
    binarySearchTree.insert(19);
    binarySearchTree.remove(20);
    expect(binarySearchTree.inOrderValues()).toEqual([18, 19]);
  });

  test("should do remove - two child nodes with right sub tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(10);
    binarySearchTree.insert(7);
    binarySearchTree.insert(12);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(11);
    binarySearchTree.insert(18);
    binarySearchTree.insert(9);
    binarySearchTree.insert(16);
    binarySearchTree.insert(19);
    binarySearchTree.insert(15);
    binarySearchTree.remove(12);
    expect(binarySearchTree.inOrderValues()).toEqual(
      [3, 7, 8, 9, 10, 11, 15, 16, 18, 19]);
  });

  test("should do validate binary search tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(20);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(15);
    binarySearchTree.insert(120);
    //     9
    //  6     20 
    // 1  7  15 120
    expect(binarySearchTree.isValidByInorderTraversal()).toEqual(true);
  });

  test("should do validate binary search tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(20);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(15);
    binarySearchTree.insert(120);
    //     9
    //  6     20 
    // 1  7  15 120
    binarySearchTree.root.left.left.left = new TreeNode(8);
    binarySearchTree.root.left.left.right = new TreeNode(12);
    //     9
    //  6     20 
    // 1  7  15  120
    //      8  12    
    expect(binarySearchTree.root.left.left.left.data).toEqual(8);
    expect(binarySearchTree.root.left.left.right.data).toEqual(12);
    expect(binarySearchTree.isValidByInorderTraversal()).toEqual(false);
  });

  test("should do validate binary search tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(20);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(15);
    binarySearchTree.insert(120);
    //     9
    //  6     20 
    // 1  7  15 120
    binarySearchTree.root.left.data = 10;
    binarySearchTree.root.right.data = 8;
    //     9
    //  10     8 
    // 1  7  15 120
    expect(binarySearchTree.root.left.data).toEqual(10);
    expect(binarySearchTree.root.right.data).toEqual(8);
    expect(binarySearchTree.isValidByInorderTraversal()).toEqual(false);
  });

  test("should do validate binary search tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(20);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(15);
    binarySearchTree.insert(120);
    //     9
    //  6     20 
    // 1  7  15 120
    expect(binarySearchTree.validate(binarySearchTree.root)).toEqual(true);
  });

  test("should do validate binary search tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(20);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(15);
    binarySearchTree.insert(120);
    //     9
    //  6     20 
    // 1  7  15 120
    binarySearchTree.root.left.left.left = new TreeNode(8);
    binarySearchTree.root.left.left.right = new TreeNode(12);
    //     9
    //  6     20 
    // 1  7  15  120
    //      8  12    
    expect(binarySearchTree.root.left.left.left.data).toEqual(8);
    expect(binarySearchTree.root.left.left.right.data).toEqual(12);
    expect(binarySearchTree.validate(binarySearchTree.root)).toEqual(false);
  });

  test("should do validate binary search tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(20);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(15);
    binarySearchTree.insert(120);
    //     9
    //  6     20 
    // 1  7  15 120
    expect(binarySearchTree.validateBinarySearchTreeByInorderTraverse()).toEqual(true);
  });

  test("should do validate binary search tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(20);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(15);
    binarySearchTree.insert(120);
    //     9
    //  6     20 
    // 1  7  15 120
    binarySearchTree.root.left.left.left = new TreeNode(8);
    binarySearchTree.root.left.left.right = new TreeNode(12);
    //     9
    //  6     20 
    // 1  7  15  120
    //      8  12    
    expect(binarySearchTree.root.left.left.left.data).toEqual(8);
    expect(binarySearchTree.root.left.left.right.data).toEqual(12);
    expect(binarySearchTree.validateBinarySearchTreeByInorderTraverse()).toEqual(false);
  });

  test("should do validate binary search tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.root = new TreeNode(1);
    binarySearchTree.root.left = new TreeNode(1);
    binarySearchTree.root.right = new TreeNode(1);
    binarySearchTree.root.left.left = new TreeNode(1);
    binarySearchTree.root.left.right = new TreeNode(1);
    binarySearchTree.root.right.left = new TreeNode(1);
    binarySearchTree.root.right.right = new TreeNode(1);
    //     1
    //  1     1 
    // 1  1  1  1
    expect(binarySearchTree.validate(binarySearchTree.root)).toEqual(false);
  });

  test("should do validate binary search tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.root = new TreeNode(1);
    binarySearchTree.root.left = new TreeNode(1);
    binarySearchTree.root.right = new TreeNode(1);
    binarySearchTree.root.left.left = new TreeNode(1);
    binarySearchTree.root.left.right = new TreeNode(1);
    binarySearchTree.root.right.left = new TreeNode(1);
    binarySearchTree.root.right.right = new TreeNode(1);
    //     1
    //  1     1 
    // 1  1  1  1
    expect(binarySearchTree.isValidByInorderTraversal()).toEqual(false);
  });

  test("should do validate binary search tree", () => {
    /** @type {BinarySearchTree<number>} */
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.root = new TreeNode(1);
    binarySearchTree.root.left = new TreeNode(1);
    binarySearchTree.root.right = new TreeNode(1);
    binarySearchTree.root.left.left = new TreeNode(1);
    binarySearchTree.root.left.right = new TreeNode(1);
    binarySearchTree.root.right.left = new TreeNode(1);
    binarySearchTree.root.right.right = new TreeNode(1);
    //     1
    //  1     1 
    // 1  1  1  1
    expect(binarySearchTree.validateBinarySearchTreeByInorderTraverse()).toEqual(false);
  });
});
