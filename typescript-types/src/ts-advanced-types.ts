/**
 * @fileoverview ts advanced types
 */

type AdminType = {
  name: string;
  privileges: string[];
}

type EmployeeType = {
  name: string;
  startDate: Date;
}

// intersection type
type ElevatedEmployeeType = AdminType & EmployeeType;

const emp1: ElevatedEmployeeType = {
  name: 'Walker',
  privileges: ['create-server'],
  startDate: new Date(),
};

// intersection type using interface
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

// Or
// interface ElevatedEmployee extends Admin, Employee {}

const emp2: ElevatedEmployee = {
  name: 'Walker',
  privileges: ['create-server'],
  startDate: new Date(),
};

type UnknownEmployee = Employee | Admin;

function printEMployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  // Type guard
  if ('privileges' in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  // Type guard
  if ('startDate' in emp) {
    console.log(`Start date: ${emp.startDate}`);
  }
}

printEMployeeInformation(emp2);
printEMployeeInformation({ name: "Walker", startDate: new Date() })

// Union type
type Combinable = string | number;
type Numeric = number | boolean;

// Intersection => number type
type Universal = Combinable & Numeric;


// Function overload
function add(n1: string, n2: string): string;
function add(n1: number, n2: number): number;
function add(n1: string, n2: number): string;
function add(n1: number, n2: string): string;
function add(n1: Combinable, n2: Combinable) {
  // Type guard
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    // Concatenate string
    return n1.toString() + n2.toString();
  }
  // Math add
  return n1 + n2;
}

const result1 = add(1, 90);
const result2 = add('abc', 'xyz');
const result3 = add('abc', 100);
result3.split(' ');

// instanceof type guard
// class constructor function at running time
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck');
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);


// Discriminated Unions
interface Bird {
  type: 'bird'; // literal type
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // literal type
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case 'bird':
      console.log(`Moving at speed: ${animal.flyingSpeed}`);
      break;
    case 'horse':
      console.log(`Moving at speed: ${animal.runningSpeed}`);
      break;
  }
}

moveAnimal({ type: 'bird', flyingSpeed: 2000 });

// Type casting
// version 1
const userInputElement = <HTMLInputElement>document.getElementById('user-input');
userInputElement.value = 'Hi there';

const userInputElement2 = document.getElementById('user-input-cast')! as HTMLInputElement;
userInputElement2.value = 'Hi there';

const userInputElement3 = document.getElementById('user-input-cast');
if (userInputElement3) {
  (userInputElement3 as HTMLInputElement).value = 'Hi there';
}

// Index properties
interface ErrorContainer { // {email: 'not a valid email'}
  // Index type
  // Property as string type
  // Any property added must have a string name and value must also be a string
  [prop: string]: string;
  // id: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character'
};

// Optional chaining
const fetchUserData = {
  id: 'u1',
  name: 'walker',
  job: {
    title: 'CEO',
    description: 'My own company'
  }
};

// Optional chaining
console.log(fetchUserData?.job?.title);

// NUllish coalescing
const userInput = null;
const storeData = userInput || 'Default';
// if userInput is '', console log will print 'Default'
console.log(storeData);

const userInput2 = '';
const nullishCoaleingStoreData = userInput2 ?? 'Default';
// will print 'Default' when userInput2 is null or undefined
console.log(nullishCoaleingStoreData);
