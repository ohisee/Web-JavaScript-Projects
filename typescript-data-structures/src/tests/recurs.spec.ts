/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import {
  power,
  factorial,
  productOfArray,
  recursiveRange,
  fib,
  reverse,
  isPalindrome,
  someRecursive,
  flatten
} from "../recurs";

describe('Recursion', () => {

  describe('Power using recursion', () => {
    it('Should return 1', () => {
      expect(power(3, 0)).equals(1);
    });

    it('Should return 27', () => {
      expect(power(3, 3)).equals(27);
    });

    it('Should return 1024', () => {
      expect(power(2, 10)).equals(1024);
    });
  });

  describe('Factorial using recursion', () => {
    it('Should return 1', () => {
      expect(factorial(0)).equals(1);
    });

    it('Should return 1', () => {
      expect(factorial(1)).equals(1);
    });

    it('Should return 6', () => {
      expect(factorial(3)).equals(6);
    });

    it('Should return 5040', () => {
      expect(factorial(7)).equals(5040);
    });
  });

  describe('Product of array using recursion', () => {
    it('Should return 6', () => {
      expect(productOfArray([1, 2, 3])).equals(6);
    });

    it('Should return 60', () => {
      expect(productOfArray([1, 2, 3, 10])).equals(60);
    });

    it('Should return 27', () => {
      expect(productOfArray([3, 3, 3])).equals(27);
    });
  });

  describe('Recursive range using recursion', () => {
    it('Should return 21', () => {
      expect(recursiveRange(6)).equals(21);
    });

    it('Should return 55', () => {
      expect(recursiveRange(10)).equals(55);
    });
  });

  describe('Fibonacci using recursion', () => {
    it('Should return 3', () => {
      expect(fib(4)).equals(3);
    });

    it('Should return 55', () => {
      expect(fib(10)).equals(55);
    });

    it('Should return 317811', () => {
      expect(fib(28)).equals(317811);
    });

    it('Should return 9227465', () => {
      expect(fib(35)).equals(9227465);
    });
  });

  describe('Reverse using recursion', () => {
    it('Should return emosewa', () => {
      expect(reverse('awesome')).equals('emosewa');
    });

    it('Should return loohcsmhtir', () => {
      expect(reverse('rithmschool')).equals('loohcsmhtir');
    });

    it('Should return eeeeeeeb', () => {
      expect(reverse('beeeeeee')).equals('eeeeeeeb');
    });
  });

  describe('Check is palindrome using recursion', () => {
    it('Should return eee', () => {
      expect(isPalindrome('eee')).equals(true);
    });

    it('Should return false', () => {
      expect(isPalindrome('awesome')).equals(false);
    });

    it('Should return false', () => {
      expect(isPalindrome('foobar')).equals(false);
    });

    it('Should return true', () => {
      expect(isPalindrome('tacocat')).equals(true);
    });

    it('Should return true', () => {
      expect(isPalindrome('amanaplanacanalpanama')).equals(true);
    });

    it('Should return false', () => {
      expect(isPalindrome('amanaplanacanalpandemonium')).equals(false);
    });
  });

  describe('Some recursive with callback', () => {
    it('Should return true', () => {
      expect(someRecursive([1, 2, 3, 4], val => val % 2 !== 0)).equals(true);
    });

    it('Should return true', () => {
      expect(someRecursive([4, 6, 8, 9], val => val % 2 !== 0)).equals(true);
    });

    it('Should return false', () => {
      expect(someRecursive([4, 6, 8], val => val % 2 !== 0)).equals(false);
    });

    it('Should return false', () => {
      expect(someRecursive([4, 6, 8], val => val > 10)).equals(false);
    });
  });

  describe('Flatten array using recursion', () => {
    it('Should return [1,2,3,4,5]', () => {
      expect(flatten([1, [2], 3, [4, 5]])).to.eql([1, 2, 3, 4, 5]);
    });
  });
});
