/**
 * @fileoverview Typescript
 */

// Basic type
function add(input1: number, input2: number, showResult: boolean, phrase: string) {
  if (typeof input1 !== 'number' || typeof input2 !== 'number') {
    throw new Error('Incorrect input');
  }
  const result = input1 + input2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5; // same as 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

// const result = add(number1, number2, printResult);
// console.log(result);

add(number1, number2, printResult, resultPhrase);

enum Role { ADMIN = 'ADMIN', READ_OMLY = 100, AUTHOR = 300, };

// Object Type
const person: {
  name: string;
  age: number;
  hobbies: string[];
  tuple: [number, string]; // Tuple type
  role: Role
} = {
  name: 'person',
  age: 100,
  hobbies: ['Sports', 'Cooking'],
  tuple: [2, 'Author'],
  role: Role.ADMIN
};

console.log(person.name);

let favoriteActivties: any[];
favoriteActivties = ['Sports', 1];

for (let hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

// Union type
function combine(
  input1: number | string,
  input2: number | string,
  // Literal type
  resultConversion: 'as-number' | 'as-text') {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

combine(10, 20, 'as-number');
combine('10', '20', 'as-number');
combine('See', 'that', 'as-text');

// Type alias
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
type User = {
  name: string;
  age: number;
  hobbies: string[];
  tuple: [number, string]; // Tuple type
  role: Role
};

// Demonstration how to use type alias
function combineUsingType(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor) { }

// Function return type
function addWithReturnType(n1: number, n2: number): number {
  return n1 + n2;
}

function printResultFunction(num: number): void {
  console.log('Result: ' + num);
}

printResultFunction(addWithReturnType(11, 29));

// Function type
let combineValues: (a: number, b: number) => number;
combineValues = addWithReturnType;

// Incorrect
// combineValues = 5;
// combineValues = printResultFunction

console.log(combineValues(9, 9));

// Callback type
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(20, 90, (result) => {
  console.log('Callback: ' + result);
});

// Unknown type
let userInput: unknown;
let userName: string;

userInput = 10;
userInput = 'Unknown String';
// Incorrect in typescript
// userName = userInput;
if (typeof userInput === 'string') {
  userName = userInput;
}

// Never type
// function never returns anything
// Or an infinite loop inside a function that never returns
function generateError(message: string, errorCode: number): never {
  throw { message: message, errorCode: errorCode };
}

generateError('An error occurred', 500);
