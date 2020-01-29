/**
 * @fileoverview Generic constraints
 */

//Generic constraints
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const md1 = merge({ name: "walker", hobbies: ["Sports"] }, { id: "id1" });
console.log(md1);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got one element';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`
  }
  // Return a tuple
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there'));
console.log(countAndDescribe(['Sport', 'cooking']));

// 2nd parameter is key / property of 1st parameter
function extractAndConvert<T extends object, U extends keyof T>(obj1: T, key: U) {
  return `Value: ${obj1[key]}`;
}

console.log(extractAndConvert({ name: 'talker' }, "name"));

// Generic class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // does not work with JS primitive data, 
    // this.data.indexOf(item) returns -1 if item is object
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('talker1');
textStorage.addItem('talker2');
textStorage.removeItem('talker1');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(100);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// // object is reference type
// objStorage.addItem({name: "talker"});
// objStorage.addItem({name: "walker"});
// objStorage.removeItem({name: "talker"});
// console.log(objStorage.getItems());


// Built-in utility type by typescript
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial type
function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Sports", "cooking"];
// names.pop();
// names.push("Walker");
