/**
 * @fileoverview JavaScript from procedural to object oriented programming
 *
 * ES6 class
 */
const { toPrimaryLog, toInfoLog } = require("../playground/utilities");

class Elf {
  constructor(name, tool) {
    this.name = name;
    this.tool = tool;
  }
  attack() {
    return "attack with " + this.tool;
  }
}

const walker = new Elf("Walker", "stars");
const talker = { ...walker }; // lost prototypal chain
console.log(talker.__proto__, "--- should print {}");
console.log(walker.__proto__, "--- should print Elf {}");

/**
 * Use inheritance
 */
class Character {
  constructor(name, tool) {
    this.name = name;
    this.tool = tool;
  }
  attack() {
    return "attack with " + this.tool;
  }
}

class Elfex extends Character { // prototype chain up to character
  constructor(name, tool, type) {
    super(name, tool);
    console.log("Elfex", this);
    this.type = type;
    console.log("Elfex", this);
  }
  attack(cry) {
    return super.attack() + " and with " + cry;
  }
}

const elf = new Elfex("Walker", "stars", "house");
console.log(
  elf,
  "--- should print 'Elfex { name: 'Walker', tool: 'stars', type: 'house' }'");
console.log(
  toPrimaryLog(elf.attack("shouting")),
  "--- should print 'attack with stars and with shouting'");

class Jake extends Character {
  constructor(name, tool, color) {
    super(name, tool);
    this.color = color;
  }
  buildFort() {
    return "fort is ready";
  }
}

const jake = new Jake("Jake", "hammer", "green");
console.log(
  jake,
  "--- should print 'Jake { name: 'Jake', tool: 'hammer', color: 'green' }'");
console.log(jake.buildFort(), "--- should print 'fort is ready'");

console.log(Jake.prototype.isPrototypeOf(jake), "--- should print true");
console.log(Character.prototype.isPrototypeOf(Jake.prototype), "--- should print true");

console.log(elf instanceof Elfex, "--- should print true");
console.log(elf instanceof Character, "--- should print true");

/**
 * New class declaration feature
 */
class SomeNewFeatures {
  name = "runner"; // field does not require parameter
  #age = 100; // private field
  say() {
    return "hello " + this.name;
  }
  tell() {
    return "hello " + this.#age;
  }
}

const something = new SomeNewFeatures();
console.log(toInfoLog(something.say()), "--- should print 'hello runner'");
console.log(toInfoLog(something.name), "--- should print 'runner'");
console.log(toInfoLog(something.tell()), "--- should print 'hello 100'");
