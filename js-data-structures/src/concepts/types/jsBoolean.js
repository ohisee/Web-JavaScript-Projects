/**
 * @fileoverview JS Boolean object 
 */

console.log(Boolean({}), "--- should print true");
console.log(Boolean([]), "--- should print true");
console.log(Boolean(1), "--- should print true");
console.log(Boolean(0), "--- should print false");
console.log(Boolean(null), "--- should print false");
console.log(Boolean(undefined), "--- should print false");
console.log(Boolean(), "--- should print false");

// nullish coalescing ?? 
console.log(Boolean(null ?? true), "--- should print true");
console.log(Boolean(0 ?? true), "--- should print false");
