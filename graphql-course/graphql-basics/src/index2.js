import myCurrentLocation, { message, name, getGreeting } from './myModule';
// Or
// import myCurrentLocation from './myModule';

import myAddFunction, { substract } from './math';

console.log(message);
console.log(name);
console.log(myCurrentLocation);
console.log(getGreeting('Jessica'));

console.log(myAddFunction(10, 98));
console.log(substract(199, 89));