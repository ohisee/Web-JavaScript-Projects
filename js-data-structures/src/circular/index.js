/**
 * @fileoverview circular linked list 
 * given a linked list, return true if the list is circular, false if it is not.
 */
const { LinkedList } = require("./linkedlist");

/**
 * Use two pointers, slower and faster to check if list is circular 
 * @param {LinkedList} linkedlist 
 */
function circular(linkedlist) {
  let slower = linkedlist.getFirst();
  let faster = linkedlist.getFirst();
  while (faster && faster.next && faster.next.next) {
    faster = faster.next.next;
    slower = slower.next;
    if (slower === faster) {
      return true;
    }
  }
  return false;
}

module.exports = {
  circular
};
