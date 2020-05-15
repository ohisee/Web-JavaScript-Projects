/**
 * @fileoverview inline caching and hidden class
 */

// inline caching
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
  firstName: 'Johnson',
  lastName: 'Junior',
};

// if call findUser multiple times, JS engine will
// use inline cache
findUser(userData); // replaced by 'found Johnson Junior'


// hidden class
function Person(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Person(1, 2);
const obj2 = new Person(7, 8);

// will make compiler run slower
// try to instaniate object properties in same order
obj1.a = 30;
obj1.b = 100;
obj2.b = 100;
obj2.a = 100;

// change object property, and it will break hidden class
// by deleteing object property
delete obj1.a;
