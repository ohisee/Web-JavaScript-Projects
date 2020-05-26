/**
 * @fileoverview capitalize first character of a sentence unit test
 */

const { capitalize, capitalizeUsingSplit } = require('./index');

describe('Capitalize first character of a sentence', () => {
  test('Should be defined', () => {
    expect(capitalize).toBeDefined();
  });

  test('Should capitalize first character of a sentence', () => {
    expect(
      capitalize("a short   sentence")).toEqual("A Short   Sentence");
  });

  test('Should capitalize first character of a sentence', () => {
    expect(
      capitalizeUsingSplit(" a short   sentence")).toEqual(" A Short   Sentence");
  });
});
