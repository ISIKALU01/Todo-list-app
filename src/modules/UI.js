import { format } from 'date-fns'
import Storage from './Storage'
import Project from './Project'

export default class UI {
  // LOADING CONTENT

  static loadHomepage() {
    UI.loadProjects()
    UI.initProjectButtons()
  }

  static loadProjects() {
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => {
        if (project.name !== 'Inbox' && project.name !== 'Today' && project.name !== 'This week') {
          UI.createProject(project.name)
        }
      })

    UI.initAddProjectButtons()
  }




  static loadProjectContent(projectName) {
    const projectPreview = document.getElementById('project-board')
    projectPreview.innerHTML = `
        <h1 id="project-name">${projectName}</h1>
        <div class="tasks-list" id="tasks-list"></div>`

    if (projectName !== 'Today' && projectName !== 'This week') {
      projectPreview.innerHTML += `
        <button class="button-add-task" id="button-add-task">
          <i class="fas fa-plus"></i>
          Add Task
        </button>

        <div class="add-task-popup" id="add-task-popup">
          <label for= "task-name">Task Name:</label>
          <input class="input-add-task-popup" id="input-add-task-popup" type="text" placeholder= "Task Name"/>

          <label for="date">Due date:</label>
          <input type= "date" id= "due-date" name= "due-date"/>

          <label for= "priority">Priority:</label>
          
          <select class="priority" name="priority id= "priority" >
            <option class= "low" value="low">Low</option>
            <option class= "medium" value="medium">Medium</option>
            <option class= "high" value="high">High</option>
          </select>
          

          <label for= "description">Description:</label>
        
          <textarea name="description" id="description" cols="30" rows="6"></textarea>
        
          <div class="add-task-popup-buttons">
            <button class="button-add-task-popup" id="button-add-task-popup">Add</button>
            <button class="button-cancel-task-popup" id="button-cancel-task-popup">Cancel</button>
          </div>
        </div>`
    }
    UI.initAddTaskButtons()
  }




  // CREATING CONTENT

  static createProject(name) {
    const userProjects = document.getElementById('projects-list')
    userProjects.innerHTML += ` 
      <button class="button-project" data-project-button>
        <div class="left-project-panel">
          <i class="fas fa-tasks"></i>
          <span>${name}</span>
        </div>
        <div class="right-project-panel">
          <i class="fas fa-times"></i>
        </div>
      </button>`

      UI.initProjectButtons()
  }

  static clearProjects() {
    const projectsList = document.getElementById('projects-list')
    projectsList.textContent = ''
  }

  static clearProjectBoard() {
    const projectPreview = document.querySelector('.project-board')
    projectPreview.innerHTML = ""
  }



  

 












  // ADD PROJECT EVENT LISTENERS

  static initAddProjectButtons() {
    const addProjectButton = document.getElementById('add-project-button')
    const addProjectPopupButton = document.getElementById('button-add-project-bar')
    const cancelProjectPopupButton = document.getElementById('button-cancel-project-bar')
    const addProjectPopupInput = document.getElementById('input-add-project-bar')

    addProjectButton.addEventListener('click', UI.openAddProjectPopup)
    addProjectPopupButton.addEventListener('click', UI.addProject)
    cancelProjectPopupButton.addEventListener('click', UI.closeAddProjectPopup)
    addProjectPopupInput.addEventListener('keypress', UI.handleAddProjectPopupInput)
  }



  static openAddProjectPopup() {
    const addProjectPopup = document.getElementById('add-project-bar')
    const addProjectButton = document.getElementById('add-project-button')

    addProjectPopup.classList.add('active')
    addProjectButton.classList.add('active')
    UI.clearProjectBoard()
  }

  static closeAddProjectPopup() {
    const addProjectPopup = document.getElementById('add-project-bar')
    const addProjectButton = document.getElementById('add-project-button')
    const addProjectPopupInput = document.getElementById('input-add-project-bar')

    addProjectPopup.classList.remove('active')
    addProjectButton.classList.remove('active')
    addProjectPopupInput.value = ''
  }


  static addProject() {
    const addProjectPopupInput = document.getElementById('input-add-project-bar')
    const projectName = addProjectPopupInput.value

    if (projectName === '') {
      alert("Project name can't be empty")
      return
    }

    if (Storage.getTodoList().contains(projectName)) {
      addProjectPopupInput.value = ''
      alert('Project names must be different')
      return
    }

    Storage.addProject(new Project(projectName))
    UI.createProject(projectName)
    UI.closeAddProjectPopup()
  }

  static handleAddProjectPopupInput(e) {
    if (e.key === 'Enter') UI.addProject()
  }





  
  //PROJECT EVENT LISTENERS
  static initProjectButtons(){
    const projectButtons = document.querySelectorAll(".button-project")

    projectButtons.forEach((projectButton) =>
    projectButton.addEventListener('click', UI.handleProjectButton)

    )
  }


  static deleteProject(projectName){
    Storage.deleteProject(projectName)
    UI.clearProjects()
    UI.loadProjects()
  }

  static handleProjectButton(e) {
    const projectName = this.children[0].children[1].textContent
    if(this.classList.contains('active')){
      UI.clearProjectBoard()
    }

    if (e.target.classList.contains('fa-times')) {
      UI.deleteProject(projectName)
      UI.clearProjectBoard()
      return 
    }

    UI.openProject(projectName, this)

  }

  static openProject(projectName, projectButton) {
    const defaultProjectButtons = document.querySelectorAll('.default-project-button')
    const projectButtons = document.querySelectorAll('.button-project')
    const buttons = [...defaultProjectButtons, ...projectButtons]

    buttons.forEach((button) => button.classList.remove('active'))
    projectButton.classList.add('active')
    UI.closeAddProjectPopup()
    UI.loadProjectContent(projectName)
  }










 //ADD TASK EVENT LISTENERS

  static initAddTaskButtons(){
   const addTaskButton = document.getElementById('button-add-task')
   const addTaskPopupButton = document.getElementById('button-add-task-popup')
   const cancelTaskPopupButton = document.getElementById('button-cancel-task-popup')

   addTaskButton.addEventListener("click", UI.openAddTaskPopup )
   cancelTaskPopupButton.addEventListener("click", UI.closeAddTaskPopup )
  }


  static openAddTaskPopup(){
   const addTaskPopup = document.querySelector(".add-task-popup")
   const addTaskButton = document.querySelector(".button-add-task")
  
   addTaskPopup.classList.add('active')

  }


  static closeAddTaskPopup() {
   const addTaskPopup = document.getElementById('add-task-popup')
   const addTaskButton = document.getElementById('button-add-task')
   const addTaskInput = document.getElementById('input-add-task-popup')

   addTaskPopup.classList.remove('active')
 }

  static addTask(){
   const projectName = document.getElementById('project-name').textContent
   const addTaskPopupInput = document.getElementById('input-add-task-popup')
   const taskName = addTaskPopupInput.value

 }

}







