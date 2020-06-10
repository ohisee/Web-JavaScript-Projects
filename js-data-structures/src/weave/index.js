/**
 * @fileoverview weave receives two queues as arguments and combines the 
 * contents of each into a new queue
 * the third queue should contain the alterating content of the two queues, 
 * should handle queues of different lengths without inserting 'undefined' into the new one.
 */
const { Queue } = require('./queue');

/**
 * @param {Queue} sourceOne 
 * @param {Queue} sourceTwo 
 */
function weave(sourceOne, sourceTwo) {
  const result = new Queue();
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      result.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      result.add(sourceTwo.remove());
    }
  }
  return result;
};

module.exports = {
  weave
};
