/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import {
  bubbleSort,
  selectionSort,
  insertionSortUsingSwap,
  insertionSort,
  merge,
  mergeSort,
  pivot,
  quickSort
} from "../sorting";

describe('Sort', () => {
  describe('Bubble sort', () => {
    it('Should return [2, 3, 9, 10, 11, 25]', () => {
      expect(bubbleSort([10, 2, 15, 9, 3, 11])).to.eql([2, 3, 9, 10, 11, 15]);
    });

    it('Should return [2, 9, 10, 11, 15, 30]', () => {
      expect(bubbleSort([10, 2, 15, 9, 30, 11])).to.eql([2, 9, 10, 11, 15, 30]);
    });

    it('Should return [1, 2, 3, 4, 5, 6, 7, 8]', () => {
      expect(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('Selection sort', () => {
    it('Should return [2, 3, 9, 10, 11, 25]', () => {
      expect(selectionSort([10, 2, 15, 9, 3, 11])).to.eql([2, 3, 9, 10, 11, 15]);
    });

    it('Should return [2, 9, 10, 11, 15, 30]', () => {
      expect(selectionSort([10, 2, 15, 9, 30, 11])).to.eql([2, 9, 10, 11, 15, 30]);
    });

    it('Should return [1, 2, 3, 4, 5, 6, 7, 8]', () => {
      expect(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('Insertion sort', () => {
    it('Should return [2, 3, 9, 10, 11, 25]', () => {
      expect(insertionSortUsingSwap([10, 2, 15, 9, 3, 11])).to.eql([2, 3, 9, 10, 11, 15]);
    });

    it('Should return [2, 9, 10, 11, 15, 30]', () => {
      expect(insertionSortUsingSwap([10, 2, 15, 9, 30, 11])).to.eql([2, 9, 10, 11, 15, 30]);
    });

    it('Should return [1, 2, 3, 4, 5, 6, 7, 8]', () => {
      expect(insertionSortUsingSwap([8, 1, 2, 3, 4, 5, 6, 7])).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('Insertion sort', () => {
    it('Should return [2, 3, 9, 10, 11, 25]', () => {
      expect(insertionSort([10, 2, 15, 9, 3, 11])).to.eql([2, 3, 9, 10, 11, 15]);
    });

    it('Should return [2, 9, 10, 11, 15, 30]', () => {
      expect(insertionSort([10, 2, 15, 9, 30, 11])).to.eql([2, 9, 10, 11, 15, 30]);
    });

    it('Should return [1, 2, 3, 4, 5, 6, 7, 8]', () => {
      expect(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('Merge two arrays', () => {
    it('Should return [2, 5, 6, 7, 8, 9, 10, 11]', () => {
      expect(merge([2, 8, 9, 10, 11], [5, 6, 7])).to.eql([2, 5, 6, 7, 8, 9, 10, 11]);
    });

    it('Should return [2, 5, 6, 7, 8, 9, 10, 11]', () => {
      expect(merge([5, 6, 7], [2, 8, 9, 10, 11])).to.eql([2, 5, 6, 7, 8, 9, 10, 11]);
    });

    it('Should return [[2, 5, 6, 7, 8, 9, 10, 11, 12, 18]', () => {
      expect(merge([5, 6, 7, 12, 18], [2, 8, 9, 10, 11])).to.eql([2, 5, 6, 7, 8, 9, 10, 11, 12, 18]);
    });
  });

  describe('Merge sort', () => {
    it('Should return [2, 3, 9, 10, 11, 25]', () => {
      expect(mergeSort([10, 2, 15, 9, 3, 11])).to.eql([2, 3, 9, 10, 11, 15]);
    });

    it('Should return [2, 9, 10, 11, 15, 30]', () => {
      expect(mergeSort([10, 2, 15, 9, 30, 11])).to.eql([2, 9, 10, 11, 15, 30]);
    });

    it('Should return [1, 2, 3, 4, 5, 6, 7, 8]', () => {
      expect(mergeSort([8, 1, 2, 3, 4, 5, 6, 7])).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('Pivot helper', () => {
    it('Should return 6', () => {
      expect(pivot([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18])).equals(6);
    });

    it('Should return 3', () => {
      expect(pivot([26, 23, 27, 44, 17, 47, 39, 42, 43, 1])).equals(3);
    });

    it('Should return 0', () => {
      expect(pivot([1, 2])).equals(0);
    });

    it('Should return 1', () => {
      expect(pivot([2, 1])).equals(1);
    });
  });

  describe('Quick sort', () => {
    it('Should return [1,1,2,3,4,6]', () => {
      expect(quickSort([3, 4, 1, 2, 6, 1])).to.eql([1, 1, 2, 3, 4, 6]);
    });

    it('Should return [1, 4, 11, 14, 16, 18, 28, 36, 37, 40, 41, 42]', () => {
      expect(quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18])).to.eql([1, 4, 11, 14, 16, 18, 28, 36, 37, 40, 41, 42]);
    });
  });
});
