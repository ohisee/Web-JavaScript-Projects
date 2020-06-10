/**
 * @fileoverview weave receives two queues as arguments and combines the 
 * contents of each into a new, third queue
 * the third queue should contain the *alterating* content of the two queues, 
 * should handle queues of different lengths without inserting 
 * 'undefined' into the new one.
 */
const { Queue } = require('./queue');

function weave(sourceOne = new Queue(), sourceTwo = new Queue()) {
  const result = new Queue();
  while (sourceOne.peek() && sourceTwo.peek()) {
    let sone = sourceOne.remove();
    let stwo = sourceTwo.remove();
    result.add(sone);
    result.add(stwo);
  }
  while (sourceOne.peek()) {
    let sone = sourceOne.remove();
    result.add(sone);
  }
  while (sourceTwo.peek()) {
    let stwo = sourceTwo.remove();
    result.add(stwo);
  }
  return result;
};

module.exports = {
  weave
};
