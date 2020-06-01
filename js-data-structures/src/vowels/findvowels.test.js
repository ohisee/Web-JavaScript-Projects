/**
 * @fileoverview vowels unit test
 */
const { vowels, vowelsUsingIncludes, vowelsUsingRegExp } = require('./index');

describe("Find vowels from a string", () => {
  test('Should define function', () => {
    expect(vowels).toBeDefined();
  });

  test('returns the number of vowels used', () => {
    expect(vowels('aeiou')).toEqual(5);
  });

  test('returns the number of vowels used when they are capitalized', () => {
    expect(vowels('AEIOU')).toEqual(5);
  });

  test('returns the number of vowels used', () => {
    expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
  });

  test('returns the number of vowels used', () => {
    expect(vowels('bcdfghjkl')).toEqual(0);
  });

  test('returns the number of vowels used', () => {
    expect(vowelsUsingIncludes('aeiou')).toEqual(5);
  });

  test('returns the number of vowels used when they are capitalized', () => {
    expect(vowelsUsingIncludes('AEIOU')).toEqual(5);
  });

  test('returns the number of vowels used', () => {
    expect(vowelsUsingIncludes('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
  });

  test('returns the number of vowels used', () => {
    expect(vowelsUsingIncludes('bcdfghjkl')).toEqual(0);
  });

  test('returns the number of vowels used', () => {
    expect(vowelsUsingRegExp('aeiou')).toEqual(5);
  });

  test('returns the number of vowels used when they are capitalized', () => {
    expect(vowelsUsingRegExp('AEIOU')).toEqual(5);
  });

  test('returns the number of vowels used', () => {
    expect(vowelsUsingRegExp('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
  });

  test('returns the number of vowels used', () => {
    expect(vowelsUsingRegExp('bcdfghjkl')).toEqual(0);
  });
});
