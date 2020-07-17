/**
 * @fileoverview call stack overflow issue with fix
 */

//fill array with 60000 elements
// const list = new Array(60000).join('1.1').split('.');
const list = Array.from(new Array(12900).keys());

/**
 * following without using setTimeout triggers call stack overflow
 *   -------- RangeError: Maximum call stack size exceeded
 * use setTimeout to leverage asynchronous call back, event loop, and then execute call back 
 * to avoid call stack overflow error
 */
function removeItemsFromList() {
  var item = list.pop();
  if (item) {
    console.log(item);
    setTimeout(() => {
      removeItemsFromList();
    }, 0);
    // Or setTimeout(removeItemsFromList, 0);
  }
};

removeItemsFromList();
