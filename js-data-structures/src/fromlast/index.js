/**
 * @fileoverview from last element of a linked list 
 * given a linked list, return the element n spaces from the last node in the list 
 * without calling the size() method of the linked list 
 */
const { LinkedList } = require("./linkedlist");

/**
 * assume that n is always less than the size of linked list
 * @param {LinkedList} linkedList 
 * @param {number} n 
 */
function fromLast(linkedList, n) {
  let slower = linkedList.getFirst();
  let faster = linkedList.getFirst();
  let counter = 0;
  while (counter < n && faster) {
    counter += 1;
    faster = faster.next;
  }
  while (slower && faster && faster.next) {
    slower = slower.next;
    faster = faster.next;
  }
  return slower;
}

module.exports = {
  fromLast
};
