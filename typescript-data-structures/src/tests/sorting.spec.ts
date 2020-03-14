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
  mergeSort
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
});
