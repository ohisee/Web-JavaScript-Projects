/**
 * @fileoverview JavaScript closures
 */

/**
 * Encapsulation by closure, principle of least privilege,
 * some data, variables, functions, are not reachable from 
 * outside of this function, using closure
 */
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction += 1;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => { // not reachable from outside of this function, using closure
    timeWithoutDestruction = -1;
    return "launched";
  };
  let intervalId = setInterval(passTime, 1000);
  const clear = () => clearInterval(intervalId);
  return {
    totalPeaceTime: totalPeaceTime,
    clear: clear
  };
};

const button = makeNuclearButton();
(function (t) {
  let counter = 0;
  let intervalId = setInterval(() => {
    console.log(button.totalPeaceTime());
    counter += 1;
    if (counter > t) {
      clearInterval(intervalId);
      button.clear();
    }
  }, 2000);
})(8);
