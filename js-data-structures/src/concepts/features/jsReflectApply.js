/**
 * @fileoverview JS ES6 reflect apply 
 */

class PersonGreeting {
  /**
   * @param {string} name 
   * @param {number} age 
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("hello, this is " + this.name);
  }

  greetPrefix(prefix) {
    console.log(`${prefix} hello, this is ${this.name}`);
  }
}

/** @type {PersonGreeting} */
let person = Reflect.construct(PersonGreeting, ["Walker", 100])
Reflect.apply(person.greet, person, []);
Reflect.apply(person.greet, {}, []);
Reflect.apply(person.greet, { name: "New Name" }, []);
Reflect.apply(person.greetPrefix, { name: "New Name" }, ["--- New Prefix ---"]);
