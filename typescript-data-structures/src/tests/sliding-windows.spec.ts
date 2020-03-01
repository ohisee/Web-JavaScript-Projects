/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import {
  maxSubarraySum,
  maxSubarraySumUsingSlidingWindow,
  minSubarrayLen,
  minSubarrayLenV2,
  findLongestSubstring
} from "../sliding-windows";

describe('Sliding window', () => {
  describe('Max sub array', () => {
    it('Should return 19', () => {
      expect(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)).equals(19);
    });
  });

  describe('Max sub array sum using sliding window', () => {
    it('Should return null', () => {
      expect(maxSubarraySumUsingSlidingWindow([1, 2, 10, 9, 6], 8)).equals(null);
    });

    it('Should return 700', () => {
      expect(maxSubarraySumUsingSlidingWindow([100, 200, 300, 400, 100, 90], 2)).equals(700);
    });

    it('Should return 39', () => {
      expect(maxSubarraySumUsingSlidingWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).equals(39);
    });

    it('(1) Should return 5', () => {
      expect(maxSubarraySumUsingSlidingWindow([-3, 4, 0, -2, 6, -1], 2)).equals(5);
    });

    it('(2) Should return 5', () => {
      expect(maxSubarraySumUsingSlidingWindow([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).equals(5);
    });
  });

  describe('Min sub array length using sliding window', () => {
    it('(1) Should return 2', () => {
      expect(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)).equals(2);
    });

    it('(2) Should return 2', () => {
      expect(minSubarrayLen([2, 1, 6, 5, 4], 9)).equals(2);
    });

    it('Should return 1', () => {
      expect(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).equals(1);
    });

    it('Should return 3', () => {
      expect(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).equals(3);
    });

    it('Should return 5', () => {
      expect(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).equals(5);
    });

    it('Should return 2', () => {
      expect(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)).equals(2);
    });

    it('Should return 0', () => {
      expect(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).equals(0);
    });
  });

  describe('Min sub array length using sliding window and multiple pointers', () => {
    it('(1) Should return 2', () => {
      expect(minSubarrayLenV2([2, 3, 1, 2, 4, 3], 7)).equals(2);
    });

    it('(2) Should return 2', () => {
      expect(minSubarrayLenV2([2, 1, 6, 5, 4], 9)).equals(2);
    });

    it('Should return 1', () => {
      expect(minSubarrayLenV2([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).equals(1);
    });

    it('Should return 3', () => {
      expect(minSubarrayLenV2([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).equals(3);
    });

    it('Should return 5', () => {
      expect(minSubarrayLenV2([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).equals(5);
    });

    it('Should return 2', () => {
      expect(minSubarrayLenV2([4, 3, 3, 8, 1, 2, 3], 11)).equals(2);
    });

    it('Should return 0', () => {
      expect(minSubarrayLenV2([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).equals(0);
    });
  });

  describe('Longest substring using sliding window', () => {
    it('Should return 0', () => {
      expect(findLongestSubstring('')).equals(0);
    });

    it('Should return 7', () => {
      expect(findLongestSubstring('rithmschool')).equals(7);
    });

    it('Should return 6', () => {
      expect(findLongestSubstring('thisisawesome')).equals(6);
    });

    it('Should return 7', () => {
      expect(findLongestSubstring('thecatinthehat')).equals(7);
    });

    it('Should return 1', () => {
      expect(findLongestSubstring('bbbbbbbbbbbb')).equals(1);
    });

    it('Should return 8', () => {
      expect(findLongestSubstring('longestsubstring')).equals(8);
    });

    it('Should return 6', () => {
      expect(findLongestSubstring('thisishowwedoit')).equals(6);
    });
  });
});
