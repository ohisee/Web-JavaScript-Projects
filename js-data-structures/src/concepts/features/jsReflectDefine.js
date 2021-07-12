/**
 * @fileoverview JS ES6 reflect define property  
 */

class PersonInit {
  /**
   * @param {string} name 
   * @param {number} age 
   */
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }

  set name(anothername) {
    this._name = anothername;
  }
}

let ppo = new PersonInit("walker", 100);

Reflect.defineProperty(ppo, "hobbies", {
  configurable: true,
  value: ["h1", "h2", "h3", "h4", "h5"],
  writable: true,
});

console.log(ppo, "--- should print PersonInit { _name: 'walker', age: 100 }");
console.log(ppo.hobbies, "--- should print [ 'h1', 'h2', 'h3', 'h4', 'h5' ]");

delete ppo.age; // delete age property 
console.log(ppo.age, "--- should print undefined");
Reflect.deleteProperty(ppo, "hobbies");
console.log(ppo.hobbies, "--- should print undefined");

console.log(Reflect.isExtensible(ppo), "--- should print true");
Reflect.preventExtensions(ppo);
console.log(Reflect.isExtensible(ppo), "--- should print false");

Reflect.defineProperty(ppo, "lessons", { // cannot add new property anymore 
  configurable: true,
  value: ["l1", "l2"],
  writable: true,
});
console.log(Reflect.isExtensible(ppo), "--- should print false");
console.log(ppo.lessons, "--- should print undefined");
