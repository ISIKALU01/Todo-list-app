import { compareAsc, toDate } from 'date-fns'
import Project from './Project'

export default class TodoList {
  constructor() {
    this.projects = []
    this.projects.push(new Project('Inbox'))
    this.projects.push(new Project('Today'))//why is the push in the constructor?
    this.projects.push(new Project('This week'))
  }

  setProjects(projects) {  
    this.projects = projects
  }

  getProjects() {
    return this.projects
  }

  contains(projectName) {
    return this.projects.some((project) => project.getName() === projectName)
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.name === newProject.name)) return;
    this.projects.push(newProject)
  }

  deleteProject(projectName) {
    const projectToDelete = this.projects.find((project) => project.getName() === projectName)
    this.projects.splice(this.projects.indexOf(projectToDelete), 1)
  }

  
}
