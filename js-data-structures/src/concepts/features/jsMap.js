/**
 * @fileoverview JS ES6 map and weakmap 
 */

/**
 * @typedef {Object} ValueType
 * @property {string} name 
 */

/** @type {ValueType}  */
let cardAce = {
  name: "Ace of Spades",
};

/** @type {ValueType}  */
let cardKing = {
  name: "King of Clubs",
};

/** @type {Map<string, ValueType>} */
let deck = new Map();
deck.set("as", cardAce);
deck.set("kc", cardKing);

console.log(deck.get("as"));

let deck2 = new Map([["as", cardAce], ["kc", cardKing]]);

console.log(deck2.get("kc"));

for (let entry of deck) {
  console.log(entry);
}

for (let entry of deck2) {
  console.log("another map", entry);
}

// JS weak map, keys must be objects 
let key1 = { a: 1 };
let key2 = { b: 2 };

/** @type {WeakMap<object, ValueType>} */
let deckWeakMap = new WeakMap();
deckWeakMap.set(key1, cardAce);
deckWeakMap.set(key2, cardKing);

console.log(deckWeakMap.get(key2));
