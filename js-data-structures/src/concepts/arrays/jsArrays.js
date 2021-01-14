/**
 * @fileoverview JavaScript array's methods
 */

/** @type {number[]} */
const myArray = [1, 2, 3, 4, 5, 6, 7];

const newArr1 = myArray.map(_ => "b");

const newArr2 = myArray.filter(el => el > 4);

const insideArr = myArray.includes(3, 1);

const notInsideArr = myArray.includes(3, 5);

const shouldBeFalse = [{ id: 1 }, { id: 2 }, { id: 3 }].includes({ id: 1 });

const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

const shouldBeTrue = [obj1, obj2, obj3].includes(obj1);

const elInArray1 = myArray.find(el => el === 5);

const elInArray2 = myArray.find(el => el > 4);

const elInArray3 = [{ id: 1 }, { id: 2 }, { id: 3 }].find(el => el.id === 2);

const reducedResult = myArray.reduce(
  (accumulator, currentElement) => accumulator + currentElement, 0);

/**
 * note need to use function, not arrow function 
 * need 'this' to be determined at call time when running the function 
 * @param {any[]} arr 
 */
Array.prototype.simpleCompare = function (arr) {
  if (!(arr instanceof Array) || this.length !== arr.length) {
    return false;
  }
  return this.every((item, index) => item === arr[index]);
}

module.exports = {
  newArr1,
  newArr2,
  insideArr,
  notInsideArr,
  shouldBeFalse,
  shouldBeTrue,
  elInArray1,
  elInArray2,
  elInArray3,
  reducedResult,
};
