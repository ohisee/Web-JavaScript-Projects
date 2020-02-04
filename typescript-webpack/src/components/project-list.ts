/**
 * @fileoverview Project list component
 */

import { Component } from "./base-component";
import { Autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";
import { DragTarget } from "../models/drag-drop";
import { Project, ProjectStatus } from "../models/project";
import { ProjectItem } from "./project-item";

// ProjectList class
export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
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
