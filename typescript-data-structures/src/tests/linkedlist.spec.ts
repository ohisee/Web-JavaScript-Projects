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
      slist.set(1, 'where are you')
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
  });
});
