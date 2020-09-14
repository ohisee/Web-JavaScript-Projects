/**
 * @fileoverview JavaScript closures
 */

const array = [1, 2, 3, 4, 5, 6, 7];

// should print 'at index 7' when timeout is done 
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log(`at index ${i}`);
  }, 3000);
}

// 'let' enables block scope, each iteration in for loop has its own scope 
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log(`use 'let' keyword, at index ${i}`);
  }, 3000);
}

// use closure
for (var i = 0; i < array.length; i++) {
  setTimeout(function (index) {
    console.log(`use closure by passing a parameter, at index ${index}`);
  }, 3000, i);
}

// use closure
for (var i = 0; i < array.length; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(`use closure by iife, at index ${index}`);
    }, 3000);
  })(i);
}
