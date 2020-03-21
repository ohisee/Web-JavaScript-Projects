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
  });
});
