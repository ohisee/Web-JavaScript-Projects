/**
 * @fileoverview JavaScrpt ES10
 *
 * String flat 
 * String flatMap 
 * String trim start and trim end 
 * Object fromEntries
 * Object fromEntries is opposite of Object entries 
 * try {
 *  some codes
 * } catch { // no need to include a parameter
 * 
 * }
 * 
 */

// flat 
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.flat());

const arr2 = [1, [2, 3], 4, 5, 6];
console.log(arr2.flat());

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));

const arrEmptyEntries = [1, 2, [3, , , , , , , , 4, [5, 6]]];
console.log(arrEmptyEntries.flat(2), "--- should print [ 1, 4, 9, 16, 25, 36 ]");

// flatMap 
const parks = arr.flatMap(num => num ** 2);
console.log(parks);

// string trim start and trim end 
const userEmail1 = "    userWalker@gmail.com";
const userEmail2 = "userTalker@gmail.com       ";
console.log(userEmail1.trimStart());
console.log(userEmail2.trimEnd());

// fromEntries
const userProfiles = [["talker", 100], ["walker", 101], ["runner", 102]];
const userProfilesObj = Object.fromEntries(userProfiles);
console.log(userProfilesObj);
console.log(Object.entries(userProfilesObj));

// try and catch without parameter 
try {
  eleven + " hi"
} catch {
  console.log("\n\nsomething is wrong\n\n")
}
