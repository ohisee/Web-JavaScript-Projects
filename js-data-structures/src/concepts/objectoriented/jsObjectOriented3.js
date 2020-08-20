/**
 * @fileoverview JavaScript from procedural to object oriented programming
 *
 * Constructor Functions
 */
const { toWarningLog } = require("../playground/utilities");

/**
 * constructor function, before Object.create()
 * constructor function, just like String(), Number(), Object()
 */
function Elf(name, tool) {
  this.name = name; // new object and new execution context
  this.tool = tool;
  console.log("this", this);
}

/**
 * This function is written once in memory, can be reused by instances
 * 
 * cannot use arrow functin here, () => {}, because arrow function is lexically 
 * scoped, referring to surrounding where it is written, for the following 
 * prototype, it is Global object 
 * 
 * need to use regular function, depending who is calling the function
 */
Elf.prototype.attack = function () {
  return "attack with " + this.tool; // this refers to calling object
};

Elf.prototype.build = function () {
  // function inside a function is just a function 
  // 'this' is not assigned to the object
  // 'this' refers to the global or window object 
  function building() {
    return this.name + " builds a house";
  }
  return building();
}

Elf.prototype.buildUsingBind = function () {
  function building() {
    return this.name + " builds a house";
  }
  return building.bind(this);
}

Elf.prototype.buildUsingSelf = function () {
  const self = this;
  function building() {
    return self.name + " builds a house";
  }
  return building();
}

const walker = new Elf("Walker", "bow"); // new object and new execution context
const talker = new Elf("Talker", "hammer");

console.log(walker.name);
console.log(walker.attack()); // go up to prototype chain
console.log(talker.name);
console.log(talker.attack());
console.log(talker.prototype, "--- should print undefined, only function has prototype");
console.log(talker.build(), toWarningLog("--- should print 'undefined builds a house'"));
console.log(talker.buildUsingBind()(),
  "--- execute buildUsingBind",
  "--- should print 'Talker builds a house'");
console.log(talker.buildUsingSelf(), " --- should print 'Talker builds a house'");

const Elf1 = new Function(
  "name",
  "tool",
  "this.name = name; this.tool = tool;");

const runner = new Elf1("Runner", "firework");
console.log(runner);
