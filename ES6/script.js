
// ES5
function driversLicence5(passedTest) {

  if (passedTest) {
    console.log(firstName);
    var firstName = 'John';
    var yearOfBirth = 1990;
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);

let i = 90;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

// ES6/ES2015 blocks and IIFEs

{
  const a = 1;
  let b = 2;
}

//ES5
(function () {
  var c = 3;
})();

// ES5
var box5 = {
  color: 'green',
  position: 1,
  click: function () {
    var self = this;
    document.querySelector('.green').addEventListener('click', function () {
      var str = "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  }
};
// box5.click();

// ES6
var box6 = {
  color: 'green',
  position: 1,
  click: function () {
    document.querySelector('.green').addEventListener('click', () => {
      var str = "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  }
};
box6.click();

function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends = function (friends) {
  var arr = friends.map(function (el) {
    return this.name + ' is friend with ' + el;
  }.bind(this));

  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Run').myFriends(friends);

// ES6
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map((el) => `${this.name} is friend with ${el}`);
  console.log(arr);
};

new Person('Walk').myFriends6(friends);

// destructuring
// ES5
var jo = ['john', 26];
var name = jo[0];
var age = jo[1];

// ES6
const [name6, age6] = ['john', 26];
console.log(name6);
console.log(age6);

const obj = {
  firstName: 'jon',
  lastName: 'Simth',
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

function calculateRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age1, retirement] = calculateRetirement(1990);
console.log(age1);
console.log(retirement);

// Arrays
// return node list
const boxes = document.querySelectorAll('.box');

// ES5
var boxArray5 = Array.prototype.slice.call(boxes);
boxArray5.forEach(function (current) {
  current.style.backgroundColor = 'dodgerblue';
});

// ES6  
const boxArray6 = Array.from(boxes);
setTimeout(() => {
  boxArray6.forEach(current => current.style.backgroundColor = 'green');
}, 3000);

for (const cur of boxArray6) {
  if (cur.className === 'box blue') {
    continue;
  }
  cur.textContent = 'I changed to blue';
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function (current) {
  return current >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(current => current >= 18));
console.log(ages.find(current => current >= 18));

// spread operator
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['john', 'jane', 'mark'];
const familyMiller = ['mary', 'bob', 'ann'];
const bigFamily = [...familySmith, 'new child', ...familyMiller];
console.log(bigFamily);

// also works for node list
const h = document.querySelector('h1');
const boxess = document.querySelectorAll('.box');
const all = [h, ...boxess];
Array.from(all).forEach(current => current.style.color = 'purple');

// Rest parameters

// ES5
function isFullAge5() {
  console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);
  var y = new Date().getFullYear();
  argsArr.forEach(function (current) {
    console.log((y - current) >= 18);
  });
}

isFullAge5(2011, 1999, 2005);
isFullAge5(1990, 1999, 1966, 2011, 2016);

// ES6
function isFullAge6(...years) {
  console.log(years);
  const y = new Date().getFullYear();
  years.forEach(current => console.log((y - current) >= 18));
}
isFullAge6(1990, 1999, 1966, 2011, 2016);

// ES5
function isFullAge5Limit(limit) {
  console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments, 1); // start at position 1, skip first element
  console.log(argsArr);
  var y = new Date().getFullYear();
  argsArr.forEach(function (current) {
    console.log((y - current) >= limit);
  });
}
isFullAge5Limit(21, 1996, 1999, 2005);

function isFullAge6Limit(limit, ...years) {
  console.log(years);
  const y = new Date().getFullYear();
  years.forEach(current => console.log((y - current) >= limit));
}

isFullAge6Limit(21, 1996, 1999, 2005);

// ES6 maps
const questions = new Map();
questions.set('question', 'what is the official name of the latest JavaScript version?');
questions.set(1, 'ES5');
questions.set(2, 'ES6');
questions.set(3, 'ES2015');
questions.set(4, 'ES7');
questions.set('correct', 3);
questions.set(true, 'Correct answer');
questions.set(false, 'Wrong, please try again');

console.log(questions.get('question'));
console.log(questions.size);

if (questions.has(4)) {
  // questions.delete(4);
  console.log('Answer 4 is here');
}
// questions.clear();
questions.forEach((value, key) => console.log(`${key}, ${value}`));

for (let [key, value] of questions.entries()) {
  // console.log(`This is ${key}, ${value}`);
  if (typeof (key) === 'number') {
    console.log(`${key}: answer --- ${value}`);
  }
}

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(questions.get(ans === questions.get('correct')));

// Classes
// ES5

var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log('ES5', this.name, age);
};

var j5 = new Person5('john', 1990, 'teacher');
j5.calculateAge();

// ES5 inheritance
var Athlete5 = function (name, yearOfBirth, job, olymicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olymicGames = olymicGames;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);
// Must be after Athlete5.prototype assignment
Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
}
var jAthlete5 = new Athlete5('john', 1990, 'swimmer', 3, 10);
jAthlete5.calculateAge();
jAthlete5.wonMedal();

// ES6
// class not hoisted
// can only add methods to class, not properties
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log('hello from static method');
  }
}

const j6 = new Person6('john', 1990, 'teacher');
Person6.greeting();

// ES6 subclass
class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olymicGames, medals) {
    super(name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const jAthlete6 = new Athlete6('john', 1990, 'swimmer', 3, 10);
jAthlete6.wonMedal();
jAthlete6.calculateAge();

// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. 
All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
-1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
-4. Total and average length of the town's streets
-5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, 
default parameters, maps, arrow functions, destructuring, etc.

*/

class TownElement {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends TownElement {
  /**
   * 
   * @param {*} name 
   * @param {*} buildYear 
   * @param {*} trees 
   * @param {*} area 
   */
  constructor(name, buildYear, trees, area) {
    super(name, buildYear);
    this.trees = trees;
    this.area = area;
  }

  treeDensity() {
    if (this.area > 0) {
      const density = this.trees / this.area;
      console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
  }

  calculateAge() {
    const y = new Date().getFullYear();
    return y - this.buildYear;
  }

  treeCount() {
    if (this.trees >= 1000) {
      console.log(`${this.name} has more than 1000 trees`);
    }
  }
}

class Street extends TownElement {
  /**
   * 
   * @param {*} name 
   * @param {*} buildYear 
   * @param {*} length 
   * @param {*} size, default to 3 normal size 
   */
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    classification.set('unknown', 'normal');
    console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street`);
  }
}

const streets = [
  new Street('Main Street', 1990, 200, 4),
  new Street('Ocean Street', 1988, 400, 2),
  new Street('1st Street', 1991, 312, 5),
  new Street('2st Street', 1981, 212, 1),
  new Street('3st Street', 2000, 112, 'unknown'),
];

// Total and average length of the town's streets
function totalAndAverageStreetLength(streets) {
  // let l = 0;
  // for (let { length } of streets) {
  //   l += length;
  // }
  const l = streets.map(current => current.length).reduce((acc, cur) => acc + cur, 0);
  console.log(`Our ${streets.length} streets have a total length of ${l} km, with an average of ${l / streets.length} km`);
}

function streetsInfo(streets) {
  streets.forEach(current => current.classifyStreet());
}

const parks = [
  new Park('Oak Park', 2000, 200, 120),
  new Park('National Park', 2000, 1200, 120),
  new Park('SF Park', 2000, 200, 120),
  new Park('Golder Park', 2000, 1200, 120),
  new Park('Silver Park', 2000, 200, 120),
];

function averageAgeInfo(parks) {
  let a = 0;
  for (let park of parks) {
    a += park.calculateAge();
  }
  console.log(`Our ${parks.length} parks have an average of ${a / parks.length}`);
}

function treeDensityInfo(parks) {
  parks.forEach(current => current.treeDensity());
}

function treesInfo(parks) {
  parks.filter(current => current.trees >= 1000).forEach(current => current.treeCount());
}

function reportParks(parks) {
  console.log('--------- PARKS REPORT ----------');
  averageAgeInfo(parks);
  treeDensityInfo(parks);
  treesInfo(parks);
}

function reportStreets(streets) {
  console.log('--------- STREET REPORT ----------');
  totalAndAverageStreetLength(streets);
  streetsInfo(streets);
}

reportParks(parks);
reportStreets(streets);

class Cell {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    if (this.head == null) {
      this.head = new Cell(data);
    } else {
      var p = this.head;
      while (p.next != null) {
        p = p.next;
      }
      p.next = new Cell(data);
    }
  }
  
  addToTail(data) {
    if (this.head == null) {
      this.head = new Cell(data);
      this.tail = this.head;
    } else {
      this.tail.next = new Cell(data);
      this.tail = this.tail.next;
    }
  }

  showList() {
    var q = "";
    var p = this.head;
    while (p != null) {
      q = q.concat(`${p.data} `);
      p = p.next;
    }
    console.log(q);
  }
}

var ll = new LinkedList();
ll.add('see');
ll.add('list');
ll.add('again');
ll.showList();

var lll = new LinkedList();
lll.add('second');
lll.add('list');
lll.add('again');
lll.add('again');
lll.add('again');
lll.showList();

var NodeCell = function (data) {
  this.data = data;
  this.next = null;
};

var LinkedListProtoType = function () {
  this.head = null;
  this.tail = null;
};

LinkedListProtoType.prototype.add = function (data) {
  if (this.head == null) {
    this.head = new NodeCell(data);
    this.tail = this.head;
  } else {
    this.tail.next = new NodeCell(data);
    this.tail = this.tail.next;
  }
};

LinkedListProtoType.prototype.showList = function () {
  var p = this.head;
  var r = [];
  while (p != null) {
    r.push(p.data);
    p = p.next;
  }
  console.log(r.join(' '));
};

var lpt = new LinkedListProtoType();
lpt.add('hello');
lpt.add('world');
lpt.add('today');
lpt.add('is');
lpt.add('day');
lpt.showList();


