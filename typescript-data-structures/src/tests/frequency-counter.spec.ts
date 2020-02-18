/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { same, anagrams, anagramsSubtract, sameFrequency } from "../freqency-counter";

describe('Frequency counter test', () => {

  describe('Frequency counter in checking same', () => {
    it('Should return true', () => {
      expect(same([1, 2, 3], [1, 4, 9])).equals(true);
    });

    it('Should return true', () => {
      expect(same([1, 2, 2], [1, 4, 4])).equals(true);
    });

    it('Should return false', () => {
      expect(same([1, 2, 3], [1, 4, 4])).equals(false);
    });
  });

  describe('Frequency counter in anagrams', () => {
    it('Should return true', () => {
      expect(anagrams('listen', 'silent')).equals(true);
    });

    it('Should return true', () => {
      expect(anagrams('powerbank', 'bankpower')).equals(true);
    });

    it('Should return false', () => {
      expect(anagrams('aaz', 'zza')).equals(false);
    });

    it('Should return true', () => {
      expect(anagrams('anagram', 'nagaram')).equals(true);
    });

    it('Should return false', () => {
      expect(anagrams('rat', 'car')).equals(false);
    });

    it('Should return false', () => {
      expect(anagrams('awesome', 'awesom')).equals(false);
    });

    it('Should return false', () => {
      expect(anagrams('amanaplanacanalpanama', 'acanalmanplanpamana')).equals(false);
    });

    it('Should return true', () => {
      expect(anagrams('qwerty', 'qeywrt')).equals(true);
    });

    it('Should return true', () => {
      expect(anagrams('texttwisttime', 'timetwisttext')).equals(true);
    });
  });

  describe('Frequency counter in anagramsSubtract', () => {
    // anagramsSubtract
    it('Should return true', () => {
      expect(anagramsSubtract('listen', 'silent')).equals(true);
    });

    it('Should return true', () => {
      expect(anagramsSubtract('powerbank', 'bankpower')).equals(true);
    });

    it('Should return false', () => {
      expect(anagramsSubtract('aaz', 'zza')).equals(false);
    });

    it('Should return true', () => {
      expect(anagramsSubtract('anagram', 'nagaram')).equals(true);
    });

    it('Should return false', () => {
      expect(anagramsSubtract('rat', 'car')).equals(false);
    });

    it('Should return false', () => {
      expect(anagramsSubtract('awesome', 'awesom')).equals(false);
    });

    it('Should return false', () => {
      expect(anagramsSubtract('amanaplanacanalpanama', 'acanalmanplanpamana')).equals(false);
    });

    it('Should return true', () => {
      expect(anagramsSubtract('qwerty', 'qeywrt')).equals(true);
    });

    it('Should return true', () => {
      expect(anagramsSubtract('texttwisttime', 'timetwisttext')).equals(true);
    });
  });

  // same frequency
  describe('Same frequency', () => {
    it('Should return true', () => {
      expect(sameFrequency(182, 281)).equals(true);
    });
    it('Should return false', () => {
      expect(sameFrequency(34, 14)).equals(false);
    });
    it('Should return true', () => {
      expect(sameFrequency(3589578, 5879385)).equals(true);
    });
    it('Should return false', () => {
      expect(sameFrequency(22, 222)).equals(false);
    });
  });
});
