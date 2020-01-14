/**
 * @fileoverview Index
 */
import myCurrentLocation, {
  message,
  name,
  getGreeting
} from "./another-module";
import substract, { add } from "./math";

console.log(message);
console.log(name);
console.log(myCurrentLocation);
console.log(getGreeting(name));

console.log(add(10, 123133));
console.log(substract(12990, 987));

const obj = {name: 'walker', title: 'web'};
const objc = {...obj, query: 'find a way'};
console.log(objc);
