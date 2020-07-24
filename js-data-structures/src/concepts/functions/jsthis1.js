/**
 * @fileoverview JavaScript this keyword
 */

console.log(this);

function abc() {
  console.log(this); // still global or window object
}

abc();

function bcd() {
  'use strict'
  console.log(this); // undefined
}

bcd();

// benefits of 'this' keyword
// 1) gives methods access to their object
// 2) execute same code for multiple objects
const obj = {
  name: "talker",
  talk: function () {
    return "talking too loud " + this.name;
  },
  talkeAgain() {
    return this.talk() + "!";
  }
}

console.log(obj.talk());
console.log(obj.talkeAgain());

// execute same code for multiple objects
function importantPerson() {
  // when just call importantPerson function, this should refer to the global 
  // object in Node.js or window object inside browser
  // At JS hoisting, variable name is added into the global context
  console.log(this.name + "!"); // must run inside node command line
}

var name = "Walker";
var obj1 = {
  name: "Cassy",
  importantPerson: importantPerson
};
var obj2 = {
  name: "Jacob",
  importantPerson: importantPerson
};

importantPerson();
obj1.importantPerson();
obj2.importantPerson();
