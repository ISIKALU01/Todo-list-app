import { compareAsc, toDate } from 'date-fns'
import Task from './Task'
import Project from './Project'

export default class TodoList {
  constructor() {
    this.projects = []
    this.projects.push(new Project('Inbox'))
    this.projects.push(new Project('Today'))
    this.projects.push(new Project('This week'))
  }

  setProjects(projects) {  
    this.projects = projects
  }

  getProjects() {
    return this.projects
  }

  getProject(projectName){
    return this.projects.find((project) => project.getName() === projectName)
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

  updateTodayProject() {
    this.getProject('Today').tasks = []

    this.projects.forEach((project) => {
      if (project.getName() === 'Today' || project.getName() === 'This week')
        return

      const todayTasks = project.getTasksToday()
      console.log(todayTasks)
      todayTasks.forEach((task) => {
        const taskName = `${task.getName()} (${project.getName()})`
        const taskPriority = task.getPriority()
        const taskDescription = task.getDescription()
        this.getProject('Today').addTask(new Task(taskName, task.getDate(), taskPriority, taskDescription))
      })
    })
  }
}
