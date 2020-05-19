/**
 * @fileoverview unit test of reverse integer
 */

const { reverseInt } = require('./index');

describe('Reverse an integer', () => {
  test('Should return a reversed int', () => {
    expect(reverseInt(1000)).toEqual(1);
  });

  test('Should return a reversed int', () => {
    expect(reverseInt(20091)).toEqual(19002);
  });

  test('Should return a reversed int', () => {
    expect(reverseInt(-900)).toEqual(-9);
  });

  test('Should return a reversed int', () => {
    expect(reverseInt(-987)).toEqual(-789);
  });

  test('Should return a reversed int', () => {
    expect(reverseInt(0)).toEqual(0);
  });
});
