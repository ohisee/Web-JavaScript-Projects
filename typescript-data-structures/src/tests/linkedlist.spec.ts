/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { SinglyLinkedList } from "../singlylinkedlist";
import { DoublyLinkedList } from "../doublylinkedlist";

describe('Linked list test', () => {

  describe('Single linked list push function', () => {
    let slist: SinglyLinkedList<string>;

    beforeEach(() => {
      slist = new SinglyLinkedList<string>();
    });

    it('Should do push', () => {
      slist.push('hello');
      slist.push('how are you');
      expect(slist.getLength()).equals(2);
    });

    it('Should do pop no element', () => {
      slist.push('hello');
      slist.pop();
      slist.pop();
      slist.pop();
      expect(slist.getLength()).equals(0);
    });

    it('Should do pop one element', () => {
      slist.push('hello');
      let r = slist.pop();
      expect(slist.getLength()).equals(0);
      expect(r?.getData()).to.equals("hello");
      expect(slist).to.eql(new SinglyLinkedList<string>());
    });

    it('Should do pop more than one elements', () => {
      slist.push('hello');
      slist.push('how are you');
      let r = slist.pop();
      expect(slist.getLength()).equals(1);
      expect(r?.getData()).to.equals("how are you");
      expect(slist).to.eql(new SinglyLinkedList<string>().push('hello'));
    });

    it('Should do pop more than one elements', () => {
      slist.push('hello');
      slist.push('how are you');
      slist.push('I am fine');
      let r = slist.pop();
      expect(slist.getLength()).equals(2);
      expect(r?.getData()).to.equals("I am fine");
      expect(slist).to.eql(new SinglyLinkedList<string>().push('hello').push('how are you'));
    });

    it('Should do shift one element', () => {
      slist.push('hello');
      let r = slist.shift();
      expect(slist.getLength()).equals(0);
      expect(r?.getData()).to.equals("hello");
      expect(slist).to.eql(new SinglyLinkedList<string>());
    });

    it('Should do shift one element', () => {
      slist.push('hello');
      slist.push('how are you');
      let r = slist.shift();
      expect(slist.getLength()).equals(1);
      expect(r?.getData()).to.equals("hello");
      expect(slist).to.eql(new SinglyLinkedList<string>().push('how are you'));
    });

    it('Should do shift one element', () => {
      slist.push('hello');
      slist.push('how are you');
      slist.push('I am fine');
      let r = slist.shift();
      expect(slist.getLength()).equals(2);
      expect(r?.getData()).to.equals("hello");
      expect(slist).to.eql(new SinglyLinkedList<string>().push('how are you').push('I am fine'));
    });

    it('Should do unshift one element', () => {
      slist.unshift('hello');
      expect(slist.getLength()).equals(1);
      expect(slist).to.eql(new SinglyLinkedList<string>().push('hello'));
    });

    it('Should do unshift one element', () => {
      slist.unshift('how are you');
      slist.unshift('hello');
      expect(slist.getLength()).equals(2);
      expect(slist).to.eql(new SinglyLinkedList<string>().push('hello').push('how are you'));
    });

    it('Should do get one element', () => {
      slist.push('hello');
      slist.push('how are you');
      slist.push('I am fine');
      // console.log(JSON.stringify(slist.get(0), null, 2));
      expect(slist.get(0)?.getData()).to.equals("hello");
      expect(slist.get(1)?.getData()).to.equals("how are you");
      expect(slist.get(2)?.getData()).to.equals("I am fine");
    });

    it('Should do set one element', () => {
      slist.push('hello');
      slist.push('how are you');
      slist.push('I am fine');
      expect(slist.set(1, 'where are you')).equals(true);
      expect(slist.get(0)?.getData()).to.equals("hello");
      expect(slist.get(1)?.getData()).to.equals("where are you");
      expect(slist.get(2)?.getData()).to.equals("I am fine");
    });

    it('Should do insert one element', () => {
      slist.push('hello');
      slist.push('how are you');
      slist.push('I am fine');
      slist.insert(0, 'today is');
      slist.insert(2, 'where are you');
      expect(slist.get(0)?.getData()).to.equals('today is');
      expect(slist.get(1)?.getData()).to.equals('hello');
      expect(slist.get(2)?.getData()).to.equals('where are you');
      expect(slist.get(3)?.getData()).to.equals('how are you');
      expect(slist.get(4)?.getData()).to.equals('I am fine');
    });

    it('Should do delete one element', () => {
      slist.push('hello');
      slist.push('how are you');
      slist.push('I am fine');
      slist.remove(0);
      expect(slist.getLength()).equals(2);
      expect(slist.get(0)?.getData()).to.equals('how are you');
      expect(slist.get(1)?.getData()).to.equals('I am fine');
    });

    it('Should do delete one element', () => {
      slist.push('hello');
      slist.push('how are you');
      slist.push('I am fine');
      slist.remove(2);
      expect(slist.getLength()).equals(2);
      expect(slist.get(0)?.getData()).to.equals('hello');
      expect(slist.get(1)?.getData()).to.equals('how are you');
    });

    it('Should do delete one element', () => {
      slist.push('hello');
      slist.push('how are you');
      slist.push('I am fine');
      slist.remove(1);
      expect(slist.getLength()).equals(2);
      expect(slist.get(0)?.getData()).to.equals('hello');
      expect(slist.get(1)?.getData()).to.equals('I am fine');
    });

    it('Should do reverse singly linked list', () => {
      slist.push('hello');
      let reversedList = slist.reverse();
      expect(reversedList).to.eql(new SinglyLinkedList<string>().push('hello'));
    });

    it('Should do reverse singly linked list', () => {
      slist.push('1');
      slist.push('2');
      let reversedList = slist.reverse();
      expect(reversedList).to.eql(
        new SinglyLinkedList<string>().push('2').push('1'));
    });

    it('Should do reverse singly linked list', () => {
      slist.push('1');
      slist.push('2');
      slist.push('3');
      slist.push('4');
      slist.push('5');
      let reversedList = slist.reverse();
      // console.log(JSON.stringify(reversedList, null, 2));
      expect(reversedList).to.eql(
        new SinglyLinkedList<string>().push('5').push('4').push('3').push('2').push('1'));
    });
  });

  describe('Doubly linked list', () => {
    let dll: DoublyLinkedList<string>;

    beforeEach(() => {
      dll = new DoublyLinkedList<string>();
    });

    it('Should do push', () => {
      let r = dll.push('hello');
      expect(r.getLength()).equals(1);
    });

    it('Should do pop', () => {
      dll.push('hello');
      let r = dll.pop();
      expect(r?.getData()).equals('hello');
      expect(dll).to.eql(new DoublyLinkedList<string>());
    });

    it('Should do pop', () => {
      dll.push('hello');
      dll.push('how are you');
      let r = dll.pop();
      expect(r?.next).equals(null);
      expect(r?.previous).equals(null);
      expect(r?.getData()).equals('how are you');
      expect(dll).to.eql(new DoublyLinkedList<string>().push('hello'));
    });

    it('Should do shift', () => {
      dll.push('hello');
      let r = dll.shift();
      expect(r?.getData()).equals('hello');
      expect(dll).to.eql(new DoublyLinkedList<string>());
    });

    it('Should do shift', () => {
      dll.push('hello');
      dll.push('how are you');
      dll.push('I am fine');
      let r = dll.shift();
      expect(r?.next).equals(null);
      expect(r?.previous).equals(null);
      expect(r?.getData()).equals('hello');
      expect(dll).to.eql(
        new DoublyLinkedList<string>().push('how are you').push('I am fine'));
    });

    it('Should do unshift', () => {
      dll.push('2');
      dll.unshift('1');
      expect(dll.getLength()).equals(2);
      expect(dll).to.eql(
        new DoublyLinkedList<string>().push('1').push('2'));
    });

    it('Should do get one element', () => {
      dll.push('0');
      dll.push('1');
      dll.push('2');
      dll.push('3');
      dll.push('4');
      dll.push('5');
      dll.push('6');
      dll.push('7');
      dll.push('8');
      dll.push('9');
      dll.push('10');
      dll.push('11');
      dll.push('12');
      dll.push('13');
      dll.push('14');
      dll.push('15');
      dll.push('16');
      expect(dll.get(3)?.getData()).equals('3');
      expect(dll.get(8)?.getData()).equals('8');
      expect(dll.get(14)?.getData()).equals('14');
      expect(dll.get(9)?.getData()).equals('9');
      expect(dll.get(16)?.getData()).equals('16');
    });

    it('Should do set one element', () => {
      dll.push('hello');
      dll.push('how are you');
      dll.push('I am fine');
      expect(dll.set(1, 'where are you')).equals(true);
      expect(dll.get(0)?.getData()).to.equals("hello");
      expect(dll.get(1)?.getData()).to.equals("where are you");
      expect(dll.get(2)?.getData()).to.equals("I am fine");
    });

    it('Should do insert elements', () => {
      dll.push('hello');
      dll.push('how are you');
      dll.push('I am fine');
      expect(dll.insert(0, 'today is')).equals(true);
      expect(dll.insert(2, 'where are you')).equals(true);
      expect(dll.insert(5, 'LAST!')).equals(true);
      expect(dll.get(0)?.getData()).to.equals('today is');
      expect(dll.get(1)?.getData()).to.equals('hello');
      expect(dll.get(2)?.getData()).to.equals('where are you');
      expect(dll.get(3)?.getData()).to.equals('how are you');
      expect(dll.get(4)?.getData()).to.equals('I am fine');
      expect(dll.get(5)?.getData()).to.equals('LAST!');
    });

    it('Should do remove element', () => {
      dll.push('hello');
      dll.push('how are you');
      dll.push('I am fine');
      expect(dll.remove(0)?.getData()).equals('hello');
      expect(dll.get(0)?.getData()).to.equals('how are you');
      expect(dll.get(1)?.getData()).to.equals('I am fine');
    });

    it('Should do remove element', () => {
      dll.push('hello');
      dll.push('how are you');
      dll.push('I am fine');
      expect(dll.remove(1)?.getData()).equals('how are you');
      expect(dll.get(0)?.getData()).to.equals('hello');
      expect(dll.get(1)?.getData()).to.equals('I am fine');
    });

    it('Should do remove element', () => {
      dll.push('hello');
      dll.push('how are you');
      dll.push('I am fine');
      expect(dll.remove(2)?.getData()).equals('I am fine');
      expect(dll.get(0)?.getData()).to.equals('hello');
      expect(dll.get(1)?.getData()).to.equals('how are you');
    });

    it('Should do reverse', () => {
      dll.push('5').push('10').push('15').push('20');
      dll.reverse();
      expect(dll.getLength()).equals(4);
      expect(dll.get(0)?.getData()).equals('20');
      expect(dll.get(1)?.getData()).equals('15');
      expect(dll.get(2)?.getData()).equals('10');
      expect(dll.get(3)?.getData()).equals('5');
    });

    it('Should do reverse', () => {
      dll.push('5').push('10');
      dll.reverse();
      expect(dll.getLength()).equals(2);
      expect(dll.get(0)?.getData()).equals('10');
      expect(dll.get(1)?.getData()).equals('5');
    });
  });
});
