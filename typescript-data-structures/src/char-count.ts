/**
 * @fileoverview Char count
 */
// 1. make empty object
// 2. loop through input string
// 3. return output object
function charCount(str: string) {
  const result: { [key: string]: number } = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char]) {
        result[char] += 1;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

console.log(charCount('Hello'));
console.log(charCount('Hi, how are you!'));

function isAlphanumeric(char: string): boolean {
  const charCode = char.charCodeAt(0);
  if ((charCode < 97 || charCode > 122) // a - z
    && (charCode < 65 || charCode > 90) // A - Z
    && (charCode < 48 || charCode > 57) // 0 - 9
  ) {
    return false;
  }
  return true;
}

function charCountImproved(str: string) {
  const result: { [key: string]: number } = {};
  for (let char of str) {
    if (isAlphanumeric(char)) {
      char = char.toLowerCase();
      // nullish coalescing operator
      result[char] = ++result[char] ?? 1; // Or result[char] = ++result[char] || 1;
    }
  }
  return result;
}

console.log(charCount('@@@H%e&l*l$$$$$$$o^^^'));
console.log(charCount('***********Hi, how are you!---------'));
