/**
 * @fileoverview Simple Node.js app.
 */
// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'hello from node js');

console.log('hello');
const person = {
  name: 'Person',
  age: 100,
  greeting: () => {
    // in this function style, this.name is undefined because
    // this is referring to some global object
    return 'hello ' + this.name;
  },
  greeting2: function () {
    return 'hello ' + this.name;
  },
  greeting3() {
    return 'hello ' + this.name;
  }
}

console.log(person.greeting());
console.log(person.greeting2());
console.log(person.greeting3());

// Spread operator
const hobbies = ['cars', 'cooking'];
const copiedHobbies = [...hobbies];
console.log(copiedHobbies);

// Rest operator
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4, 5, 6));

// Async code
setTimeout(() => {
  console.log('Timer is done');
}, 2000);
console.log('Before timer');

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fetch Data Done!');
    }, 2000);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer of Fetch Data is done');
  fetchData().then(text => {
    console.log(text);
    return fetchData();
  }).then(text2 => {
    console.log(text2);
  });
}, 2000);
