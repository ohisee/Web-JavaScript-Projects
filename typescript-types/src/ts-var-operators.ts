// JavaScript does allow the following
// var only has functional scope and global scope
// if (age > 90) {
//   var isOld = true;
// }
// console.log(isOld);

// const and let have block scope

// Arrow function
// default value and must be at last from right
const add = (a: number, b: number = 1) => a + b;
console.log(add(2, 9));

const printOutput: (a: number | string) => void = input => console.log(input);

printOutput(add(8));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

// Spread operator
const hobbies = ['sports', 'cooking'];
const otherHobbies = ['hiking', ...hobbies];
otherHobbies.push(...hobbies);

const Person = {
  firstName: 'name',
  age: 100
};

// just assigne pointer 
// const copiedPerson = Person;

const copiedPerson = { ...Person };

// Rest parameter
const add3Numbers = (...numbers: [number, number, number]) => {
  return numbers.reduce((previous, currrent) => {
    return previous + currrent;
  }, 0)
};

console.log(add3Numbers(5, 10, 3.7));

const addNumbers = (...numbers: number[]) => {
  return numbers.reduce((previous, currrent) => {
    return previous + currrent;
  }, 0)
};

const sum = addNumbers(5, 10, 2, 3.7, 8);
console.log(sum);

// Array destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2);

const { firstName: userName, age } = Person;
console.log(userName, age);
