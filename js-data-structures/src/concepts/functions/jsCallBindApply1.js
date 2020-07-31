/**
 * @fileoverview JavaScript Call, Bind, Apply
 */

function abc() {
  console.log("hi");
}

abc.call();   // same as abc();
abc.apply();  // same as abc();

const wizard = {
  name: "Merlin",
  health: 100,
  heal() {
    return this.health = 100;
  },
  add(num1, num2) {
    return this.health = (num1 + num2);
  },
  sayName(greeting) {
    return `${greeting} ${this.name}`;
  }
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

wizard.heal();

// borrow method from another object that has the method, this can reduce copying
// pasting method over, duplicate code, redundancy 
console.log(1, "before method borrowing", archer);
wizard.heal.call(archer); // instead of using wizard to call heal, use archer to call heal
console.log(2, "after method borrowing", archer);

console.log(1, archer);
wizard.add.call(archer, 100, 96);
console.log(2, archer);

console.log(1, "try apply", archer);
wizard.add.apply(archer, [200, 196]); // apply accepts array of parameters
console.log(2, "apply takes an array of parameters", archer);

archer.health = 30;
// call() and apply() immediately run a function
// bind returns new function with certain context and parameters to be called later
console.log("before bind", archer);
// const healArcher = wizard.heal.bind(archer, 100);
const healArcher = wizard.heal.bind(archer);
healArcher();
console.log("after bind", archer);

const sayNameArcher = wizard.sayName.bind(archer, "hello");
console.log(sayNameArcher(), "--- should print 'hello Robin Hood'");
