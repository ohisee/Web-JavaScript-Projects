/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { BinarySearchTree, BinarySearchTreeNodeType } from "../binary-search-tree";
import { MaxBinaryHeap } from "../max-binary-heap";
import { PriorityQueue } from "../priority-queue";

describe('Trees and Heaps', () => {

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

    it('Should do depth first search post order traverse', () => {
      binarySearchTree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);
      expect(binarySearchTree.depthFirstSearchPostOrder()).to.eqls([3, 8, 6, 20, 15, 10]);
    });

    it('Should do depth first search in order traverse', () => {
      binarySearchTree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);
      expect(binarySearchTree.depthFirstSearchInOrder()).to.eqls([3, 6, 8, 10, 15, 20]);
    });
  });


  describe('Max binary heap', () => {

    let maxBinaryHeap: MaxBinaryHeap;

    beforeEach(() => {
      maxBinaryHeap = new MaxBinaryHeap();
    });

    it('Should do insert', () => {
      maxBinaryHeap
        .insert(100)
        .insert(19)
        .insert(36)
        .insert(17)
        .insert(3)
        .insert(25)
        .insert(1)
        .insert(2)
        .insert(7).insert(20);
      expect(maxBinaryHeap.getValues()).to.eqls([100, 20, 36, 17, 19, 25, 1, 2, 7, 3]);
    });

    it('Should do insert', () => {
      maxBinaryHeap
        .insert(41)
        .insert(39)
        .insert(33)
        .insert(18)
        .insert(27)
        .insert(12)
        .insert(55);
      expect(maxBinaryHeap.getValues()).to.eqls([55, 39, 41, 18, 27, 12, 33]);
    });

    it('Should do insert', () => {
      maxBinaryHeap
        .insert(41)
        .insert(39)
        .insert(33)
        .insert(18)
        .insert(27)
        .insert(12)
        .insert(5)
        .insert(1);
      expect(maxBinaryHeap.getValues()).to.eqls([41, 39, 33, 18, 27, 12, 5, 1]);
    });

    it('Should do extract max', () => {
      maxBinaryHeap
        .insert(41)
        .insert(39)
        .insert(33)
        .insert(18)
        .insert(27)
        .insert(12);
      expect(maxBinaryHeap.extractMax()).equals(41);
      expect(maxBinaryHeap.getValues()).to.eqls([39, 27, 33, 18, 12]);
    });

    it('Should do extract max', () => {
      maxBinaryHeap
        .insert(41)
        .insert(39)
        .insert(33)
        .insert(18)
        .insert(27)
        .insert(12);
      expect(maxBinaryHeap.extractMaxV1()).equals(41);
      expect(maxBinaryHeap.getValues()).to.eqls([39, 27, 33, 18, 12]);
    });


    it('Should do extract max', () => {
      maxBinaryHeap
        .insert(100)
        .insert(19)
        .insert(36)
        .insert(17)
        .insert(3)
        .insert(25)
        .insert(1)
        .insert(2)
        .insert(7).insert(20);
      expect(maxBinaryHeap.extractMax()).equals(100);
      expect(maxBinaryHeap.getValues()).to.eqls([36, 20, 25, 17, 19, 3, 1, 2, 7]);
    });

    it('Should do extract max', () => {
      maxBinaryHeap.insert(100);
      expect(maxBinaryHeap.extractMax()).equals(100);
      expect(maxBinaryHeap.getValues()).to.eqls([]);

      maxBinaryHeap.insert(100);
      expect(maxBinaryHeap.extractMaxV1()).equals(100);
      expect(maxBinaryHeap.getValues()).to.eqls([]);
    });

    it('Should do extract max', () => {
      maxBinaryHeap.insert(100);
      expect(maxBinaryHeap.extractMaxV1()).equals(100);
      expect(maxBinaryHeap.getValues()).to.eqls([]);
    });
  });

  describe('Priority queue using min binary heap', () => {

    let priorityQueue: PriorityQueue<string>;

    beforeEach(() => {
      priorityQueue = new PriorityQueue<string>();
    });

    it('Should do enqueue', () => {

    });
  });
});
