/**
 * @fileoverview JavaScript this keyword exercise
 */

var b = {
  name: "Jay",
  say() {
    console.log(this); // b object
  }
};

var c = {
  name: "Jay",
  say() {
    return function () {
      console.log(this); // global or window object
    }
  }
};

var d = {
  name: "Jay",
  say() {
    return () => console.log(this); // d object, 'this' keyword is lexically scoped
  }
};

b.say();
c.say()();
d.say()();
