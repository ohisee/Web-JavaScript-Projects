/**
 * @fileoverview project state management
 */

import { Project, ProjectStatus } from "../models/project";

// Project state management class
type Listener<T> = (items: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export class ProjectState extends State<Project> {
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
// Only run once
export const projectState = ProjectState.getInstance();
