/**
 * @fileoverview unit test
 */

const {
  palindrome,
  palindromeUsingReverse,
  palindromeRecur } = require('./index');

describe('Palindrome function test', () => {
  test('Should return true', () => {
    expect(palindrome('racecar')).toBeTruthy();
  });

  test('Should return true', () => {
    expect(palindrome('aa')).toBeTruthy();
  });

  test('Should return false', () => {
    expect(palindrome('abhhha')).toBeFalsy();
  });

  test('Should return false', () => {
    expect(palindrome('racecar ')).toBeFalsy();
  });

  test('Should return true', () => {
    expect(palindromeUsingReverse('racecar')).toBeTruthy();
  });

  test('Should return true', () => {
    expect(palindromeUsingReverse('aa')).toBeTruthy();
  });

  test('Should return false', () => {
    expect(palindromeUsingReverse('abhhha')).toBeFalsy();
  });

  test('Should return false', () => {
    expect(palindromeUsingReverse('racecar ')).toBeFalsy();
  });

  test('Should return true', () => {
    expect(palindromeRecur('racecar')).toBeTruthy();
  });

  test('Should return true', () => {
    expect(palindromeRecur('aa')).toBeTruthy();
  });

  test('Should return false', () => {
    expect(palindromeRecur('abhhha')).toBeFalsy();
  });

  test('Should return false', () => {
    expect(palindromeRecur('racecar ')).toBeFalsy();
  });

  test('Should return true', () => {
    expect(palindromeRecur('100000000001')).toBeTruthy();
  });
});
