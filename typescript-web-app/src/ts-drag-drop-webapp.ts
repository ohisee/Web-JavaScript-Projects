/**
 * @fileoverview a simple project
 */

// Drag and drop interface
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

// Project type
enum ProjectStatus { Active, Finished }

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public numOfPeople: number,
    public status: ProjectStatus) { }
}

// Project state management class
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  // private listeners: Listener[] = [];

  private static instance: ProjectState;
  private constructor() {
    super();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ProjectState();
    }
    return this.instance;
  }

  // addListener(listenerFn: Listener) {
  //   this.listeners.push(listenerFn);
  // }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject: Project = {
      id: (Math.random() * 9871332).toString(36).replace('.', ''),
      title: title,
      description: description,
      numOfPeople: numOfPeople,
      status: ProjectStatus.Active
    }
    this.projects.push(newProject);
    // for (const listenerFn of this.listeners) {
    //   listenerFn(this.projects.slice());
    // }
    // console.log('new listener ', this.listeners);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find(proj => proj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

// Only one project state object for whole app
const projectState = ProjectState.getInstance();

// Validation
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  // even validatableInput.minLength is zero
  if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (validatableInput.min != null && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (validatableInput.max != null && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
}

// Autobind decorator
function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjustedDescriptor;
}

// Component base class 
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateSelector: string,
    hostElementSelector: string,
    insertAtStart: boolean,
    newElementId?: string) {

    this.templateElement = document.querySelector(templateSelector)! as HTMLTemplateElement;
    this.hostElement = document.querySelector(hostElementSelector)! as T;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }
    this.attach(insertAtStart);
  }

  private attach(insertAtStart: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtStart ? 'afterbegin' : 'beforeend',
      this.element);
  }

  abstract configure(): void;

  abstract renderContent(): void;
}

// ProjectItem class
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
  private project: Project;

  get persons() {
    if (this.project.numOfPeople === 1) {
      return '1 person';
    } else {
      return `${this.project.numOfPeople} persons`;
    }
  }

  constructor(hostElementSelector: string, project: Project) {
    super('#single-project', hostElementSelector, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = `${this.persons} assigned`;
    this.element.querySelector('p')!.textContent = this.project.description;
  }

  @Autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  dragEndHandler(event: DragEvent) {
    console.log("drag stopped");
  }
}

// ProjectList class
class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
  // templateElement: HTMLTemplateElement;
  // hostElement: HTMLDivElement;
  // sectionElement: HTMLElement;
  assignedProjects: Project[];

  constructor(private projectType: 'active' | 'finished') {

    super('template#project-list', 'div#app', false, `${projectType}-projects`);

    // this.templateElement = document.querySelector('template#project-list')! as HTMLTemplateElement;
    // this.hostElement = document.querySelector('div#app')! as HTMLDivElement;
    // const importedNode = document.importNode(this.templateElement.content, true);
    // this.sectionElement = importedNode.firstElementChild as HTMLElement;
    // this.sectionElement.id = `${this.projectType}-projects`;

    this.assignedProjects = [];

    // Register a listener function
    // projectState.addListener((projects: Project[]) => {
    //   // console.log('new project ', projects);
    //   const relevantProjects = projects.filter(proj => {
    //     if (this.projectType === 'active') {
    //       return proj.status === ProjectStatus.Active;
    //     }
    //     return proj.status === ProjectStatus.Finished;
    //   });
    //   this.assignedProjects = relevantProjects;
    //   this.renderProjects();
    // });
    this.configure();

    // this.attach();
    this.renderContent();
  }

  @Autobind
  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      // To trigger drop event, need to set event.preventDefault here
      event.preventDefault();
      const listEL = this.element.querySelector('ul')!;
      listEL.classList.add('droppable');
    }
  }

  @Autobind
  dragLeaveHandler(event: DragEvent) {
    const listEL = this.element.querySelector('ul')!;
    listEL.classList.remove('droppable');
  }

  @Autobind
  dropHandler(event: DragEvent) {
    const projectId = event.dataTransfer!.getData('text/plain');
    projectState.moveProject(
      projectId,
      this.projectType === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
  }

  renderContent() {
    const listId = `${this.projectType}-projects-list`;
    // this.sectionElement.querySelector('ul')!.id = listId;
    // this.sectionElement.querySelector('h2')!.textContent = `${this.projectType.toUpperCase()} PROJECTS`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent = `${this.projectType.toUpperCase()} PROJECTS`;
  }

  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
    this.element.addEventListener('drop', this.dropHandler);

    // Register a listener function
    projectState.addListener((projects: Project[]) => {
      // console.log('new project ', projects);
      const relevantProjects = projects.filter(proj => {
        if (this.projectType === 'active') {
          return proj.status === ProjectStatus.Active;
        }
        return proj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  private renderProjects() {
    const listEl = document.getElementById(`${this.projectType}-projects-list`)! as HTMLUListElement;
    // console.log('render project ', this.assignedProjects);
    while (listEl.hasChildNodes()) {
      let li = listEl.lastChild;
      if (li) {
        listEl.removeChild(li);
      }
    }
    // listEl.innerHTML = '';
    for (const proj of this.assignedProjects) {
      // const listElement = document.createElement('li');
      // listElement.textContent = proj.title;
      // listEl.appendChild(listElement);
      new ProjectItem(`ul#${this.element.querySelector('ul')!.id}`, proj);
    }
  }

  // private attach() {
  //   this.hostElement.insertAdjacentElement('beforeend', this.sectionElement);
  // }
}

// ProjectInput class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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

const proj = (function () {
  return {
    init() {
      new ProjectInput();
      new ProjectList('active');
      new ProjectList('finished');
    }
  }
})();

proj.init();
