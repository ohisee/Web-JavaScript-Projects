/**
 * @fileoverview chunk array unit test
 */
const { chunkArray, chunkArrayLoop } = require('./index');

describe('Chunk array test', () => {
  test('Should define function', () => {
    expect(chunkArray).toBeDefined();
  });

  test('Should chunck array', () => {
    let result = chunkArray([1, 2, 3, 4, 5, 6], 1);
    expect(result).toEqual([[1], [2], [3], [4], [5], [6]]);
  });

  test('Should chunck array', () => {
    let result = chunkArray([1, 2, 3, 4, 5, 6], 2);
    expect(result).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  test('Should chunck array', () => {
    let result = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  test('Should chunck array', () => {
    let result = chunkArray([1, 2, 3, 4, 5, 6, 7], 5);
    expect(result).toEqual([[1, 2, 3, 4, 5], [6, 7]]);
  });

  test('Should chunck array', () => {
    let result = chunkArray([1, 2, 3, 4, 5, 6, 7], 100);
    expect(result).toEqual([[1, 2, 3, 4, 5, 6, 7]]);
  });

  test('Should chunck array', () => {
    let result = chunkArrayLoop([1, 2, 3, 4, 5, 6], 1);
    expect(result).toEqual([[1], [2], [3], [4], [5], [6]]);
  });

  test('Should chunck array', () => {
    let result = chunkArrayLoop([1, 2, 3, 4, 5, 6], 2);
    expect(result).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  test('Should chunck array', () => {
    let result = chunkArrayLoop([1, 2, 3, 4, 5, 6, 7], 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  test('Should chunck array', () => {
    let result = chunkArrayLoop([1, 2, 3, 4, 5, 6, 7], 5);
    expect(result).toEqual([[1, 2, 3, 4, 5], [6, 7]]);
  });

  test('Should chunck array', () => {
    let result = chunkArrayLoop([1, 2, 3, 4, 5, 6, 7], 100);
    expect(result).toEqual([[1, 2, 3, 4, 5, 6, 7]]);
  });
});
