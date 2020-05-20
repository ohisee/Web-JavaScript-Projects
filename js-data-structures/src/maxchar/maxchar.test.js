/**
 * @fileoverview unit test
 */

const { maxChar } = require('./index');

describe('Max char test', () => {
  test('Should return max char', () => {
    expect(maxChar('112')).toEqual('1');
  });
});
