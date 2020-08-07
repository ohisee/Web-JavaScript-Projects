/**
 * @fileoverview JavaScript pass by value, pass by reference
 */

const number = 100;
const string = "Wonderful";
let obj1 = {
  value: "obj1 value"
};
let obj2 = {
  value: "obj2 value"
};
let obj3 = obj2;

function change(number, string, obj1, obj2) {
  number = number * 10; // does not change parameter number value
  string = "Walker"; // does not change parameter string value
  obj1 = obj2; // does not change obj1 reference
  obj2.value = "hahahahaha"; // obj2 gets changed
  console.log("inside change obj1", obj1, "--- should print '{ value: 'hahahahaha' }'");
  console.log("inside change obj2", obj2, "--- should print '{ value: 'hahahahaha' }'");
}

change(number, string, obj1, obj2);

//Guess the outputs here before you run the code: 
console.log(number, "--- should print 100");
console.log(string, "--- should print 'Wonderful'");
console.log(obj1.value, "--- should print 'obj1 value'");
console.log(obj2.value, "--- should print 'hahahahaha'");
console.log(obj3.value, "--- should print 'hahahahaha'");
