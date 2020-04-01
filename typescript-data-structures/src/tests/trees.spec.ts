/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { BinarySearchTree, BinarySearchTreeNodeType } from "../binary-search-tree";

describe('Trees', () => {

  describe('Binary search tree', () => {

    let binarySearchTree: BinarySearchTree<number>;

    beforeEach(() => {
      binarySearchTree = new BinarySearchTree();
    });

    it('Should do insert one node', () => {
      binarySearchTree.insert(10);
      expect(binarySearchTree.getRoot()?.value).equals(10);
      expect(binarySearchTree.getRoot()?.left).equals(null);
      expect(binarySearchTree.getRoot()?.right).equals(null);
    });

    it('Should do insert three nodes', () => {
      binarySearchTree.insert(10).insert(12).insert(9);
      expect(binarySearchTree.getRoot()?.value).equals(10);
      expect(binarySearchTree.getRoot()?.left?.value).equals(9);
      expect(binarySearchTree.getRoot()?.right?.value).equals(12);
    });

    it('Should do insert multiple nodes', () => {
      binarySearchTree.insert(10).insert(12).insert(9).insert(20).insert(15).insert(7).insert(8).insert(10);
      expect(binarySearchTree.getRoot()?.value).equals(10);
      expect(binarySearchTree.getRoot()?.left?.value).equals(9);
      expect(binarySearchTree.getRoot()?.right?.value).equals(12);
      expect(binarySearchTree.getRoot()?.right?.right?.value).equals(20);
      expect(binarySearchTree.getRoot()?.right?.right?.left?.value).equals(15);
      expect(binarySearchTree.getRoot()?.left?.left?.value).equals(7);
      expect(binarySearchTree.getRoot()?.left?.left?.right?.value).equals(8);
    });

    it('Should do find one node', () => {
      binarySearchTree.insert(10);
      expect((binarySearchTree.find(10) as BinarySearchTreeNodeType<number>).value).equals(10);
      expect(binarySearchTree.find(11)).equals(false);
      expect(binarySearchTree.find(9)).equals(false);
    });

    it('Should do find one node', () => {
      binarySearchTree.insert(10).insert(12).insert(9).insert(20).insert(15).insert(7).insert(8).insert(10);
      expect((binarySearchTree.find(10) as BinarySearchTreeNodeType<number>).value).equals(10);
      expect((binarySearchTree.find(12) as BinarySearchTreeNodeType<number>).value).equals(12);
      expect((binarySearchTree.find(9) as BinarySearchTreeNodeType<number>).value).equals(9);
      expect((binarySearchTree.find(8) as BinarySearchTreeNodeType<number>).value).equals(8);
      expect((binarySearchTree.find(15) as BinarySearchTreeNodeType<number>).value).equals(15);
      expect(binarySearchTree.find(11)).equals(false);
      expect(binarySearchTree.find(100)).equals(false);
    });

    it('Should do breadth first search traversal', () => {
      binarySearchTree.insert(10).insert(12).insert(9).insert(20).insert(15).insert(7).insert(8);
      expect(binarySearchTree.breadthFirstSearch()).to.eqls([10, 9, 12, 7, 20, 8, 15]);
      expect(binarySearchTree.breadthFirstSearchV2()).to.eqls([10, 9, 12, 7, 20, 8, 15]);
    });

    it('Should do depth first search pre order traverse', () => {
      binarySearchTree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);
      expect(binarySearchTree.depthFirstSearchPreOrder()).to.eqls([10, 6, 3, 8, 15, 20]);
    });
  });
});
