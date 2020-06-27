/**
 * @fileoverview level width unit test
 */
const { levelWidth } = require('./index');
const { TreeNode } = require('./treenode');

describe("Counter number of tree nodes at each level", () => {
  test("Leve width function should be defined", () => {
    expect(levelWidth).toBeDefined();
  });

  test("Should return level width", () => {
    const root = new TreeNode(0);
    root.add(1);
    root.add(2);
    root.add(3);
    root.children[0].add(4);
    root.children[2].add(5);
    expect(levelWidth(root)).toEqual([1, 3, 2]);
  });

  test("Should return level width", () => {
    const root = new TreeNode(0);
    root.add(1);
    root.add(2);
    root.add(3);
    root.children[0].add(41);
    root.children[0].add(42);
    root.children[0].add(43);
    root.children[0].children[0].add(123);
    root.children[2].add(5);
    root.children[2].add(6);
    expect(levelWidth(root)).toEqual([1, 3, 5, 1]);
  });
});
