/**
 * @fileoverview JavaScript from procedural to object oriented programming
 *
 * ES6 class
 */

class Elf {
  constructor(name, tool) {
    this.name = name;
    this.tool = tool;
  }
  attack() {
    return "attack with " + this.tool;
  }
}

const walker = new Elf("Walker", "bow"); // instantiation
const talker = new Elf("Talker", "hammer"); // instantiation

console.log(walker);
console.log(talker);
console.log(walker.attack()); // go up to prototype chain to call the method
console.log(talker.attack()); // go up to prototype chain to call the method
console.log(walker instanceof Elf, "--- should print true");
console.log(talker instanceof Elf, "--- should print true");
