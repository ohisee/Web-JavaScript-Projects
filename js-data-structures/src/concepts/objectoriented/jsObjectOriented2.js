/**
 * @fileoverview JavaScript from procedural to object oriented programming
 * 
 * Object.create()
 */
const { toInfoLog } = require("../playground/utilities");

/**
 * memory efficient by creating a sharing function, 
 * so that same functionality on multiple objects
 */
const elfFunctions = {
  attack() {
    return `attack with ${this.tool}`; // 'this' refers to object that will call this method
  }
};

/**
 * factory functions, function that creates object using Object.create() 
 * through prototypal inheritance
 */
function createElf(name, tool) {
  let newElf = Object.create(elfFunctions); // prototype chain
  newElf.name = name;
  newElf.tool = tool;
  return newElf;
}

const walker = createElf("walker", "bow");
console.log(toInfoLog(walker.attack(), "--- through sharing function"));

const talker = createElf("talker", "hammer");
console.log(talker.attack(), "--- through sharing function");
