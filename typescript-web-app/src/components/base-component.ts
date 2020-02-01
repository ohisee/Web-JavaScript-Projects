/**
 * @fileoverview Base component
 */

namespace App {

  // Component base class 
  export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
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
}
