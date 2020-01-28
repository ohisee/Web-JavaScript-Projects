/**
 * @fileoverview generic types
 */
const names: Array<string> = ['walker', 'runner']; // same as string[]
names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done');
  }, 2000);
});

// data is string type
promise.then(data => {
  data.split(' ');
});
