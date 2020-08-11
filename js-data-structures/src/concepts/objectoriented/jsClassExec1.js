/**
 * @fileoverview JavaScript from procedural to object oriented programming
 */

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}

/**
 * polymorphism, extend the Character class to have a Queen class
 */
class Queen extends Character {
  /**
   * @param {"hearts"|"clubs"|"spades"|"dimands"} type 
   */
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  attack() {
    console.log(super.attack());
    return `I am the ${this.name} of ${this.type}`;
  }
}

let victoria = new Queen('Victoria', 'army', 'hearts');
console.log(victoria.attack());

victoria = new Queen('Victoria', 'army', 'clubs');
console.log(victoria.attack());

victoria = new Queen('Victoria', 'army', 'spades');
console.log(victoria.attack());

victoria = new Queen('Victoria', 'army', 'dimands');
console.log(victoria.attack());
