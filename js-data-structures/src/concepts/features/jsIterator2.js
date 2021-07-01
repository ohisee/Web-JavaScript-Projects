/**
 * @fileoverview JS ES6 iterator, object 
 */

let person = {
  name: "Walker",
  hobbies: ["Sports", "Cooking", "Learning", "Reading", "Investing"],
  [Symbol.iterator]: function () {
    let i = 0;
    let hobbies = this.hobbies;
    return {
      next: function () {
        let value = hobbies[i];
        i++;
        return {
          done: i > hobbies.length ? true : false,
          value: value,
        };
      }
    };
  }
};

// prints each hobby 
for (let hobby of person) {
  console.log(hobby);
}
