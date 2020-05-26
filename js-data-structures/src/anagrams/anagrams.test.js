/**
 * @fileoverview unit test to verify anagrams
 */
const { anagrams } = require('./index');

describe('Anagrams unit test', () => {
  test('Should define', () => {
    expect(anagrams).toBeDefined();
  });

  test('Should test anagrams', () => {
    expect(anagrams("School master", "The classroom")).toBeTruthy();
  });

  test('Should test anagrams', () => {
    expect(anagrams("The Morse Codes", "Here comes dots")).toBeTruthy();
  });

  test('Should test anagrams', () => {
    expect(anagrams("Conversation", "Voices rant on")).toBeTruthy();
  });

  test('Should test anagrams', () => {
    expect(anagrams("Hey there", "Bye there")).toBeFalsy();
  });

  test('Should test anagrams', () => {
    expect(
      anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
    ).toBeFalsy();
  });
});
