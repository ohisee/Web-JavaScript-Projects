/**
 * @fileoverview JS ES6 reflect set and get prototype  
 */

class PersonPrototype {
  constructor() {
    this.name = "walker";
  }
}

let pProtoType = new PersonPrototype();

PersonPrototype.prototype.age = 100;

let proto = {
  age: 101,
  greet() {
    console.log("hello from proto!");
  },
  say() {
    console.log(`hello ${this.name}`);
  }
};

Reflect.setPrototypeOf(pProtoType, proto);
Reflect.apply(pProtoType.greet, null, []); // hello from proto! 
Reflect.apply(pProtoType.say, pProtoType, []); // hello walker 
Reflect.apply(pProtoType.say, proto, []); // hello undefined  

console.log(typeof pProtoType, "--- should print object");
console.log(typeof Reflect.getPrototypeOf(pProtoType), "--- should print object");
console.log(Reflect.getPrototypeOf(pProtoType),
  "--- should print { age: 101, greet: [Function: greet], say: [Function: say] }");
console.log(Reflect.getPrototypeOf(pProtoType) === PersonPrototype.prototype, "--- should print false");
console.log(Reflect.getPrototypeOf(pProtoType) === pProtoType.__proto__, "--- should print true");
