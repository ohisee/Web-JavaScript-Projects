/**
 * @fileoverview JS ES6 reflect new target  
 */

class Person {
  /**
   * @param {string} name 
   * @param {string} title 
   */
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }
}

/**
 * @constructs PersonObj  
 */
function PersonObj() {
  /**
   * @name age 
   * @type {number}
   */
  this.age = 100;
}

let personTargetType = Reflect.construct(Person, ["Name", "Title"], PersonObj);

console.log(personTargetType.__proto__ === Person.prototype, "--- should print false");
console.log(personTargetType.__proto__ === PersonObj.prototype, "--- should print true");
console.log(personTargetType instanceof PersonObj, "--- should print true");
console.log(PersonObj.prototype.isPrototypeOf(personTargetType), "--- should print true");
console.log(personTargetType.__proto__, "--- should print {}");
console.log(personTargetType.name, "--- should print 'Name'");
console.log(personTargetType.title, "--- should print 'Title'");
console.log(personTargetType.age, "--- should print undefined");
