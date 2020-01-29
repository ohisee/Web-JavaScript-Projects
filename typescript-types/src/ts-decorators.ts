/**
 * @fileoverview Typescript decorators, meta programming
 */

// Decorator executes when class is defined
// function Logger(constructor: Function) {
// 	console.log('Logging...');
// 	console.log(constructor);
// }

// Factory function
function Logger(logString: string) {
  console.log('Logger Factory');
  // return a decorator function
  return function (constructor: Function) {
    console.log(logString);
    console.log("Logger decorator ", constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('Template Factory');
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    console.log('Rendering template...');
    // const hookElement = document.querySelector(`div#${hookId}`);
    // const p = new originalConstructor();
    // if (hookElement) {
    // 	hookElement.innerHTML = template;
    // 	hookElement.querySelector('h2')!.textContent = p.name;
    // }
    // Return a constructor function
    return class extends originalConstructor {
      // Execute when class is instanitated
      constructor(...args: any[]) {
        console.log('New instance of template...');
        super();
        const hookElement = document.querySelector(`div#${hookId}`);
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector('h2')!.textContent = this.name;
        }
      }
    };
  };
}

// Decorator functions executes from bottom up, but creation of decorator functions 
// by decorator factory functions that return decorator functions takes place in the order 
// where these decorator factory functions specified
@Logger('Logging -- person')
@WithTemplate(`<h2>My Decorator</h2>`, 'app')
class Person {
  name = '............Walker............';

  constructor() {
    console.log('Creating person object...');
  }
}

const p1 = new Person();
console.log(p1);

// Decorator executes when a class is defined, and when a property is defined
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property Decorator Log');
  console.log(target, propertyName);
}

function AccessorDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function MethodDecorator(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor) {
  console.log('Method Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ParameterDecorator(target: any, name: string | Symbol, position: number) {
  console.log('Parameter Decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @AccessorDecorator
  set Price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Price must be greater than zero');
    }
  }

  get Price(): number {
    return this._price;
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @MethodDecorator
  getPriceWithTax(@ParameterDecorator tax: number) {
    return this._price * (1 + tax);
  }
}

const b1 = new Product('book', 12.2);
const b2 = new Product('book', 99.9);

// Decorator for specifying this in event listener bind
function AutoBind(
  target: any,
  methodName: string | Symbol,
  descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    // not show in for...in loop
    enumerable: false,
    get() {
      // 'this' in bind(this) refers to whatever is responisble for triggering the getter method
      // Object that defines getter method
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjustedDescriptor;
}

class Printer {
  message = "This works";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const pr1 = new Printer();

const button = document.querySelector('button#for-decorator')! as HTMLButtonElement;
// button.addEventListener('click', pr1.showMessage.bind(pr1));
button.addEventListener('click', pr1.showMessage);

// Decoractor for validation
interface ValidatorConfig {
  // class name
  [property: string]: {
    [validatableProp: string]: string[], // ['required', 'abovezero']
  }
}

const registeredValidators: ValidatorConfig = {};

function registerValidator(
  target: any,
  propertyName: string,
  validatorName: string) {
  const validators = [validatorName];
  if (registeredValidators[target.constructor.name]
    && registeredValidators[target.constructor.name][propertyName]) {
    validators.push(...registeredValidators[target.constructor.name][propertyName]);
  }
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: validators
  };
}

function Required(target: any, propertyName: string) {
  // console.log('Required', registeredValidators[target.constructor.name]);
  // const validators = ['required'];
  // if (registeredValidators[target.constructor.name]
  //   && registeredValidators[target.constructor.name][propertyName]) {
  //   validators.push(...registeredValidators[target.constructor.name][propertyName]);
  // }
  // registeredValidators[target.constructor.name] = {
  //   ...registeredValidators[target.constructor.name],
  //   [propertyName]: validators
  // };
  registerValidator(target, propertyName, 'required');
}

function AboveZeroPrice(target: any, propertyName: string) {
  // const validators = ['abovezero'];
  // if (registeredValidators[target.constructor.name]
  //   && registeredValidators[target.constructor.name][propertyName]) {
  //   validators.push(...registeredValidators[target.constructor.name][propertyName]);
  // }
  // registeredValidators[target.constructor.name] = {
  //   ...registeredValidators[target.constructor.name],
  //   [propertyName]: validators
  // };
  registerValidator(target, propertyName, 'abovezero');
}

function NotBlank(target: any, propertyName: string) {
  registerValidator(target, propertyName, 'NotBlank');
}

// Go through all registered validators and run reach validator
function validate(obj: any) {
  console.log('Validate... ', obj);
  const objectValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objectValidatorConfig) {
    return true;
  }
  console.log(objectValidatorConfig);
  let isValid = true;
  for (const prop in objectValidatorConfig) {
    for (const validator of objectValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && (!!obj[prop]);
          break;
        // return !!obj[prop];
        case 'abovezero':
          isValid = isValid && (obj[prop] > 0);
          break;
        case 'NotBlank':
          isValid = isValid && !(/^\s+$/.test(obj[prop]));
          break;
        // return obj[prop] > 0;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  @NotBlank
  title: string;

  @AboveZeroPrice
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const sourceForm = document.querySelector('form.course')! as HTMLFormElement;
sourceForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.querySelector('input#title')! as HTMLInputElement;
  const priceEL = document.querySelector('input#price')! as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEL.value;

  const course = new Course(title, price);

  if (validate(course)) {
    return;
  }
  alert("Invalidate input");
});
