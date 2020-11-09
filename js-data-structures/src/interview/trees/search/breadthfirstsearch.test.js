/**
 * @fileoverview JS breadth first search unit test 
 */
const { BSFTree } = require("./breadthfirstsearch");

describe("BSFTree breadth first search", () => {
  test("BSFTree class should be defined", () => {
    expect(BSFTree.prototype.constructor).toBeDefined();
  });

  test("BSFTree class should be able to create instance", () => {
    expect(() => {
      new BSFTree();
    }).not.toThrow();
  });

  test("should do breadth first search (traversal) empty tree", () => {
    /** @type {BSFTree<number>} */
    const binarySearchTree = new BSFTree();
    expect(binarySearchTree.breadthFirstSearch()).toEqual([]);
  });

  test("should do breadth first search (traversal) one node", () => {
    /** @type {BSFTree<number>} */
    const binarySearchTree = new BSFTree();
    binarySearchTree.insert(1);
    expect(binarySearchTree.breadthFirstSearch()).toEqual([1]);
  });

  test("should do breadth first search (traversal)", () => {
    /** @type {BSFTree<number>} */
    const binarySearchTree = new BSFTree();
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(20);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(15);
    binarySearchTree.insert(120);
    expect(binarySearchTree.breadthFirstSearch())
      .toEqual([9, 6, 20, 1, 7, 15, 120]);
  });

  test("should do breadth first search (traversal) recursive empty tree", () => {
    /** @type {BSFTree<number>} */
    const binarySearchTree = new BSFTree();
    // default parameters are set in BSFTree class 
    // no need to specifically set any parameters here, 
    // i.e. binarySearchTree.breadthFirstSearchRecursive([binarySearchTree.root], [])
    expect(binarySearchTree.breadthFirstSearchRecursive()).toEqual([]);
  });

  test("should do breadth first search (traversal) recursive one node", () => {
    /** @type {BSFTree<number>} */
    const binarySearchTree = new BSFTree();
    binarySearchTree.insert(1);
    expect(binarySearchTree.breadthFirstSearchRecursive()).toEqual([1]);
  });

  test("should do breadth first search (traversal) recursive", () => {
    /** @type {BSFTree<number>} */
    const binarySearchTree = new BSFTree();
    binarySearchTree.insert(9);
    binarySearchTree.insert(6);
    binarySearchTree.insert(20);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(15);
    binarySearchTree.insert(120);
    // default parameters are set in BSFTree class 
    // no need to specifically set any parameters here, 
    // i.e. binarySearchTree.breadthFirstSearchRecursive([binarySearchTree.root], [])
    expect(binarySearchTree.breadthFirstSearchRecursive())
      .toEqual([9, 6, 20, 1, 7, 15, 120]);
  });
});
