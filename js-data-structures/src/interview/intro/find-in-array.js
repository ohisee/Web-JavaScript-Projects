/**
 * @fileoverview find one element in an array 
 */

const large = new Array(1000).fill("nemo");

/**
 * @param {string[]} arr 
 */
function findNemo(arr) {
  console.time("find");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("found nemo");
      break;
    }
  }
  console.timeEnd("find");
}

findNemo(large);
