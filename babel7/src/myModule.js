/**
 * This is a function
 * @param {*} name 
 */
const sayHello = (name) => {
  console.log(`Hello ${name}`);
}

const testObjectSpread = (args) => {
  return {
    id: '123',
    ...args
  };
}

export { sayHello, testObjectSpread };