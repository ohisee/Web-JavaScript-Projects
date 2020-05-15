/**
 * @fileoverview unit test
 * >.\node_modules\.bin\jest reverse.test.js
 */
const { reverse, reverseIteration, reverseIterationArray } = require('./index.js');

describe('Reverse string function', () => {
  test('Should reverse a string', () => {
    expect(reverse('abc')).toEqual('cba');
  });

  test('Should reverse a string', () => {
    expect(reverse('Greeting!')).toEqual('!gniteerG');
  });

  test('Should reverse a string', () => {
    expect(reverse('apple')).toEqual('elppa');
  });

  test('Should reverse a string', () => {
    expect(reverse('hello')).toEqual('olleh');
  });

  test('Should reverse a string', () => {
    expect(reverseIteration('abc')).toEqual('cba');
  });

  test('Should reverse a string', () => {
    expect(reverseIteration('Greeting!')).toEqual('!gniteerG');
  });

  test('Should reverse a string', () => {
    expect(reverseIteration('apple')).toEqual('elppa');
  });

  test('Should reverse a string', () => {
    expect(reverseIteration('hello')).toEqual('olleh');
  });

  test('Should reverse a string', () => {
    expect(reverseIterationArray('abc')).toEqual('cba');
  });

  test('Should reverse a string', () => {
    expect(reverseIterationArray('Greeting!')).toEqual('!gniteerG');
  });

  test('Should reverse a string', () => {
    expect(reverseIterationArray('apple')).toEqual('elppa');
  });

  test('Should reverse a string', () => {
    expect(reverseIterationArray('hello')).toEqual('olleh');
  });
});
