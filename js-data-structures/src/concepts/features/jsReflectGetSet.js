/**
 * @fileoverview JS ES6 reflect set and get 
 */

class PersonGetSet {
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

let ppo = new PersonGetSet("properties", 100);
Reflect.set(ppo, "name", "new properties as new name");
Reflect.set(ppo, "weight", 190);
console.log(Reflect.get(ppo, "name"));
console.log(Reflect.get(ppo, "weight"));
console.log(ppo.name, "--- should print 'new properties as new name'");
console.log(ppo.weight, "--- should print 190");

let pname = {
  _name: "a new name",
  height: 100,
  title: "Collector",
  say() {
    return "hello";
  }
};

Reflect.set(ppo, "name", "another name", pname);
Reflect.set(ppo, "height", 200, pname);

console.log(pname, "--- should print _name: 'another name', height: 200,");
console.log(Reflect.get(ppo, "name", pname), "--- should print 'another name'");
console.log(Reflect.has(ppo, "name"), "--- should print true");
console.log(Reflect.has(ppo, "height"), "--- should print false");
console.log(Reflect.ownKeys(ppo), "--- should print [ '_name', 'age', 'weight' ]");
