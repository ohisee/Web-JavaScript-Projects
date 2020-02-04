/**
 * @fileoverview Project input component
 */

import { Component } from "./base-component";
import { Validatable, validate } from "../util/validation";
import { Autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";

// ProjectInput class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  // templateElement: HTMLTemplateElement;
  // hostElement: HTMLDivElement;
  // formElement: HTMLFormElement;

  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {

    super('template#project-input', 'div#app', true, 'user-input');

    // this.templateElement = document.querySelector('template#project-input')! as HTMLTemplateElement;
    // this.hostElement = document.querySelector('div#app')! as HTMLDivElement;

    // const importedNode = document.importNode(this.templateElement.content, true);
    // this.formElement = importedNode.firstElementChild as HTMLFormElement;
    // this.formElement.id = 'user-input';

    // this.titleInputElement = this.formElement.querySelector('input#title')! as HTMLInputElement;
    // this.descriptionInputElement = this.formElement.querySelector('textarea#description')! as HTMLInputElement;
    // this.peopleInputElement = this.formElement.querySelector('input#people')! as HTMLInputElement;

    this.titleInputElement = this.element.querySelector('input#title')! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('textarea#description')! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('input#people')! as HTMLInputElement;

    this.configure();
    // this.attach();
  }

  configure() {
    // this.formElement.addEventListener('submit', this.submitHandler.bind(this));
    // this.formElement.addEventListener('submit', this.submitHandler);
    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent() { }

  // private attach() {
  //   this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
  // }

  private gatherUserInput(): [string, string, number] | void {
    const enteredInputTitle = this.titleInputElement.value;
    const enteredInputDescription = this.descriptionInputElement.value;
    const enteredInputPeopleAmount = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredInputTitle,
      required: true
    };

    const descriptionValidatable: Validatable = {
      value: enteredInputDescription,
      required: true,
      minLength: 10,
      maxLength: 120,
    };

    const peopleAmountValidatable: Validatable = {
      value: +enteredInputPeopleAmount,
      required: true,
      min: 1,
      max: 5,
    };

    if (!validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleAmountValidatable)) {
      alert('Invalid input, please try again');
      return;
    } else {
      return [enteredInputTitle, enteredInputDescription, +enteredInputPeopleAmount];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, peopleAmount] = userInput;
      projectState.addProject(title, description, peopleAmount);
      this.clearInputs();
    }
  }
}
