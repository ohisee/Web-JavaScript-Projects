/**
 * @fileoverview JavaScript from procedural to object oriented programming
 */
const { toInfoLog, toSecondaryLog } = require("../playground/utilities");

// need to duplicate code when creating more items, 
// for example, elf1, elf2, elf3, and so forth
const elf1 = {
  name: "elf1",
  tool: "bow",
  attach() {
    return `attack with ${this.tool}`;
  }
};

const elf2 = {
  name: "elf2",
  tool: "bow",
  attach() {
    return `attack with ${this.tool}`;
  }
};

/**
 * factory functions, function that creates object
 */
function createElf(name, tool) {
  return {
    name: name,
    tool: tool,
    // noticed one issue, each object needs memory space for this method, so
    // when creating more object using this factory function, more memory 
    // spaces are required, not memory efficient  
    attack() {
      return `attack with ${tool}`;
    }
  };
}

/**
 * memory efficient by creating a sharing function, 
 * so that same functionality on multiple objects
 */
const elfFunctions = {
  elfAttack() {
    return `attack with ${this.tool}`; // 'this' refers to object that will call this method
  }
};

const walker = createElf("walker", "bow");
console.log(walker.attack(), "--- this function requires its own memory space");
walker.elfAttack = elfFunctions.elfAttack;
console.log(toInfoLog(walker.elfAttack(), "--- through sharing function"));

const talker = createElf("talker", "hammer");
console.log(talker.attack(), "--- this function requires its own memory space");
talker.elfAttack = elfFunctions.elfAttack;
console.log(toSecondaryLog(talker.elfAttack(), "--- through sharing function"));
