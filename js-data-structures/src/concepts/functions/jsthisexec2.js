/**
 * @fileoverview JavaScript this keyword exercise
 */

const character = {
  name: "Simon",
  getCharacter() {
    // console.log(this);
    return this.name;
  }
};

const getTheCharacterNow = character.getCharacter;

console.log(character.getCharacter(), "--- should return Simon");
console.log(getTheCharacterNow(), "--- Should return undefined");
console.log(getTheCharacterNow.bind(character)(), "--- Should return Simon");

// Or
const getTheCharacterNowFix = character.getCharacter.bind(character);
console.log(getTheCharacterNowFix(), "--- Should return Simon");
