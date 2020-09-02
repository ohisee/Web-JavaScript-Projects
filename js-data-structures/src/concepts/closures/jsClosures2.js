/**
 * @fileoverview JavaScript closures
 */

// Memory efficient
function heavyDuty(index) {
  const bigArray = new Array(70).fill("^_^");
  console.log("created");
  return bigArray[index];
}

// every call to execute heavyDuty function, it will create a bigArray
console.log(heavyDuty(10));
console.log(heavyDuty(10));
console.log(heavyDuty(10));

const getHeavyDuty = heavyDuty2(); // through JavaScript hoisting
function heavyDuty2() {
  const bigArray = new Array(70).fill("^_^");
  console.log("created again");
  return function (index) { // closure
    return bigArray[index];
  }
}

// only create bigArray one time through JavaScript closure
console.log(getHeavyDuty(10));
console.log(getHeavyDuty(11));
console.log(getHeavyDuty(12));
