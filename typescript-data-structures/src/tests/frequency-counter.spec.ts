/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { same, anagrams, anagramsSubtract } from "../freqency-counter";

describe('Frequency counter test', () => {

  it('Should return true', () => {
    expect(same([1, 2, 3], [1, 4, 9])).equals(true);
  });

  it('Should return true', () => {
    expect(same([1, 2, 2], [1, 4, 4])).equals(true);
  });

  it('Should return false', () => {
    expect(same([1, 2, 3], [1, 4, 4])).equals(false);
  });

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
