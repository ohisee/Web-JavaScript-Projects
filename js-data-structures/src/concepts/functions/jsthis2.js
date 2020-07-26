/**
 * @fileoverview JavaScript this keyword
 */

const start = function () {
  console.log("start", this); // global object
  const b = function () {
    console.log("b", this); // global object
    const c = {
      hi: function () {
        console.log("c", this);
      }
    };
    c.hi(); // c object
  };
  b();
};

start();

console.log("-----------------");

// another example of 'this' keyword
const mainObj = {
  name: "Talker",
  sing() {
    console.log('mainObj', this); // mainObj object
    var anotherFunction = function () {
      console.log('mainObj another function', this); // global object
    };
    anotherFunction();
  }
};

mainObj.sing();

// Resolve referring to global object issue 
// 1) use ES6 arrow function
// Lexically bound obj using ES6 arrow function 
const lexicallyBoundObj = {
  name: "Talker",
  sing() {
    console.log('lexicallyBoundObj', this); // lexicallyBoundObj object
    var anotherFunction = () => {
      console.log('lexicallyBoundObj another function', this); // lexicallyBoundObj object
    };
    anotherFunction();
  }
};

lexicallyBoundObj.sing();

// Resolve referring to global object issue 
// 2) use JavaScript bind
// Lexically bound obj using ES6 arrow function 
const useBindObj = {
  name: "Talker",
  sing() {
    console.log('useBindObj', this); // useBindObj object
    var anotherFunction = function () {
      console.log('useBindObj another function', this); // useBindObj object
    };
    return anotherFunction.bind(this);
  }
};

useBindObj.sing()();

const useSelfObj = {
  name: "Talker",
  sing() {
    console.log('useSelfObj', this); // useBindObj object
    var self = this;
    var anotherFunction = function () {
      console.log('useSelfObj another function', self); // useBindObj object
    };
    anotherFunction();
  }
};

useSelfObj.sing();
