/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { HashTable } from "../hash-table";

describe('Hash table', () => {
  let ht: HashTable<string>;

  beforeEach(() => {
    ht = new HashTable(17);
  });

  it('Should do set and get', () => {
    ht.set('maroon', '#800000');
    ht.set('yellow', '#FFFF00');
    ht.set('olive', '#808000');
    ht.set('lightcoral', '#F08080');
    ht.set('mediumvioletred', '#C71585');
    ht.set('plum', '#DDA0DD');
    expect(ht.get('maroon')).to.eqls(['maroon', '#800000']);
  });

  it('Should do get keys', () => {
    ht.set('maroon', '#800000');
    ht.set('yellow', '#FFFF00');
    ht.set('olive', '#808000');
    ht.set('lightcoral', '#F08080');
    ht.set('mediumvioletred', '#C71585');
    ht.set('plum', '#DDA0DD');
    expect(ht.keys()).to.have.members(['maroon', 'yellow', 'olive',
      'lightcoral', 'mediumvioletred', 'plum']);
  });


  it('Should do get values', () => {
    ht.set('maroon', '#800000');
    ht.set('yellow', '#FFFF00');
    ht.set('olive', '#808000');
    ht.set('lightcoral', '#F08080');
    ht.set('mediumvioletred', '#C71585');
    ht.set('plum', '#DDA0DD');
    ht.set('newplum', '#DDA0DD');
    expect(ht.values()).to.have.members(['#800000', '#FFFF00', '#808000',
      '#F08080', '#C71585', '#DDA0DD']);
    expect(ht.values()).to.not.have.members(['#800000', '#FFFF00', '#808000',
      '#F08080', '#C71585', '#DDA0DD', '#DDA0DD']);
  });
});
