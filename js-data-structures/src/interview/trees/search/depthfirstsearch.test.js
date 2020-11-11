/**
 * @fileoverview JS depth first search unit test 
 */
const { DFSTree } = require("./depthfirstsearch");

describe("DFSTree depth first search", () => {
  test("DFSTree class should be defined", () => {
    expect(DFSTree.prototype.constructor).toBeDefined();
  });

  test("DFSTree class should be able to create instance", () => {
    expect(() => {
      new DFSTree();
    }).not.toThrow();
  });

  test("should do depth first search in order (traversal)", () => {
    /** @type {DFSTree<number>} */
    const binarySearchTree = new DFSTree();
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
    expect(binarySearchTree.depthFirstSearchInorder())
      .toEqual([1, 6, 7, 9, 15, 20, 120]);
  });

  test("should do depth first search pre order (traversal)", () => {
    /** @type {DFSTree<number>} */
    const binarySearchTree = new DFSTree();
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
    expect(binarySearchTree.depthFirstSearchPreorder())
      .toEqual([9, 6, 1, 7, 20, 15, 120]);
  });

  test("should do depth first search post order (traversal)", () => {
    /** @type {DFSTree<number>} */
    const binarySearchTree = new DFSTree();
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
    expect(binarySearchTree.depthFirstSearchPostorder())
      .toEqual([1, 7, 6, 15, 120, 20, 9]);
  });

  test("should do depth first search pre order (traversal) empty tree", () => {
    /** @type {DFSTree<number>} */
    const binarySearchTree = new DFSTree();
    expect(binarySearchTree.depthFirstSearchPreorder()).toEqual([]);
  });

  test("should do depth first search in order (traversal) empty tree", () => {
    /** @type {DFSTree<number>} */
    const binarySearchTree = new DFSTree();
    expect(binarySearchTree.depthFirstSearchInorder()).toEqual([]);
  });

  test("should do depth first search post order (traversal) empty tree", () => {
    /** @type {DFSTree<number>} */
    const binarySearchTree = new DFSTree();
    expect(binarySearchTree.depthFirstSearchPostorder()).toEqual([]);
  });

  test("should do depth first search pre order (traversal) one node", () => {
    /** @type {DFSTree<number>} */
    const binarySearchTree = new DFSTree();
    binarySearchTree.insert(20);
    expect(binarySearchTree.depthFirstSearchPreorder()).toEqual([20]);
  });

  test("should do depth first search in order (traversal) one node", () => {
    /** @type {DFSTree<number>} */
    const binarySearchTree = new DFSTree();
    binarySearchTree.insert(20);
    expect(binarySearchTree.depthFirstSearchInorder()).toEqual([20]);
  });

  test("should do depth first search post order (traversal) one node", () => {
    /** @type {DFSTree<number>} */
    const binarySearchTree = new DFSTree();
    binarySearchTree.insert(20);
    expect(binarySearchTree.depthFirstSearchPostorder()).toEqual([20]);
  });
});
