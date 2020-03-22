/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { SinglyLinkedList } from "../linkedlist";

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
  });
});
