/**
 * @fileoverview Interface
 */

// Use as type
interface Component {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// Or
type Person = {
  readonly name: string;
  age: number;
  greet(phrase: string): void;
};

let user1: Component;

user1 = {
  name: 'Runner',
  age: 100,

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
};

user1.greet('Hi there, I am');

// here is why interface
interface AnotherInterface { }

interface Named {
  // Can only set once
  readonly name: string;
  // Optional properties
  outputName?: string;
  readonly optionalName?: string;
}

// Interface inheritance
interface Greetable extends Named, AnotherInterface {
  // Can only set once
  // readonly name: string;
  greet(phrase: string): void;
}

// Can implement multiple interfaces
class Greeter implements Greetable {
  name: string;
  something?= 100;
  optionalName?: string;

  constructor(name: string, optionalName?: string) {
    this.name = name;
    if (optionalName) {
      this.optionalName = optionalName;
    }
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
    if (this.optionalName) {
      console.log(`${phrase} ${this.optionalName}`);
    }
  }
}

let user2: Greetable = new Greeter('Runner');
user2.greet('Hi there, I am');

// Function type
type AddFnType = (n1: number, n2: number) => number;

let addFn: AddFnType = (n1: number, n2: number) => {
  return n1 + n2;
};

// Use interface as type
interface AddFn {
  (n1: number, n2: number): number;
}

let addFn2: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};
