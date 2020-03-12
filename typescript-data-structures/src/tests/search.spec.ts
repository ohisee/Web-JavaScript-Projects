/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import {
  linearSearch,
  binarySearch,
  naiveStringSearch,
  buildLongestPrefixSuffixTable,
  KmpSearch
} from "../search";

describe('Search', () => {

  describe('Linear search', () => {
    it('Should return 1', () => {
      expect(linearSearch([10, 15, 20, 25, 30], 15)).equals(1);
    });

    it('Should return 5', () => {
      expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).equals(5);
    });

    it('Should return 0', () => {
      expect(linearSearch([100], 100)).equals(0);
    });

    it('Should return -1', () => {
      expect(linearSearch([1, 2, 3, 4, 5], 6)).equals(-1);
    });

    it('Should return -1', () => {
      expect(linearSearch([9, 8, 7, 6, 4, 3, 2, 1, 0], 10)).equals(-1)
    });

    it('Should return -1', () => {
      expect(linearSearch([100], 200)).equals(-1)
    });
  });

  describe('Binary search on sorted array', () => {
    it('Should return 1', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 2)).equals(1);
    });

    it('Should return 2', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 3)).equals(2);
    });

    it('Should return 4', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 5)).equals(4);
    });

    it('Should return 6', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 6)).equals(-1);
    });

    it('Should return 2', () => {
      expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)).equals(2);
    });

    it('Should return 16', () => {
      expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)).equals(16);
    });

    it('Should return -1', () => {
      expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)).equals(-1);
    });

    it('Should return -1', () => {
      expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 2)).equals(-1);
    });
  });

  describe('Naive string search', () => {
    it('Should return 2', () => {
      expect(naiveStringSearch('wowomgzomg', 'omg')).equals(2);
    });

    it('Should return 1', () => {
      expect(naiveStringSearch('longstringforsearch', 'long')).equals(1);
    });

    it('Should return 0', () => {
      expect(naiveStringSearch('longstringforsearch', 'abc')).equals(0);
    });
  });

  describe('Longest prefix suffix table', () => {
    it('Should return [0, 0, 1, 2, 3, 4]', () => {
      expect(buildLongestPrefixSuffixTable('ababab')).to.eql([0, 0, 1, 2, 3, 4]);
    });

    it('Should return [0, 0, 1, 0, 1, 2, 3, 2]', () => {
      expect(buildLongestPrefixSuffixTable('abacabab')).to.eql([0, 0, 1, 0, 1, 2, 3, 2]);
    });

    it('Should return [0, 1, 2, 0, 1, 2, 3, 3, 3, 4]', () => {
      expect(buildLongestPrefixSuffixTable('aaabaaaaab')).to.eql([0, 1, 2, 0, 1, 2, 3, 3, 3, 4]);
    });

    it('Should return [0, 0, 1, 2, 3, 4]', () => {
      expect(buildLongestPrefixSuffixTable('ababab')).to.eql([0, 0, 1, 2, 3, 4]);
    });

    it('Should return [[0, 0, 0, 0, 1, 2, 0, 1, 2, 0]', () => {
      expect(buildLongestPrefixSuffixTable('abcdabeabf')).to.eql([0, 0, 0, 0, 1, 2, 0, 1, 2, 0]);
    });
  });

  describe('KMP string search', () => {
    it('Should return 2', () => {
      expect(KmpSearch('wowomgzomg', 'omg')).equals(2);
    });

    it('Should return 1', () => {
      expect(KmpSearch('longstringforsearch', 'long')).equals(1);
    });

    it('Should return 0', () => {
      expect(KmpSearch('longstringforsearch', 'abc')).equals(0);
    });

    it('Should return 1', () => {
      expect(KmpSearch('abcdabeabf', 'abc')).equals(1);
    });

    it('Should return 1', () => {
      expect(KmpSearch('aaabaaaaab', 'aaaaa')).equals(1);
    });
  });

});
