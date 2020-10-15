/**
 * @fileoverview generate key 
 */
const { mergeStrings } = require("./mergestrings");

/**
 * @returns {string}
 */
function generateKeyString() {
  const keyString = () =>
    (Math.random() * 31).toString(36).replace('.', '').substring(0, 5);

  return mergeStrings(keyString(), keyString().toUpperCase);
}

module.exports = {
  generateKeyString,
};
