// 
// function constructor

var john = {
  name: 'john',
  yearOfBirth: 1990,
  job: 'teacher'
};

// function constructor
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function () {
  console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var j = new Person('john', 1990, 'teacher');
var jane = new Person('jane', 1969, 'designer');
var mark = new Person('make', 1997, 'retired');

j.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(j.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// Object create
var personProto = {
  calculateAge: function () {
    console.log(2018 - this.yearOfBirth);
  }
};

var jon = Object.create(personProto);
jon.name = 'Jon';
jon.yearOfBirth = 1990;
jon.job = 'teacher';

var janee = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1992 },
  job: { value: 'designer' }
});

// passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}


function calculateAgeFn(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function isFullAgeLimit(limit, el) {
  return el >= limit;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAgeFn);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);

// bind can be used to preset argument
// a copy of isFullAgeLimit function with preset argument as 20 to arrayCalc function
var fullJapan = arrayCalc(ages, isFullAgeLimit.bind(this, 21));
console.log('fullJapan', fullJapan);

// functions returning functions
// functions are object, return function is to return object

function interviewQuestions(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you please explain whaty UX design is?')
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log(name, ', what subject do you teach?');
    }
  } else {
    return function () {
      console.log('Hello, ' + name + ' what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestions('teacher');
teacherQuestion('john');

var designQuestion = interviewQuestions('designer');
designQuestion('john');

interviewQuestions('teacher')('mark');

// Immediately invoked function expressions IIFE
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// IIFE
(
  function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
  }
)();
// for data privacy
// console.log(score) -----> error

(
  function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
  }
)(5);

// Closures

function retirement(retirementAge) {
  var a = ' years left until retirement';
  return function (yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirement(66)(1999);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestionsClosure(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain whaty UX design is?')
    } else if (job === 'teacher') {
      console.log(name + ', what subject do you teach?');
    } else {
      console.log('Hello, ' + name + ' what do you do?');
    }
  }
}

interviewQuestionsClosure('teacher')('john');

// function bind, call, and apply

var jak = {
  name: 'John',
  age: 100,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlement! ' + "I am " + this.name + ". I'm a " + this.job);
    } else if (style === 'friendly') {
      console.log('Good day ' + timeOfDay + ', everyone! ' + "I am " + this.name + ". I'm a " + this.job);
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer',
}

jak.presentation('formal', 'morning');
// method borrowing, 'call' sets this variable to emily
jak.presentation.call(emily, 'friendly', 'afternoon');

// jak.presentation.apply(emily, ['friendly', 'afternoon']);

// 'bind' returns a function and preset some arguments, carrying
var johnFriendly = jak.presentation.bind(jak, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = jak.presentation.bind(emily, 'formal');
emilyFormal('afternoon');