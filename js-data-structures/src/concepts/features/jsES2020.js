/**
 * @fileoverview JS ES2020 features 
 *
 * bigint
 * nullish coalescing ?? 
 * optional chaining ?.
 */

// bigint 
const big = 1n;
console.log(typeof big);
console.log(Number.MAX_SAFE_INTEGER, "--- should print 9007199254740991");

console.log("Big int", 9007199254740991n + 1n);
console.log("Big int", 9007199254740991n - 1n);

console.log("\n\noptional chaining ?. ");

// optional chaining ?. 
const WillWalker = {
  pikachu: {
    species: "Mouse Pokemon",
    height: 0.52,
    weight: 6,
  },
};
const weight = WillWalker.pikachu.weight;
console.log("Will Walker weight", weight);

const WillTalker = {
  talker: {
    species: "talker talker",
    height: 0.8,
    weight: 100,
  },
};

try {
  WillTalker.pikachu.weight;
} catch (err) {
  console.log("Error caught is", err.message);
}

// before 
if (WillTalker && WillTalker.pikachu && WillTalker.pikachu.weight) {
  console.log(WillTalker.pikachu.weight);
} else {
  console.log("undefined");
}

// optional chaining ?. 
// no more throwing TypeError: Cannot read property 
console.log(WillTalker?.pikachu?.weight);

WillTalker.pikachu = {
  species: "Mouse Pokemon",
  height: 0.52,
  weight: 6,
  power: "", // empty string that get evaluated to false 
  // but if we want to check null or undefined to give no power 
};
console.log("Will Talker weight", WillTalker?.pikachu?.weight);

// nullish coalescing ?? 
// empty string that get evaluated to falsy value
// or 'false' also get evaluated to falsy value 
console.log("Will Talker power", WillTalker?.pikachu?.power || "no power");

// use nullish coalescing ?? 
// but if we want to check null or undefined to give no power 
// nullish coalescing does not check falsy values, instead it checks for null or undefined  
console.log("Will Talker power", WillTalker?.pikachu?.power ?? "no power");
