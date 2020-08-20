/**
 * @fileoverview JavaScript 'this' keyword revisit
 */

/**
 * 'new' keyword binding 'this'
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const walker = new Person("Walker", 100);
console.log(walker, "--- should print Person { name: 'Walker', age: 100 }");

/**
 * implicit binding 'this'
 */
const person = {
  name: "Walker",
  age: 100,
  say() {
    console.log('hello', this.name); // 'this' refers to person as implicit binding 
  }
};

console.log(
  person,
  "\n--- should print '{ name: 'Walker', age: 100, say: [Function: say] }'");

/**
 * explicit binding
 */
const person2 = {
  name: "Walker",
  age: 100,
  say: function () {
    console.log('hello', this.setTimeout);
  }.bind(global), // explicit bind to some object, for example, global or window object
};

person2.say();

/**
 * arrow function, lexically scoped
 */
const person3 = {
  name: "Walker",
  age: 100,
  say: function () {
    // arrow function, lexically scoped, referring to surrounding where it is written
    const inner = () => {
      console.log('hello', this.name);
    }
    return inner();
  },
};

person3.say();
