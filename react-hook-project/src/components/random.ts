/**
 * @fileoverview Generate random Id
 */
const int: number = 2836674389;
export function randomId(): string {
  return ((Math.random() + Math.random()) * int).toString(36).replace(/\./, '');
}