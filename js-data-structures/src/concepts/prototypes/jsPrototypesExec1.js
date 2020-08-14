/**
 * @fileoverview JavaScript prototype chain
 */

/**
 * Date object => to have new method .lastYear() that 
 * returns last year 'YYYY' format
 * 
 * Date.prototype.lastYear = () => {...} arrow function does not work 
 * because 'this' keyword is lexically scoped that refers to the Date object
 * need 'this' to be determined at call time when run the function 
 */
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
const year = new Date('1900-10-10').lastYear();
console.log(year, "--- should print 1899");

/**
 * Mofify .map() to print '_' at the end of each item
 */
Array.prototype.map = function () {
  const result = [];
  // for (let item of this) {...}
  for (let i = 0; i < this.length; i++) {
    result.push(`${this[i]}_`);
  }
  return result;
};

console.log([1, 2, 3].map());

/**
 * Create a bind method that accepts a function as parameter
 */
Function.prototype.mybind = function (fn) {
  const self = this; // need 'this' to refer to Function
  return function () { // use closure to get self
    console.log(arguments);
    return self.apply(fn, arguments);
  };
};

const Product = {
  expansive: true,
  upgrade() {
    return this.expansive ? 100 : 10;
  },
  addParts(part) {
    return `received ${part}`;
  }
};

const Blank = {
  expansive: false
};

const boundBlankUpgrade = Product.upgrade.mybind(Blank);
const boundBlankAddParts = Product.addParts.mybind(Blank);
console.log(boundBlankUpgrade(), "--- should print 10");
console.log(boundBlankAddParts("new line"), "--- should print 'recevied new line'");
