/**
 * @fileoverview unit test
 * >.\node_modules\.bin\jest reverse.test.js
 */
const { reverse,
  reverseUsingSubstring,
  reverseIteration,
  reverseIterationString,
  reverseIterationArray,
  reverseUsingArray,
  reverseUsingArrayReduce } = require('./index');

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

  test('Should reverse a string', () => {
    expect(reverseUsingArray('abc')).toEqual('cba');
  });

  test('Should reverse a string', () => {
    expect(reverseUsingArray('Greeting!')).toEqual('!gniteerG');
  });

  test('Should reverse a string', () => {
    expect(reverseUsingArray('apple')).toEqual('elppa');
  });

  test('Should reverse a string', () => {
    expect(reverseUsingArray('hello')).toEqual('olleh');
  });

  test('Should reverse a string', () => {
    expect(reverseUsingSubstring('abc')).toEqual('cba');
  });

  test('Should reverse a string', () => {
    expect(reverseUsingSubstring('Greeting!')).toEqual('!gniteerG');
  });

  test('Should reverse a string', () => {
    expect(reverseUsingSubstring('apple')).toEqual('elppa');
  });

  test('Should reverse a string', () => {
    expect(reverseUsingSubstring('hello')).toEqual('olleh');
  });

  test('Should reverse a string', () => {
    expect(reverseIterationString('abc')).toEqual('cba');
  });

  test('Should reverse a string', () => {
    expect(reverseIterationString('Greeting!')).toEqual('!gniteerG');
  });

  test('Should reverse a string', () => {
    expect(reverseIterationString('apple')).toEqual('elppa');
  });

  test('Should reverse a string', () => {
    expect(reverseIterationString('hello')).toEqual('olleh');
  });

  test('Should reverse a string', () => {
    expect(reverseUsingArrayReduce('hello')).toEqual('olleh');
  });

  test('Should reverse a string', () => {
    expect(reverseUsingArrayReduce('abc')).toEqual('cba');
  });

  test('Should reverse a string', () => {
    expect(reverseUsingArrayReduce('Greeting!')).toEqual('!gniteerG');
  });

  test('Should reverse a string', () => {
    expect(reverseUsingArrayReduce('apple')).toEqual('elppa');
  });
});
