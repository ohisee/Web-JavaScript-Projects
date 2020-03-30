/**
 * @fileoverview stack using JavaScript array
 */

const stack = [];

// Last in first out
stack.push('.com');
stack.pop();

// Last in first out from beginning
// must re-index all other elements
stack.unshift('create new file');
stack.shift();

const queue = [];

// first in first out
queue.push('print first file');
queue.shift(); // must re-index

queue.unshift('print first file'); // must re-index
queue.pop();
