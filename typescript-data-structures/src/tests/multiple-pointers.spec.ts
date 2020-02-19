/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import {
  countUniqueValuesInSortedArrayByAltering,
  areThereDuplicates,
  averagePair,
  isSubsequence
} from "../multiple-pointers";

describe('Multiple pointers', () => {

  describe('Count unique values in sorted array', () => {
    it('Should return 9', () => {
      expect(countUniqueValuesInSortedArrayByAltering([-3, -2, -1, 0, 1, 2, 3, 4, 5])).equals(9);
    });

    it('Should return 2', () => {
      expect(countUniqueValuesInSortedArrayByAltering([1, 1, 1, 1, 1, 1, 2])).equals(2);
    });

    it('Should return 7', () => {
      expect(countUniqueValuesInSortedArrayByAltering([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).equals(7);
    });

    it('Should return 0', () => {
      expect(countUniqueValuesInSortedArrayByAltering([])).equals(0);
    });

    it('Should return 4', () => {
      expect(countUniqueValuesInSortedArrayByAltering([-2, -1, -1, 0, 1])).equals(4);
    });
  });

  describe('Are there duplicates using multiple pointers', () => {
    it('Should return true', () => {
      expect(areThereDuplicates(1, 2, 2)).equals(true);
    });

    it('Should return false', () => {
      expect(areThereDuplicates(1, 2, 3)).equals(false);
    });

    it('Should return false', () => {
      expect(areThereDuplicates('a', 'b', 'c')).equals(false);
    });
  });

  describe('Average Pair using multiple pointers', () => {
    it('Should return true', () => {
      expect(averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).equals(true);
    });

    it('Should return true', () => {
      expect(averagePair([1, 2, 3], 2.5)).equals(true);
    });

    it('Should return true', () => {
      expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).equals(true);
    });

    it('Should return false', () => {
      expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).equals(false);
    });

    it('Should return false', () => {
      expect(averagePair([], 4)).equals(false);
    });
  });

  describe('Is subsequence using multiple pointers', () => {
    it('Should return true', () => {
      expect(isSubsequence('hello', 'hello world')).equals(true);
    });

    it('Should return true', () => {
      expect(isSubsequence('sing', 'string')).equals(true);
    });

    it('Should return true', () => {
      expect(isSubsequence('abc', 'abracadabra')).equals(true);
    });

    it('Should return false', () => {
      expect(isSubsequence('abc', 'acb')).equals(false);
    });
  });
});
