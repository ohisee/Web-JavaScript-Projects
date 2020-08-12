/**
 * @fileoverview JavaScript prototype chain
 */

const dragon = {
  name: "walker",
  fire: true,
  breathe() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, singing`;
    }
  }
};

const lizard = {
  name: "lizard",
  breathe() {
    return 1;
  }
};

const singLizard = dragon.sing.bind(lizard);
console.log(singLizard(), "--- should print undefined");

// prototypical inheritance, 
// reuse properties, refer to properties in same memory location
lizard.__proto__ = dragon;
console.log(lizard.sing(), "--- should print 'I am lizard, singing'");
console.log(lizard.fire, "--- should print true");
console.log(lizard.breathe(), "--- should print 1");
console.log(dragon.isPrototypeOf(lizard), "--- should print true");
console.log(lizard.isPrototypeOf(dragon), "--- should print false");

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) { // lizard own properties
    console.log(prop, "--- should print name / breathe");
  }
}
