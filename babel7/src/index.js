import { sayHello, testObjectSpread  } from './myModule';

sayHello('Test');

const ab = {
  a: 'Person Person',
  b: 'San Mateo'
};

console.log(testObjectSpread(ab));