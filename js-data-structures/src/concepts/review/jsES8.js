/**
 * @fileoverview JavaScript ES8
 *
 */

// string padding 
const str = "how are you";
console.log(str.padStart(20)); // length must be longer than str's length
console.log(str.padEnd(20, "?")); // length must be longer than str's length

// trailing comma in function's parameter list 
// there is a comma at last parameter 
const fun = (a, b, c, d, e, f,) => {
  console.log(a, b, c, d, e, f);
}

fun(1, 2, 3, 4, 5, 6,);

// Object.values
// Object.entries
// Object.keys
const Params = {
  username0: "Walker",
  username1: "Talker",
  username2: "Runner",
}

// Object.keys
Object.keys(Params).forEach((key, index) => {
  console.log(index, key, Params[key])
});

// Object.values
Object.values(Params).forEach((value, index) => {
  console.log(index, value);
});

// Object.entries
Object.entries(Params).forEach(entry => {
  console.log(entry);
});

const s = Object.entries(Params).map(entry => {
  return entry[1] + entry[0].replace("username", "");
});
console.log(s);

// async await 
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hello");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Runner");
});

async function play() {
  try {
    let abc = await promise1;
    console.log(abc);
    let efg = await promise2;
    console.log(efg);
  } catch (e) {
    console.error(e);
  }
}

play();
