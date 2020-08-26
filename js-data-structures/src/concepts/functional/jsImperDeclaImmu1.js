/**
 * @fileoverview JavaScript functional programming
 *
 * imperative
 * declarative
 * immutability
 */

// imperative
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// declarative
[1, 2, 3, 4, 5, 6].forEach(item => console.log(item));

// immutability
const obj = { name: "walker" };

/**
 * pure function
 */
function clone(obj) {
  return { ...obj };
}

/**
 * pure function
 */
function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "changing";
  return obj2;
}

console.log(updateName(obj));
console.log(obj);
