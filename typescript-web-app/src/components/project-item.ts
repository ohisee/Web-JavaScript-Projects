/**
 * @fileoverview Project item component
 */

/// <reference path="base-component.ts" />
/// <reference path="../models/drag-drop.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../decorators/autobind.ts" />

// import { Draggable } from '../models/drag-drop.js';

namespace App {

  // ProjectItem class
  export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
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
}