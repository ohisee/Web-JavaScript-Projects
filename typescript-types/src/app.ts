/**
 * @fileoverview generic types
 */

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string, hobbies: string[] }, { age: number }>({ name: 'runner', hobbies: ['sports'] }, { age: 100 });
console.log(mergedObj.age);

// will not include 100 in merged object
const mergedObjWithNum = merge({ name: 'runner', hobbies: ['sports'] }, 100);
console.log(mergedObjWithNum);

// type constraint
function merge2<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: 'runner', hobbies: ['sports'] }, { age: 100 });
console.log(mergedObjWithNum);
