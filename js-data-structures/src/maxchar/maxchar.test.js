/**
 * @fileoverview unit test
 */

const { maxChar } = require('./index');

describe('Max char test', () => {
  test('Should return max char', () => {
    expect(maxChar('112')).toEqual('1');
  });

  test('Should return max char', () => {
    expect(maxChar('abcccccccd')).toEqual('c');
  });

  test('Should return max char', () => {
    expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
  })
});
