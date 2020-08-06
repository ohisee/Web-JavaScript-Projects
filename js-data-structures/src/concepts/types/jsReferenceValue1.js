/**
 * @fileoverview JavaScript pass by value, pass by reference
 */

// pass by value
var ab = 100;
var ef = ab; // copy value and create that value some where else in memory

// pass by reference
let obj11 = { name: "Walker", password: "123" };
let obj22 = obj11; // address in memory where obj11 is located 

obj22.password = "easyeasy";

console.log(obj11);
console.log(obj22);

var c = [1, 2, 3, 4, 5];
var cc = [].concat(c); // a new array
var d = c;
d.push(187623);
console.log(c);
console.log(cc);
console.log(d);

let obj111 = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: {
    deep: "try to copy this"
  }
};
let clone = Object.assign({}, obj111); // shallow clone
let clone2 = { ...obj111 }; // shallow clone
let superClone = JSON.parse(JSON.stringify(obj111));

obj111.c = 100;
obj111.d.deep = "hahaha";
console.log(obj111);
console.log(clone);
console.log(clone2);
console.log(superClone);
