/**
 * @fileoverview JavaScript scope chain, function lexial environment
 */

function sayMyName() { // glabal scope
  var abc = "abc";
  return function findName() {
    var b = "b";
    return function printName() { // local scope
      var c = "c";
      console.log(c);
      console.log(b);
      console.log(abc);
      return "Walker Talker";
    }
  }
}

// function lexial environment
console.log(sayMyName());
console.log(sayMyName()());
console.log(sayMyName()()());
