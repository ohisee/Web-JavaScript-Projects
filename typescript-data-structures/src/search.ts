/**
 * @fileoverview search
 */
export function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

export function binarySearch(sortedarr: number[], target: number): number {
  let start = 0;
  let end = sortedarr.length - 1;
  let middle = Math.floor((end - start) / 2) + start;
  while (sortedarr[middle] !== target && start <= end) {
    // let middle = Math.floor((end - start) / 2) + start;
    // let middle = Math.floor((start + end) / 2);
    // if (sortedarr[middle] === target) {
    //   return middle;
    // } else if (target < sortedarr[middle]) {
    //   end = middle - 1;
    // } else if (target > sortedarr[middle]) {
    //   start = middle + 1;
    // }
    if (target < sortedarr[middle]) {
      end = middle - 1;
    } else if (target > sortedarr[middle]) {
      start = middle + 1;
    }
    middle = Math.floor((end - start) / 2) + start
  }
  // return -1;
  return sortedarr[middle] === target ? middle : -1;
}

export function naiveStringSearch(longstr: string, shortstr: string): number {
  let count = 0;
  for (let i = 0; i < longstr.length; i++) {
    let matched = true;
    for (let j = 0; j < shortstr.length; j++) {
      if (shortstr[j] !== longstr[j + i]) {
        matched = false;
        break;
      }
    }
    count += (matched) ? 1 : 0;
  }
  return count;
}

export function buildLongestPrefixSuffixTable(pattern: string): number[] {
  let lsp: number[] = new Array(pattern.length).fill(0);
  let next = 1;
  let current = 0;
  while (next < pattern.length) {
    if (pattern[current] === pattern[next]) {
      current += 1;
      lsp[next] = current;
      next += 1;
    } else {
      if (current != 0) { // go back
        current = lsp[current - 1];
      } else {
        lsp[next] = 0;
        next += 1;
      }
    }
  }
  return lsp;
}
