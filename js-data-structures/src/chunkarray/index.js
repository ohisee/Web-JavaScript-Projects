/**
 * @fileoverview chunk array
 * divide the array into many subarrays where each subarray is of length size 
 * chunkArray([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]] 
 * chunkArray([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]] 
 * chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]] 
 * chunkArray([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]] 
 * chunkArray([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
 */

function chunkArray(arr = [], size) {
  let result = [];
  let beginIndex = 0;
  // let endIndex = Math.min(size, arr.length)
  // result.push(arr.slice(beginIndex, endIndex));
  while (beginIndex < arr.length) {
    // beginIndex += size;
    // endIndex = Math.min(endIndex + size, arr.length)
    result.push(arr.slice(beginIndex, beginIndex + size));
    beginIndex += size;
  }
  return result;
}

function chunkArrayLoop(arr = [], size) {
  let chunks = [];
  for (let el of arr) {
    let chunk = chunks[chunks.length === 0 ? 0 : chunks.length - 1];
    if (chunk && chunk.length < size) {
      chunk.push(el);
    } else {
      chunks.push([el]);
    }
  }
  return chunks;
}

module.exports = {
  chunkArray,
  chunkArrayLoop
};
